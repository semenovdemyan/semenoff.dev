import React, { useState } from 'react';
import styles from './ContactForm.module.css';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Предотвращаем перезагрузку страницы
    // Здесь можно добавить логику для обработки отправки формы
    console.log('Отправлено:', { name, email, message });

    // Очистка полей после отправки (по желанию)
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className={styles.formContainer}>
      <h2>Got some questions?</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Your email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
