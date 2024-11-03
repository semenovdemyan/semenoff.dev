import React, { useState } from 'react';
import styles from './ContactForm.module.css';
import { Button } from '../Button/Button';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [popup, setPopup] = useState<{ visible: boolean; message: string }>({
    visible: false,
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Логика отправки формы (например, API)
    const isSuccess = true; // Здесь можно заменить на реальную логику

    if (isSuccess) {
      setPopup({ visible: true, message: 'Форма успешно отправлена!' });
    } else {
      setPopup({ visible: true, message: 'Ошибка при отправке формы.' });
    }

    // Очистка полей
    setName('');
    setEmail('');
    setMessage('');
  };

  const closePopup = () => {
    setPopup({ ...popup, visible: false });
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formHeader}>Got some questions?</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Your name</label>
          <input
            placeholder="text your name"
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
            placeholder="example@gmail.com"
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
          />
        </div>
        {popup.visible && (
          <div className={styles.popup}>
            <p>{popup.message}</p>
            <button onClick={closePopup}>✘</button>
          </div>
        )}
        <div className={styles.submitBtn}>
          <Button label="Submit" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
