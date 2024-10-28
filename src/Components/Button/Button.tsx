import { useState } from 'react';
import { Home } from '../../Pages/PageHome/Home';
import { Contacts } from '../../Pages/PageContacts/Contacts';
import { AboutMe } from '../../Pages/PageAboutMe/AboutMe';

const pages = {
  HomePage: <Home />,
  ContactsPage: <Contacts />,
  AboutMePage: <AboutMe />,
};

const Button = () => {
  const [currentPage, setCurrentPage] =
    useState<keyof typeof pages>('HomePage');

  return (
    <div>
      {Object.keys(pages).map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page as keyof typeof pages)}
        >
          {page}
        </button>
      ))}
      {pages[currentPage]}
    </div>
  );
};

export default Button;
