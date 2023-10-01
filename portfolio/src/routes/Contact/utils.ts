import emailjs from '@emailjs/browser';

const sendEmail = async (currentTarget: HTMLFormElement) => {
  let message = '';

  await emailjs
    .sendForm(
      `${process.env.REACT_APP_EMAILJS_SERVICE_KEY}`,
      `${process.env.REACT_APP_EMAILJS_TEMPLATE_KEY}`,
      currentTarget,
      `${process.env.REACT_APP_EMAILJS_PUBLIC_KEY}`
    )
    .then(() => {
      message = 'Thanks, I will contact you soon.';
    })
    .catch(() => {
      message = 'Sorry, You failed to send.';
    });

  return message;
};

export { sendEmail };
