/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-wrap-multilines */

import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { BsWhatsapp } from 'react-icons/bs';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Footer.scss';

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5ffrk7i', 'template_srfp28g', form.current, 'ebSiQgV_A4nv5pegs');

    e.target.reset();
  };

  return (
    <>
      <h2 className="head-text">Take a Cup of Coffee & Chat with Me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:mussocollins@gmail.com" className="p-text" target="_blank" rel="noreferrer">mussocollins@gmail.com</a>
        </div>

        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <BsWhatsapp className="whatsapp-icon" />
          <a href="https://api.whatsapp.com/send?phone+254717684174" className="p-text" target="_blank" rel="noreferrer">+254717684174</a>
        </div>
      </div>

      <form className="app__footer-form app__flex" ref={form} onSubmit={sendEmail}>
        <div className="app__flex">
          <input
            className="p-text"
            type="text"
            placeholder="Your Name"
            name="name"
            required
          />
        </div>

        <div className="app__flex">
          <input
            className="p-text"
            type="email"
            placeholder="Your Email"
            name="email"
            required
          />
        </div>

        <div>
          <textarea
            className="p-text"
            placeholder="Your Message"
            name="message"
            required
          />
        </div>

        <button
          className="p-text"
          type="submit"
        >
          Send Message
        </button>
      </form>
      <div className="copyright">
        <p className="p-text">@2022 Collins Musoko</p>
        <p className="p-text">All rights reserved</p>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contacts',
  'app__whitebg',
);
