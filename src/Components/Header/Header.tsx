import { FC } from 'react';
import { Button } from '../Button/Button';
import styles from './Header.module.css';
import { LangToggle } from '../../Components/LangToggle/Langtoggle';
// import { ReactComponent as Logo } from '../../../public/fav.svg';

interface HeaderProps {
  lang: 'en' | 'ru';
  setLang: React.Dispatch<React.SetStateAction<'en' | 'ru'>>;
  setCurrentPage: React.Dispatch<
    React.SetStateAction<'Start' | 'Me' | 'MySkills' | 'Contacts'>
  >;
}

export const Header: FC<HeaderProps> = ({ lang, setLang, setCurrentPage }) => {
  return (
    <div className={styles['header-container']}>
      <div className={styles['header-buttons']}>
        <nav>
          <Button
            className={styles.start}
            label={
              <svg width="40" height="40" viewBox="0 0 400 400">
                <path
                  d="M0 0 C1.01545898 0.19867676 2.03091797 0.39735352 3.07714844 0.60205078 C52.9758035 10.58327711 96.53871388 34.88580573 133 70 C133.7940625 70.7528125 134.588125 71.505625 135.40625 72.28125 C140.75597303 77.46114055 145.38660506 83.16405541 150 89 C151.19109375 90.48306641 151.19109375 90.48306641 152.40625 91.99609375 C175.32205725 121.03970389 191.22147176 154.85685587 199.6875 190.8125 C199.97306763 191.99936401 199.97306763 191.99936401 200.2644043 193.21020508 C204.22851721 210.89052902 205.555362 228.61292655 205.4375 246.6875 C205.43293793 248.18546112 205.43293793 248.18546112 205.42828369 249.71368408 C205.35621635 265.78341917 204.43972751 281.25213186 201 297 C200.78037598 298.02625488 200.56075195 299.05250977 200.33447266 300.10986328 C191.83138831 338.85817193 174.61772522 375.56726438 149 406 C148.57138672 406.51739746 148.14277344 407.03479492 147.70117188 407.56787109 C137.18164284 420.2564129 126.03816903 431.86528878 113 442 C111.52660156 443.18142578 111.52660156 443.18142578 110.0234375 444.38671875 C70.29759115 476.0035908 18.37047678 496.93437939 -32.79296875 497.203125 C-33.69337387 497.21018463 -34.59377899 497.21724426 -35.52146912 497.22451782 C-72.98691069 497.45161655 -72.98691069 497.45161655 -90 494 C-91.01545898 493.80132324 -92.03091797 493.60264648 -93.07714844 493.39794922 C-142.9758035 483.41672289 -186.53871388 459.11419427 -223 424 C-223.7940625 423.2471875 -224.588125 422.494375 -225.40625 421.71875 C-230.75597303 416.53885945 -235.38660506 410.83594459 -240 405 C-240.7940625 404.01128906 -241.588125 403.02257812 -242.40625 402.00390625 C-266.9776499 370.86198961 -283.32468106 334.48759715 -291.25 295.6875 C-291.47671387 294.57942993 -291.47671387 294.57942993 -291.70800781 293.44897461 C-292.18439803 290.97158418 -292.60252786 288.49133778 -293 286 C-293.17805176 284.88423584 -293.35610352 283.76847168 -293.53955078 282.61889648 C-295.19998488 270.98027732 -295.3987437 259.43103747 -295.375 247.6875 C-295.37445618 246.6738739 -295.37391235 245.6602478 -295.37335205 244.61590576 C-295.33347417 228.41878779 -294.46747801 212.87491635 -291 197 C-290.78037598 195.97374512 -290.56075195 194.94749023 -290.33447266 193.89013672 C-279.82149525 145.98280374 -255.85138923 104.15003587 -222 69 C-221.2471875 68.2059375 -220.494375 67.411875 -219.71875 66.59375 C-214.53885945 61.24402697 -208.83594459 56.61339494 -203 52 C-202.01128906 51.2059375 -201.02257812 50.411875 -200.00390625 49.59375 C-167.66655102 24.07913264 -130.33332447 7.86607287 -90 0 C-89.17274414 -0.16661133 -88.34548828 -0.33322266 -87.49316406 -0.50488281 C-59.91781494 -5.80488028 -27.50199116 -5.57960557 0 0 Z "
                  fill="#d1ffd4c7"
                  transform="translate(301,9)"
                />
                <path
                  d="M0 0 C14.73526082 13.98187907 20.35567457 31.25493534 24.22265625 50.58984375 C24.22265625 54.21984375 24.22265625 57.84984375 24.22265625 61.58984375 C0.13265625 61.58984375 -23.95734375 61.58984375 -48.77734375 61.58984375 C-49.43734375 58.28984375 -50.09734375 54.98984375 -50.77734375 51.58984375 C-54.38997868 44.86286836 -59.51221714 40.87618305 -66.77734375 38.58984375 C-69.74801989 38.16045195 -72.6542232 38.11282408 -75.65234375 38.15234375 C-76.84380005 38.16261597 -76.84380005 38.16261597 -78.05932617 38.1730957 C-85.80189517 38.38531888 -90.91713405 40.08716026 -96.77734375 45.21484375 C-99.66255024 48.64102646 -99.95562654 50.48575869 -100.02734375 54.90234375 C-100.053125 55.84722656 -100.07890625 56.79210937 -100.10546875 57.765625 C-99.63044915 61.85418657 -98.09423641 64.41467944 -95.03515625 67.14453125 C-81.65893767 75.42504752 -65.45476117 78.76004252 -50.40234375 82.71484375 C-28.71734192 88.41509045 -7.04633896 94.60724198 10.22265625 109.58984375 C10.96773437 110.23566406 11.7128125 110.88148438 12.48046875 111.546875 C25.22020689 123.43891194 31.93745605 140.11056895 32.69140625 157.3515625 C32.72565301 159.65992572 32.73552818 161.96876238 32.72265625 164.27734375 C32.71298828 166.10990723 32.71298828 166.10990723 32.703125 167.97949219 C32.49845003 178.18361692 31.06333104 187.14114441 27.22265625 196.58984375 C26.94389648 197.2849707 26.66513672 197.98009766 26.37792969 198.69628906 C22.06184126 209.07306424 16.26159821 216.81925544 8.22265625 224.58984375 C7.21525391 225.66105469 7.21525391 225.66105469 6.1875 226.75390625 C-5.07182296 237.99084487 -21.51327739 244.1892238 -36.77734375 247.58984375 C-37.45539063 247.7506543 -38.1334375 247.91146484 -38.83203125 248.07714844 C-49.99094885 250.63001402 -61.19370379 250.87354794 -72.58984375 250.90234375 C-73.28722656 250.90601959 -73.98460937 250.90969543 -74.703125 250.91348267 C-104.88681942 250.99652691 -133.84234114 243.23064563 -155.88671875 221.69140625 C-165.25547103 211.99029529 -170.89917276 200.37418291 -174.77734375 187.58984375 C-175.11636719 186.47738281 -175.45539063 185.36492187 -175.8046875 184.21875 C-178.11038676 175.53784542 -177.77734375 169.05531925 -177.77734375 159.58984375 C-153.35734375 159.58984375 -128.93734375 159.58984375 -103.77734375 159.58984375 C-102.78734375 163.54984375 -101.79734375 167.50984375 -100.77734375 171.58984375 C-98.76067614 175.08021344 -98.76067614 175.08021344 -96.77734375 177.58984375 C-96.77734375 178.24984375 -96.77734375 178.90984375 -96.77734375 179.58984375 C-96.20113281 179.87730469 -95.62492187 180.16476562 -95.03125 180.4609375 C-93.5994455 181.17808048 -92.16952339 181.89900382 -90.7421875 182.625 C-89.73865234 183.13353516 -89.73865234 183.13353516 -88.71484375 183.65234375 C-88.04324219 183.99394531 -87.37164062 184.33554687 -86.6796875 184.6875 C-78.7394605 188.45380891 -66.87445985 187.72463481 -58.65234375 184.96484375 C-52.46255537 182.27444941 -47.51542302 179.02688053 -44.83984375 172.65234375 C-43.31562823 167.68207574 -43.11792926 163.49050904 -44.83984375 158.52734375 C-49.09112944 152.08184608 -54.82674875 148.63628739 -61.95703125 146.03125 C-62.73343964 145.7390004 -63.50984802 145.44675079 -64.30978394 145.14564514 C-73.31530419 141.86570854 -82.57782106 139.68525383 -91.90234375 137.52734375 C-107.22127513 133.96497099 -122.06167478 129.89013043 -136.15234375 122.71484375 C-136.81097412 122.38170166 -137.46960449 122.04855957 -138.14819336 121.70532227 C-143.95023396 118.67313219 -148.93837887 115.00528657 -153.77734375 110.58984375 C-154.39738281 110.06132812 -155.01742187 109.5328125 -155.65625 108.98828125 C-167.72578962 98.02579113 -173.71617039 81.75814598 -175.00048828 65.82080078 C-175.95308168 42.69051349 -171.75121092 21.80345897 -156.109375 3.9765625 C-118.72927793 -34.28011976 -39.83024969 -34.56436576 0 0 Z "
                  fill="#222"
                  transform="translate(328.77734375,142.41015625)"
                />
                <path
                  d="M0 0 C0.86044922 0.51046875 0.86044922 0.51046875 1.73828125 1.03125 C20.98760178 12.01417036 41.79910651 18.05440991 63.31591797 22.90673828 C94.52078885 29.96837324 94.52078885 29.96837324 103 41 C105.29047949 45.86539762 105.88207862 49.97346677 104.34765625 55.23828125 C101.69811078 62.00428793 98.02903713 65.80420896 91.69921875 69.25390625 C83.01197513 73.03727335 72.28984211 73.67273956 63.12109375 71.234375 C60.94035443 70.30451661 59.00570668 69.25796516 57 68 C55.948125 67.46375 54.89625 66.9275 53.8125 66.375 C48.4254935 61.82597229 45.25727414 56.4203673 44.48730469 49.43041992 C43.13784295 42.54434507 38.83246499 38.80253344 33.90625 34.08984375 C33.0037854 33.19632706 32.1013208 32.30281036 31.17150879 31.38221741 C28.78591918 29.02817114 26.38434752 26.69327492 23.97320557 24.36560059 C22.00313197 22.45584453 20.05015488 20.52910811 18.09784698 18.60121822 C14.06880741 14.62266524 10.02665499 10.65755875 5.95898438 6.71850586 C5.24109741 6.02252792 4.52321045 5.32654999 3.78356934 4.60948181 C2.08144963 2.92939059 2.08144963 2.92939059 0 2 C0 1.34 0 0.68 0 0 Z "
                  fill="#d1ffd4c7"
                  transform="translate(181,258)"
                />
              </svg>
            }
            onClick={() => setCurrentPage('Start')}
          />
          <Button
            lang={lang}
            labelRu="Обо мне"
            labelEn="Me"
            onClick={() => setCurrentPage('Me')}
          />
          <Button
            lang={lang}
            labelRu="Мои навыки"
            labelEn="My skills"
            onClick={() => setCurrentPage('MySkills')}
          />
          <Button
            lang={lang}
            labelRu="Мои контакты"
            labelEn="My contacts"
            onClick={() => setCurrentPage('Contacts')}
          />
        </nav>
        <span className={styles.toggle}>
          <LangToggle lang={lang} setLang={setLang} />
        </span>
      </div>
    </div>
  );
};
