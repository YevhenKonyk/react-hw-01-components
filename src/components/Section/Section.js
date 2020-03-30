import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ className, title, children }) => (
  <section className={className}>
    <h2>{title}</h2>
    {children}
  </section>
);

Section.defaultProps = {
  className: 'section',
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Section;
