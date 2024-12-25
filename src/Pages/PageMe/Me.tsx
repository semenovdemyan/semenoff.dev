import { FC, useEffect, useState } from 'react';
import './Me.module.css';
import styles from './Me.module.css';
import imgUrl from '../../assets/images/me.jpg';
import { lazy, Suspense } from 'react';

const LazyImg = lazy(() => import('../../Components/LazyImg'));

const content = {
  ru: {
    description: (
      <p>
        Привет! меня зовут Демьян.
        <br />
        <br />Я — Web-разработчик из Санкт-Петербурга, который хочет, чтобы в
        мире было больше удобных и красивых интерфейсов. Мой путь в
        веб-разработке начался, когда один из моих друзей показал мне, что можно
        делать всего лишь с помощью редактора кода и домашнего ПК. С тех пор я
        освоил множество технологий, получил
        <strong>&nbsp;коммерческий&nbsp;опыт</strong>, и с удовольствием
        использую их для воплощения креативных идей в жизнь.
        <br />
        <br />
        Я верю, что пользовательский опыт — это ключ к успеху любого проекта,
        поэтому всегда стремлюсь создавать интуитивно понятные и отзывчивые
        интерфейсы. Кроме того, я хочу развивать навыки, связанные с анимацией.
        <br />
        <br />
        Когда я не пишу код, я люблю кататься по городам или заснеженным
        склонам, изучая новые места, что помогает мне оставаться вдохновленным и
        находить свежие идеи для своих проектов.
        <br />
        <br />
        Давайте вместе сделаем круто!😎
      </p>
    ),
  },
  en: {
    description: (
      <p>
        Hi! My name is Demian.
        <br />
        <br />I am a web developer from Saint Petersburg who wants to see more
        user-friendly and beautiful interfaces in the world. My journey into web
        development began when one of my friends showed me what could be done
        with just a code editor and a home PC. Since then, I have mastered many
        technologies, gained my first <strong>commercial experience</strong>,
        and I happily use them to bring creative ideas to life.
        <br />
        <br />
        I believe that user experience is the key to the success of any project,
        so I always strive to create intuitive and responsive interfaces.
        Additionally, I am eager to develop my skills related to motion and
        animation.
        <br />
        <br />
        When I'm not writing code, I love to travel to cities or ski down snowy
        slopes, exploring new places, which helps me stay inspired and find
        fresh ideas for my projects.
        <br />
        <br />
        Let's make something cool! 😎
      </p>
    ),
  },
};

export const Me: FC<{ lang: 'ru' | 'en' }> = ({ lang }) => {
  const { description } = content[lang];
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const loadImage = new Image();
    loadImage.src = imgUrl;
    loadImage.onload = () => setIsImageLoaded(true);
  }, []);

  return (
    <div className={styles['container']}>
      <div className={styles['textContainer']}>{description}</div>
      <div className={styles['photoContainer']}>
        <Suspense fallback={<div>Loading image...</div>}>
          <div className={styles['blurLoad']}>
            {isImageLoaded ? (
              <LazyImg
                className={styles['photo']}
                src={imgUrl}
                alt="my photo"
              />
            ) : (
              <div className={styles['loadingMessage']}>
                Image is loading...
              </div>
            )}
          </div>
        </Suspense>
      </div>
    </div>
  );
};
