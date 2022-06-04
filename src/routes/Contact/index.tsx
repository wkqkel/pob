import { FormEvent, useState } from 'react';
import emailjs from '@emailjs/browser';

import { ArrowSendIcon } from 'assets/svgs';

import styles from './contact.module.scss';

const Contact = () => {
  const [resultText, setResultText] = useState('');

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${process.env.REACT_APP_EMAILJS_SERVICE_KEY}`,
        `${process.env.REACT_APP_EMAILJS_TEMPLATE_KEY}`,
        e.currentTarget,
        `${process.env.REACT_APP_EMAILJS_PUBLIC_KEY}`
      )
      .then(
        (result) => {
          if (result.text === 'OK') {
            setResultText('Thanks, I will contact you soon.');
          }
        },
        (error) => {
          if (error) {
            setResultText('Sorry, You failed to send.');
          }
        }
      );
  };

  return (
    <section className={styles.contact}>
      {resultText && <div className={styles.result}>{resultText}</div>}
      <div>
        <form onSubmit={sendEmail} className={styles.form}>
          <label htmlFor='user_name'>Your Name</label>
          <input type='text' name='user_name' autoComplete='off' required />
          <label htmlFor='user_email'>Your Email Address</label>
          <input type='email' name='user_email' autoComplete='off' required />
          <textarea name='message' />
          <button type='submit' className={styles.submitButton}>
            <span>send</span>
            <ArrowSendIcon />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
