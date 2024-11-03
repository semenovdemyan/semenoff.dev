import React from 'react';
import './Contacts.module.css';
import ContactForm from '../../Components/ContactForm/ContactForm';

export const Contacts: React.FC<{ lang: 'ru' | 'en' }> = ({ lang }) => {
  return (
    <div>
      {lang === 'ru' ? <h1>Мои контакты</h1> : <h1>My contacts</h1>}
      <ul>
        <li>
          <a href="mailto:semenovdemyan@gmail.com">semenovdemyan@gmail.com</a>
        </li>
        <li>
          <a href="tel:+79996683935">+7 (999) 668-39-35</a>
        </li>
        <li>
          <a
            href="https://t.me/demian_semenoff"
            target="_blank"
            rel="noopener noreferrer"
          >
            Telegram
          </a>
        </li>
      </ul>
      <ContactForm />
    </div>
  );
};
