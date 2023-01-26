import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import AppWrap from '../../wrapper/AppWrap';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    x: [100, 0],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">
              <span>👋</span>
              Hello, I am
            </p>
            <h1>Collins Musoko.</h1>
            <h3>Full-Stack Developer.</h3>
            <p className="header-intro">
              I can help you build a product, feature, or a web application.
              Look through some of my work and experience! If you
              like what you see and need help on a project, I am available for hire.
            </p>

            <div className="see-works">
              <a href="#work">SEE MY PROJECTS</a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ scale: [0, 1], opacity: [0, 1] }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      className="app__header-img"
    >
      <img src={images.collins} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

    <motion.div
      variant={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.javascript, images.react, images.rails].map((circle) => (
        <div className="circle-cmp app__flex" key={`circle-${circle.id}`}>
          <img src={circle} alt="circles" />
        </div>
      ))}
    </motion.div>
  </div>
);

export default AppWrap(Header, 'home');
