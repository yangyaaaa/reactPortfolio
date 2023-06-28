import { useEffect, useState } from 'react';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import AnimatedLetters from '../AnimatedLetters';
import '../../App.css';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_tu5ge8d', 'template_hjyqqsm', form.current, 'JHTMT7f93LqG7E9Yh')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
      <div className='container contact-page ' id='contact-me'>
        <div>
          <h1 className='h1'>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in job opportunities - especially on ambitious
            or large projects.<br></br> However, if you have any other requests or
            questions, don't hesitate to contact me using the form below.
          </p>
          <div className='contact-form'>
            <form ref={form} onSubmit={sendEmail}>
             <ul>
              <li>
            <label>Name</label>
            <input type="text" name="user_name" />
            </li>
            <li>
            <label>Email</label>
            <input type="email" name="user_email" />
            </li>
            <li>
            <label>Message</label>
            <textarea name="message" />
            </li>
            <li>
            <input type="submit" className= "flat-button" value="Send" />
            </li>
            </ul>
            </form>
            </div>
            </div>
  </div>
  );
};

export default Contact;
