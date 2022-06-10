import { FormEvent, useCallback, useState } from 'react';

import { sendEmail } from './utils';

import { ArrowSendIcon } from 'assets/svgs';

import styles from './contact.module.scss';

const Contact = () => {
  const [resultText, setResultText] = useState('');

  const onSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setResultText(await sendEmail(e.currentTarget));
  }, []);

  return (
    <section className={styles.contact}>
      {resultText && <div className={styles.result}>{resultText}</div>}
      <div>
        <form onSubmit={onSubmit} className={styles.form}>
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
