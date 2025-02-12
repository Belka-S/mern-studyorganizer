import PropTypes from 'prop-types';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { BsSendCheck } from 'react-icons/bs';
import { SiDeepl, SiGoogletranslate } from 'react-icons/si';
import { MdOutlineTextIncrease } from 'react-icons/md';

import {
  translateText,
  normalizeClipboard,
  trimChar,
  scrollOnTop,
  scrollOnBottom,
} from 'utils/helpers';
import { useAuth, useClusters, useAutosizeTextArea } from 'utils/hooks';
import {
  addElementThunk,
  updateElementThunk,
  fetchElementsThunk,
} from 'store/element/elementThunks';

import {
  Form,
  SubmitBtn,
  TranslateBtn,
  BtnWrap,
  Textarea,
  EditBtn,
} from './Element.styled';

const ElementEditForm = ({ el, handleEdit, setRecording, setTranslation }) => {
  const elementRef = useRef(null);
  const captionRef = useRef(null);
  const buttonsRef = useRef(null);

  const dispatch = useDispatch();
  const { user } = useAuth();
  const { activeCluster } = useClusters();
  const [article, setArticle] = useState('');

  const { _id, element, caption } = el;

  const { register, watch, setValue, handleSubmit, setFocus } = useForm({
    mode: 'onBlur',
    defaultValues: { element, caption },
  });
  // Set caption from 'el' argument
  useEffect(() => {
    setValue('caption', caption);
  }, [caption, setValue]);
  // Get refs in RHF https://www.react-hook-form.com/faqs/#Howtosharerefusage
  const { ref: refElement, ...restElement } = register('element');
  const { ref: refCaption, ...restCaption } = register('caption');
  // Autosize textarea
  const refs = [elementRef.current, captionRef.current, buttonsRef.current];
  const values = [watch('caption'), watch('element')];
  useAutosizeTextArea(refs, values);
  // set Article (Deutsch)
  useEffect(() => {
    setFocus('element');
    if (article && element.trim().startsWith('der')) {
      setValue('element', article + element.replace('der', '').trim() + ', ');
    } else if (article && element.trim().startsWith('die')) {
      setValue('element', article + element.replace('die', '').trim() + ', ');
    } else if (article && element.trim().startsWith('das')) {
      setValue('element', article + element.replace('das', '').trim() + ', ');
    } else {
      article
        ? setValue('element', article + element + ', ')
        : setValue('element', article + element);
    }
  }, [article, element, setFocus, setValue]);

  const onSubmit = useCallback(
    data => {
      const lang = user.lang;
      let caption = data.caption.trim();
      let element = normalizeClipboard(data.element, activeCluster.lang)
        .split(/\s+/)
        .join(' ')
        .replaceAll('\n', ' ')
        .trim();
      // Normalize element
      element = trimChar(element, ',');
      // Normalize caption
      caption = trimChar(caption, ',');
      if (
        user.lang.includes('en') &&
        activeCluster.lang.includes('de') &&
        !['.', '!', '?', '"'].includes(element.at(-1))
      ) {
        const isNetzVerb =
          (element.includes('hat') || element.includes('ist')) &&
          element.split('\n')[0].split(/,\s+/)[0].endsWith('n');
        if (isNetzVerb) {
          const captionParts = caption.split(/,\s+/);
          caption = captionParts
            .map(el => (el.startsWith('to ') ? el : `to ${el}`))
            .join(', ');
        }
      }

      dispatch(
        _id
          ? updateElementThunk({ _id, lang, element, caption })
          : addElementThunk({ ...el, element, caption }),
      ).then(dispatch(fetchElementsThunk()));

      if (!_id && caption) {
        activeCluster.sortBy ? scrollOnTop() : scrollOnBottom();
        setRecording('');
        setTranslation('');
      }
      handleEdit(true);
    },
    [
      _id,
      activeCluster.lang,
      activeCluster.sortBy,
      dispatch,
      el,
      handleEdit,
      setRecording,
      setTranslation,
      user.lang,
    ],
  );

  const handleSetArticle = () => {
    if (article === '') setArticle('der ');
    if (article === 'der ') setArticle('die ');
    if (article === 'die ') setArticle('das ');
    if (article === 'das ') setArticle('');
  };

  const translateElement = useCallback(
    async engine => {
      const inputText = watch('element');
      const element = normalizeClipboard(inputText, activeCluster.lang)
        .split(/\s+/)
        .join(' ')
        .replaceAll('\n', ' ')
        .trim();

      const payload = { from: activeCluster.lang, to: user.lang };
      const caption = await translateText(element, payload, engine);
      setValue('caption', caption);
    },
    [activeCluster.lang, setValue, user.lang, watch],
  );

  // Set key controle
  const modalEl = document.querySelector('#modal');
  useEffect(() => {
    const handleKeyDown = async e => {
      if (
        modalEl.children.length === 0 &&
        (e.code === 'NumpadAdd' || e.key === 'F2')
      ) {
        e.preventDefault();
        await translateElement(user.engine);
        handleSubmit(onSubmit)();
      }
      if (
        e.key === 'Enter' ||
        e.key === '§' ||
        (modalEl.children.length > 0 && e.key === 'F2')
      ) {
        e.preventDefault();
        e.currentTarget.blur();
        handleSubmit(onSubmit)();
      }
      if (e.key === 'Escape') {
        e.preventDefault();
        handleEdit(true);
        e.currentTarget.blur();
      }
      if (e.code === 'AltRight') {
        elementRef.current.focus();
      }
    };
    addEventListener('keydown', handleKeyDown);
    return () => {
      removeEventListener('keydown', handleKeyDown);
    };
  }, [
    handleEdit,
    handleSubmit,
    modalEl.children.length,
    onSubmit,
    translateElement,
    user.engine,
  ]);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Textarea
        {...restElement}
        name="element"
        ref={e => {
          refElement(e);
          elementRef.current = e;
        }}
      />

      <BtnWrap ref={buttonsRef}>
        <EditBtn type="button" onClick={handleSetArticle}>
          <MdOutlineTextIncrease size="18px" />
        </EditBtn>
        <TranslateBtn type="button" onClick={() => translateElement('google')}>
          <SiGoogletranslate size="16px" />
        </TranslateBtn>
        <TranslateBtn type="button" onClick={() => translateElement('deepl')}>
          <SiDeepl size="18px" />
        </TranslateBtn>
        <SubmitBtn>
          <BsSendCheck size="16px" />
        </SubmitBtn>
      </BtnWrap>

      <Textarea
        {...restCaption}
        name="caption"
        ref={e => {
          refCaption(e);
          captionRef.current = e;
        }}
      />
    </Form>
  );
};

export default ElementEditForm;

ElementEditForm.propTypes = {
  el: PropTypes.object,
  handleEdit: PropTypes.func,
  setRecording: PropTypes.func,
  setTranslation: PropTypes.func,
};
