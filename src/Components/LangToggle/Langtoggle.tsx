import './LangToggle.css';

interface LangToggleProps {
  lang: 'en' | 'ru';
  setLang: React.Dispatch<React.SetStateAction<'en' | 'ru'>>;
}

export const LangToggle: React.FC<LangToggleProps> = ({ lang, setLang }) => {
  const langToggle = () => {
    setLang((prevLang) => (prevLang === 'ru' ? 'en' : 'ru'));
  };

  return (
    <div className="lang-toggle">
      <button style={{ minWidth: '50px' }} onClick={langToggle}>
        {lang === 'ru' ? 'RU' : 'ENG'}
      </button>
    </div>
  );
};
