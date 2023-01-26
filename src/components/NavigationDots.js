import React from 'react';
import PropTypes from 'prop-types';

const NavigationDots = ({ active }) => (
  <div className="app__navigation">
    {['home', 'about', 'work', 'skills', 'testimonials', 'contacts'].map((item) => (
      <a
        href={`#${item}`}
        key={item}
        className="app__navigation-dot"
        style={active === item ? { backgroundColor: '#313BAC' } : {}}
      >
        {' '}
      </a>
    ))}
  </div>
);

NavigationDots.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default NavigationDots;
