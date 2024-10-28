import React, { useState } from 'react';
import { Home } from './Pages/PageHome/Home';
import { AboutMe } from './Pages/PageAboutMe/AboutMe';
import { Contacts } from './Pages/PageContacts/Contacts';

type Page = 'Home' | 'AboutMe' | 'Contacts';

const pages: Record<Page, React.ReactNode> = {
  Home: <Home />,
  AboutMe: <AboutMe />,
  Contacts: <Contacts />,
};

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('Home');

  return (
    <div>
      {Object.keys(pages).map((page) => (
        <button key={page} onClick={() => setCurrentPage(page as Page)}>
          {page}
        </button>
      ))}
      {pages[currentPage]}
    </div>
  );
};

export default App;
