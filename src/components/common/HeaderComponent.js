import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title, description }) => {
  return (
    <div className="jumbotron">
      <h1 className="display-4">{title}</h1>
      <hr className="my-4" />
      <p className="lead">{description}</p>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Header;
