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
                Пока мобильная версия и контент находятся в разработке, вы
                можете навести курсор на навык, чтобы узнать о его полезности
                для веб-разработчика.
              </div>
            ) : (
              <div>
                While the mobile version and content are under development, you
                can hover over a skill to learn about its usefulness for a web
                developer.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
