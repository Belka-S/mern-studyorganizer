import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { toast } from 'sonner';

import Button from 'components/shared/Button/Button';
import { useAuth, useClusters, useElements } from 'utils/hooks';
import { speakText, speakTranslation } from 'utils/helpers';
import { themes } from 'styles/themes';
import RefreshBtn from 'components/shared/Button/RefreshBtn';
import GridWrap from 'components/shared/GridWrap/GridWrap';

import RecordBtn from './Buttons/RecordBtn';

const { background } = themes.colors;
const { button } = themes.shadows;
const { s, m } = themes.indents;

const ElementPlayBar = ({ className, filtredElements, setLiColor }) => {
  const { user } = useAuth();
  const { activeCluster: ac } = useClusters();
  const { activeElement: ae } = useElements();
  const [voices, setVoices] = useState(null);

  useEffect(() => {
    const voices = window.speechSynthesis.getVoices();
    if (Array.isArray(voices) && voices.length > 0) {
      setVoices(voices);
    }
    if ('onvoiceschanged' in window.speechSynthesis) {
      window.speechSynthesis.onvoiceschanged = () => {
        const voices = window.speechSynthesis.getVoices();
        setVoices(voices);
      };
    }
  }, []);
  if (!Array.isArray(voices) || voices.length === 0) return;

  const getLanguage = arr => {
    if (!arr.length) return;
    let maxLang = '';
    let counter = 0;
    const langObj = arr.reduce((acc, el) => {
      if (!acc[el.lang]) acc[el.lang] = 0;
      acc[el.lang] += 1;
      return acc;
    }, {});
    for (const key in langObj) {
      if (langObj[key] > counter) {
        counter = langObj[key];
        maxLang = key;
      }
    }
    return maxLang;
  };

  const captionLang = filtredElements.length
    ? getLanguage(filtredElements)
    : user.lang;

  const setPauseDivider = (text, divider) =>
    text
      .replaceAll(', `', `;${divider} `)
      .replaceAll(' `', `${divider} `)
      .replaceAll(',`', ';');

  const getTextString = ({ text, playList, divider }) => {
    let textString = '';
    for (let i = 0; i < playList.length; i += 1) {
      let part = playList[i][text];
      const ld = `@±@${playList[i].lang}${divider}`;
      if (['.', '!', '?', '"'].includes(part.at(-1))) {
        textString += setPauseDivider(part, divider)
          // abbreviations
          .replaceAll('Mr.', 'misteR')
          .replaceAll('Ms.', 'misS')
          .replaceAll('Mrs.', 'missiS')
          // punctuation
          .replaceAll('...', text !== 'caption' ? `__${divider}` : `__${ld}`)
          .replaceAll('.', text !== 'caption' ? `.${divider}` : `.${ld}`)
          .replaceAll(',', text !== 'caption' ? `,${divider}` : `,${ld}`)
          .replaceAll('!', text !== 'caption' ? `!${divider}` : `!${ld}`)
          .replaceAll('?', text !== 'caption' ? `?${divider}` : `?${ld}`)
          .replaceAll(':', text !== 'caption' ? `:${divider}` : `:${ld}`);
        // numbers
        if (ac.lang.includes('de')) {
          textString = textString
            .replaceAll(`0.${divider}`, '0.')
            .replaceAll(`1.${divider}`, '1.')
            .replaceAll(`2.${divider}`, '2.')
            .replaceAll(`3.${divider}`, '3.')
            .replaceAll(`4.${divider}`, '4.')
            .replaceAll(`5.${divider}`, '5.')
            .replaceAll(`6.${divider}`, '6.')
            .replaceAll(`7.${divider}`, '7.')
            .replaceAll(`8.${divider}`, '8.')
            .replaceAll(`9.${divider}`, '9.');
        }
      } else if (!playList[i].element.startsWith('[')) {
        if (text === 'caption') {
          if (part.includes(' [')) {
            part = part.substring(0, part.indexOf(' ['));
          }
          part = `${part}@±@${playList[i].lang}`;
        }
        textString += part + divider;
      }
    }

    return textString;
  };

  const availableVoices = voices;
  const playElements = e => {
    e.currentTarget.blur();
    setLiColor(background);
    const divider = '$*@';
    const index = filtredElements.findIndex(
      item => item.element === ae.element,
    );
    const playList = filtredElements.splice(index === -1 ? 0 : index);

    const msg = speakText({
      setLiColor,
      divider,
      voices: availableVoices,
      text: getTextString({ text: 'element', playList, divider }),
      lang: ac.lang,
      rate: ac.rate,
    });
    msg && toast.error(msg);
  };

  const playCaptions = e => {
    e.currentTarget.blur();
    const divider = '$*@';
    setLiColor(background);
    const index = filtredElements.findIndex(
      item => item.element === ae.element,
    );
    const playList = filtredElements.splice(index === -1 ? 0 : index);

    const msg = speakText({
      setLiColor,
      divider,
      voices: availableVoices,
      text: getTextString({ text: 'caption', playList, divider }),
      lang: captionLang,
      rate: user.rate,
    });
    msg && toast.error(msg);
  };

  const playAll = e => {
    e.currentTarget.blur();
    setLiColor(background);
    let textString = '';
    const divider = '$*@';
    const index = filtredElements.findIndex(
      item => item.element === ae.element,
    );
    const playList = filtredElements.splice(index === -1 ? 0 : index);

    for (let i = 0; i < playList.length; i += 1) {
      const { element, caption, lang } = playList[i];
      if (!element.startsWith('[')) {
        const normalElement = setPauseDivider(element, '');
        const normalCaption = caption.includes(' [')
          ? caption.substring(0, caption.indexOf(' ['))
          : setPauseDivider(caption, '');
        textString += normalElement + `@±@${lang}` + normalCaption + divider;
      }
    }
    const msg = speakTranslation({
      setLiColor,
      divider,
      voices: availableVoices,
      text: textString,
      lang: ac.lang,
      rate: user.rate,
    });
    msg && toast.error(msg);
  };

  return (
    <GridWrap
      className={className}
      $m={`${s} ${m}`}
      $pos="fixed"
      $side="right"
      $high="bottom"
      $gtc=" 1fr 1fr 0.5fr 1fr"
      $cg={s}
    >
      <RecordBtn />
      <Button onClick={playElements} $s="m" $round={true} $bs={button}>
        {ac?.lang.at(0).toUpperCase() + ac?.lang.substring(1)}
      </Button>
      <RefreshBtn onClick={playAll} />
      <Button onClick={playCaptions} $s="m" $round={true} $bs={button}>
        {captionLang?.at(0).toUpperCase() + captionLang?.substring(1)}
      </Button>
    </GridWrap>
  );
};

export default ElementPlayBar;

ElementPlayBar.propTypes = {
  className: PropTypes.string,
  filtredElements: PropTypes.array,
  setLiColor: PropTypes.func,
};
