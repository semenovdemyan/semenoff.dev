import './Start.module.css';
export const Start: React.FC<{ lang: 'ru' | 'en' }> = ({ lang }) => {
  return (
    <div>
      {lang === 'ru' ? (
        <h1>Стартовая страница ещё в разработке</h1>
      ) : (
        <h1>Start page is still in development yet.</h1>
      )}
    </div>
  );
};
