import { FormEvent } from 'react';
import emailjs from '@emailjs/browser';

import styles from './contact.module.scss';
import { ArrowIcon } from 'assets/svgs';

const Contact = () => {
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
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className={styles.contact}>
      <form onSubmit={sendEmail} className={styles.form}>
        <label htmlFor='user_name'>Your Name</label>
        <input type='text' name='user_name' autoComplete='off' required />
        <label htmlFor='user_email'>Your Email Address</label>
        <input type='email' name='user_email' autoComplete='off' required />
        <textarea name='message' />
        <button type='submit' className={styles.submitButton}>
          <span>send</span>
          <ArrowIcon />
        </button>
      </form>
    </section>
  );
};

export default Contact;
