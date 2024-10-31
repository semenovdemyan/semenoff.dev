import React, { useState } from 'react';
import './LangToggle.css';

export const LangToggle: React.FC = () => {
  const [lang, setLang] = useState<'en' | 'ru'>('ru');

  const toggleLang = () => {
    setLang((prevLang) => (prevLang === 'ru' ? 'en' : 'ru'));
  };

  return (
    <div className="lang-toggle">
      <button style={{ minWidth: '50px' }} onClick={toggleLang}>
        {lang === 'ru' ? 'RU' : 'ENG'}
      </button>
    </div>
  );
};
