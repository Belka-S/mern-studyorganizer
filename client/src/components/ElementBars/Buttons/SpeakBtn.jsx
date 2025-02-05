import { useState, useEffect } from 'react';

import 'regenerator-runtime/runtime';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';

import { TbMicrophone } from 'react-icons/tb';
import { BsStopFill } from 'react-icons/bs';

import { useAuth, useClusters } from 'utils/hooks';
import Button from 'components/shared/Button/Button';
import Modal from 'components/shared/Modal/Modal';

import ElementEditForm from 'components/ElementList/Li/Element/ElEditForm';
import { replaceByMap, translateText } from 'utils/helpers';
import { replaceMap } from 'utils/constants/replaceMap';
import { themes } from 'styles/themes';

const { button } = themes.shadows;
const { m, xl } = themes.indents;

const SpeakBtn = () => {
  const { user } = useAuth();
  const [isForm, setIsForm] = useState(false);
  const { activeCluster } = useClusters();
  const [recording, setRecording] = useState('');
  const [translation, setTranslation] = useState('');

  const { transcript, listening, resetTranscript } = useSpeechRecognition();
  const { isMicrophoneAvailable } = useSpeechRecognition();
  const { browserSupportsSpeechRecognition } = useSpeechRecognition();

  // Add punctuation
  const capitalizedTranscript =
    recording.endsWith(', ') || recording.replace(/[a-z]$/, '*#').endsWith('*#')
      ? transcript.replace(/^./, str => ` ${str}`)
      : transcript.replace(/^./, str => str.toUpperCase());
  // /[a-z]$/ - last letter, /^./ - first letter
  const wholeText = `${recording}${capitalizedTranscript}`;
  const punctuatedTranscript = replaceByMap(wholeText, replaceMap);

  const setKeyboardPunctuation = (text, char) =>
    text.trim().endsWith(char) ? `${text.trim()} ` : `${text.trim()}${char} `;

  useEffect(() => {
    if (!listening || !isForm) return;
    const charList = ['.', '?', '!', ','];
    const handleKeyDown = e => {
      if (charList.includes(e.key)) {
        e.preventDefault();
        const textWithKey = setKeyboardPunctuation(punctuatedTranscript, e.key);
        setRecording(textWithKey);
        resetTranscript();
      }
      if (e.key === 'Backspace') {
        e.preventDefault();
        const lastIndex = punctuatedTranscript.length - 1;
        const backspace = punctuatedTranscript.substring(0, lastIndex);
        setRecording(backspace);
        resetTranscript();
      }
      if (e.key === 'Space') {
        e.preventDefault();
        const space = punctuatedTranscript + ' ';
        setRecording(space);
        resetTranscript();
      }
    };
    addEventListener('keydown', handleKeyDown);
    return () => {
      removeEventListener('keydown', handleKeyDown);
    };
  }, [isForm, listening, punctuatedTranscript, resetTranscript]);
  // Start/Stop recording by cmd+R/ Finish escape/enter
  useEffect(() => {
    const handleKeyDown = async e => {
      // Finish
      if (e.ctrlKey && e.key === 'Escape') {
        e.preventDefault();
        SpeechRecognition.stopListening();
        setIsForm(false);
        setRecording('');
        setTranslation('');
        resetTranscript();
        return;
      }
      // Start
      if (!listening) {
        if (e.metaKey && e.key === 'r' && !e.altKey && !e.shiftKey) {
          e.preventDefault();
          setIsForm(true);
          SpeechRecognition.startListening({
            language: activeCluster.lang,
            continuous: true,
          });
        }
      }
      // Stop
      if (listening) {
        if (e.metaKey && e.key === 'r' && !e.altKey && !e.shiftKey) {
          e.preventDefault();
          SpeechRecognition.stopListening();
          // Finalisation after stop
          const lastIndex = punctuatedTranscript.at(-1);
          const finalText =
            !lastIndex || [('.', '?', '!')].includes(lastIndex)
              ? punctuatedTranscript
              : setKeyboardPunctuation(punctuatedTranscript, '.');
          const translation = await translateText(
            finalText,
            { from: activeCluster.lang, to: user.lang },
            user.engine,
          );
          setRecording(finalText);
          setTranslation(translation);
          resetTranscript();
        }
      }
    };
    addEventListener('keydown', handleKeyDown);
    return () => {
      removeEventListener('keydown', handleKeyDown);
    };
  }, [
    activeCluster.lang,
    isForm,
    listening,
    punctuatedTranscript,
    resetTranscript,
    user.engine,
    user.lang,
  ]);
  // https://www.google.com/intl/en/chrome/demos/speech.html
  if (!browserSupportsSpeechRecognition || !isMicrophoneAvailable) return;

  const toggleRecognition = async e => {
    e?.currentTarget.blur();
    if (!listening) {
      setIsForm(true);
      SpeechRecognition.startListening({
        language: activeCluster.lang,
        continuous: true,
      });
    } else {
      SpeechRecognition.stopListening();
      // Finalisation after stop
      const lastIndex = punctuatedTranscript.at(-1);
      const finalText =
        !lastIndex || [('.', '?', '!')].includes(lastIndex)
          ? punctuatedTranscript
          : setKeyboardPunctuation(punctuatedTranscript, '.');
      const payload = { from: activeCluster.lang, to: user.lang };
      const translation = await translateText(finalText, payload, user.engine);
      setRecording(finalText);
      setTranslation(translation);
      resetTranscript();
    }
  };

  return (
    <>
      <Button onClick={toggleRecognition} $s="m" $round={true} $bs={button}>
        {!listening ? <TbMicrophone size={18} /> : <BsStopFill size={18} />}
      </Button>

      {isForm && (
        <Modal $x={`left: ${m}`} $y={`top: ${xl}`} $bd="none">
          <ElementEditForm
            el={{
              cluster: activeCluster._id,
              element: punctuatedTranscript.trim(),
              caption: translation.trim(),
              favorite: true,
              checked:
                punctuatedTranscript.split(/\s+/).length < 20 ? true : false,
            }}
            setIsForm={setIsForm}
            setRecording={setRecording}
            setTranslation={setTranslation}
          />
        </Modal>
      )}
    </>
  );
};

export default SpeakBtn;
