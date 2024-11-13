// import { HooksTester } from '../../hooks/HooksTester';
// import { AnimatedIcons } from '../../Components/AnimatedIcons/AnimatedIcons';
// import { RadioSlider } from '../../Components/RadioSlider/RadioSlider';
import React from 'react';

export const Start: React.FC<{ lang?: 'ru' | 'en' }> = () => {
  return (
    <>
      {/* <RadioSlider /> */}
      {/* <AnimatedIcons /> */}
    </>
    // <div hidden>
    //   <span>
    //     <h1 className={styles.underDevelopement}>
    //       {lang === 'ru' ? (
    //         <div>
    //           Сайт ещё находится в разработке.
    //           <br />
    //           Мобильная версия может отображаться некорректно.
    //           <br />
    //           <br />
    //           Для продолжения, выберите раздел.
    //         </div>
    //       ) : (
    //         <div>
    //           The site is still under development.
    //           <br />
    //           The mobile version may not display correctly.
    //           <br />
    //           <br />
    //           To continue, please select a section.
    //         </div>
    //       )}
    //     </h1>
    //   </span>
    //   <div hidden className={styles.tester}>
    //     <HooksTester />
    //   </div>
    // </div>
  );
};
