import './Start.module.css';

export const Start: React.FC<{ lang: 'ru' | 'en' }> = ({ lang }) => {
  return (
    <div className="flex">
      {lang === 'ru' ? (
        <h1 className="under-developement">
          Сайт ещё находится в разработке.
          <br />
          Мобильная версия может отображаться некорректно.
          <br />
          <br />
          Для продолжения выберите раздел
        </h1>
      ) : (
        <h1 className="under-developement">
          Start page and mobile version are still in development.
          <br />
          Choose tab to continue.
        </h1>
      )}
    </div>
  );
};
