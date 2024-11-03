import React, { useState } from 'react';
import styles from './MySkills.module.css';
import MySkillsJSON from './MySkills.json';

const skills = MySkillsJSON;

const renderSkills = (
  skills: {
    skillName: string;
    descriptionRu: string;
    descriptionEng: string;
  }[],
  lang: 'ru' | 'en',
  onHover: (text: string) => void
) => {
  return (
    <ul className={styles['skillsList']}>
      {skills.map((skill) => (
        <li
          key={skill.skillName}
          onMouseEnter={() =>
            onHover(lang === 'ru' ? skill.descriptionRu : skill.descriptionEng)
          }
          onMouseLeave={() => onHover('')}
        >
          <h2>{skill.skillName}</h2>
        </li>
      ))}
    </ul>
  );
};

interface MySkillsProps {
  lang: 'ru' | 'en';
}

export const MySkills: React.FC<MySkillsProps> = ({ lang }) => {
  const [hoveredText, setHoveredText] = useState<string>('');

  return (
    <div style={{ fontSize: '30px' }} className={styles['skillsWrapper']}>
      {renderSkills(skills, lang, setHoveredText)}
      <div className={styles['skillsBanner']}>
        {hoveredText ? (
          hoveredText
        ) : (
          <div>
            {lang === 'ru' ? (
              <div>
                Сейчас мой сайт не выглядит так, как я его задумывал.
                <br />
                <br />
                Пока перевод сайта "по кнопке" и мобильная версия находятся в
                разработке, вы можете навести курсор на навык, чтобы узнать о
                его полезности для веб-разработчика.
              </div>
            ) : (
              <div>
                Right now, my site doesn’t look quite the way I envisioned it.
                <br />
                <br />
                While the site translation "by button" and the mobile version
                are still in development, you can hover over the skill to learn
                about its usefulness for a web developer.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
