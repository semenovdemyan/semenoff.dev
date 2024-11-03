import './Me.module.css';
import styles from './Me.module.css';
import imgUrl from '../../assets/images/me.jpg';

export const Me: React.FC<{ lang: 'ru' | 'en' }> = ({ lang }) => {
  return (
    <div className={styles['container']}>
      {lang === 'ru' ? (
        <div className={styles['textContainer']}>
          <p>
            Привет, меня зовут Демьян!
            <br />
            <br />
            Я&nbsp;&mdash; Web-разработчик из&nbsp;Санкт-Петербурга, который
            хочет, чтобы в&nbsp;мире было больше удобных и&nbsp;красивых
            интерфейсов. Мой путь в&nbsp;веб-разработке начался, когда один
            из&nbsp;моих друзей показал мне, что можно делать всего лишь
            с&nbsp;помощью редактора кода и&nbsp;домашнего ПК. С&nbsp;тех пор
            я&nbsp;освоил множество технологий, получил первый{' '}
            <strong>коммерческий опыт</strong>, и&nbsp;с&nbsp;удовольствием
            использую их&nbsp;для воплощения креативных идей в&nbsp;жизнь.
            Я&nbsp;верю, что пользовательский опыт&nbsp;&mdash; это ключ
            к&nbsp;успеху любого проекта, поэтому всегда стремлюсь создавать
            интуитивно понятные и&nbsp;отзывчивые интерфейсы. Кроме того,
            я&nbsp;очень хочу развивать навыки, связанные с&nbsp;Motion
            и&nbsp;анимацией.
            <br />
            <br />
            Когда я&nbsp;не&nbsp;пишу код, я&nbsp;люблю кататься по&nbsp;городам
            или заснеженным склонам, изучая новые места, что помогает мне
            оставаться вдохновленным и&nbsp;находить свежие идеи для своих
            проектов.
            <br />
            <br />
            Давайте вместе сделаем круто!😎
          </p>
        </div>
      ) : (
        <div className={styles['textContainer']}>
          <p>
            Hi, my name is Demyan! <br /> <br /> I am a web developer from Saint
            Petersburg who wants to see more user-friendly and beautiful
            interfaces in the world. My journey into web development began when
            one of my friends showed me what could be done with just a code
            editor and a home PC. Since then, I have mastered many technologies,
            gained my first <strong>commercial experience</strong>, and I
            happily use them to bring creative ideas to life. I believe that
            user experience is the key to the success of any project, so I
            always strive to create intuitive and responsive interfaces.
            Additionally, I am eager to develop my skills related to motion and
            animation. <br /> <br /> When I'm not writing code, I love to travel
            to cities or ski down snowy slopes, exploring new places, which
            helps me stay inspired and find fresh ideas for my projects. <br />{' '}
            <br /> Let's make something cool together! 😎
          </p>
        </div>
      )}
      <div className={styles['photoContainer']}>
        <img className={styles['photo']} src={imgUrl} alt="my photo" />
      </div>
    </div>
  );
};
