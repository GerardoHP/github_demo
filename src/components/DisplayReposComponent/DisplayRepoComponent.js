import React from 'react';
import PropTypes from 'prop-types';

const DisplayRepo = ({
  id,
  name,
  full_name,
  description,
  html_url,
  stargazers_count
}) => {
  return (
    <div>
      <h3>Name: {name}</h3>
      <h3>Full Name: {full_name}</h3>
      <h3>Description: {description}</h3>
      <h3>Stars: {stargazers_count}</h3>
    </div>
  );
};

DisplayRepo.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  full_name: PropTypes.string.isRequired,
  description: PropTypes.string,
  html_url: PropTypes.string.isRequired,
  stargazers_count: PropTypes.number.isRequired
};

export default DisplayRepo;
