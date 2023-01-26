import React from 'react';
import { BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs';
import { FaMedium } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.linkedin.com/in/collins-musoko/" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a href="https://medium.com/@mussocollins" target="_blank" rel="noreferrer">
        <FaMedium />
      </a>
    </div>
    <div>
      <a href="https://twitter.com/CarshyCollins" target="_blank" rel="noreferrer">
        <BsTwitter />
      </a>
    </div>
    <div>
      <a href="https://github.com/Carshy" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
    </div>
  </div>
);

export default SocialMedia;
