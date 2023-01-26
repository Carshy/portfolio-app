import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// import { images } from '../../constants';
import { urlFor, client } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';
// import AppWrap from '../../wrapper/AppWrap';
import './About.scss';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query)
      .then((data) => {
        setAbouts(data);
      });
  }, []);

  return (
    <div>
      <h2 className="head-text">
        About
        {' '}
        <span>
          Me
        </span>
      </h2>

      <div className="app__abouts">
        <div className="app__abouts-desc">
          <p>
            Hello! My name is
            {' '}
            <span className="name-colo">
              <b>Collins Musoko</b>
            </span>
            {' '}
            and I&apos;m a
            creative developer who loves to work on appealing web applications with a
            passion for User Interfaces and Experience. I love spending my time
            coding, creating things for the web and learning new things.
          </p>

          <p>
            I&apos;m relatively new to the software development world and since May
            2022 I&apos;ve been building my technical, leadership, and collaborative
            skills at
            {' '}
            <span>
              <a href="https://www.microverse.org/?grsf=wtedvt" target="_blank" rel="noreferrer">
                Microverse
              </a>
            </span>
            {' '}
            through collaborating and pair programming with other students from
            all over the world.
          </p>

          <p>
            My main aim is to create and deliver unique, high-end and innovative
            products for a variety of clients. If you are in need of an
            experienced Software Engineer, I am
            {' '}
            <span>
              <a href="mailto:mussocollins@gmail.com?subject=Hire%20Musoko%20Collins!">
                available for hire.
              </a>
            </span>
          </p>

          <span className="extra-info">
            HAVE A COOL WEBSITE OR APPLICATION IN MIND? I&apos;D LOVE TO
            {' '}
            <a href="#contacts"><span><b>HEAR ABOUT IT</b></span></a>
          </span>
        </div>

        <div className="app__profiles">
          {abouts.map((about) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.7, type: 'tween' }}
              className="app__profile-item"
              key={about.title}
            >
              <img src={urlFor(about.imgUrl)} alt={about.title} />
              <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
              <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);
