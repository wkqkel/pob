import { FormEvent } from 'react';
import emailjs from '@emailjs/browser';

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
    <form onSubmit={sendEmail}>
      <label htmlFor='user_name'>Name</label>
      <input type='text' name='user_name' />
      <label htmlFor='user_email'>Email</label>
      <input type='email' name='user_email' />
      <label htmlFor='message'>Message</label>
      <textarea name='message' />
      <input type='submit' value='Send' />
    </form>
  );
};

export default Contact;
