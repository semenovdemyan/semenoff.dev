import React from 'react';
import { ReactComponent as Icon1 } from '../../assets/icons/icon1.svg';
import { ReactComponent as Icon2 } from '../../assets/icons/icon2.svg';
import { ReactComponent as Icon3 } from '../../assets/icons/icon3.svg';
import { ReactComponent as Icon4 } from '../../assets/icons/icon4.svg';
import { ReactComponent as Icon5 } from '../../assets/icons/icon5.svg';
import { ReactComponent as Icon6 } from '../../assets/icons/icon6.svg';
import { ReactComponent as Icon7 } from '../../assets/icons/icon7.svg';

import styles from './AnimatedIcons.module.css';

interface AnimatedIconsProps {
  lang?: 'en' | 'ru';
}

export const AnimatedIcons: React.FC<AnimatedIconsProps> = () => {
  const icons = [Icon1, Icon2, Icon3, Icon4, Icon5, Icon6, Icon7];

  return (
    <div className={styles.iconContainer}>
      {icons.map((Icon, index) => (
        <Icon key={index} /> // Рендерим каждый импортированный SVG как компонент
      ))}
      <Icon1 />
    </div>
  );
};
