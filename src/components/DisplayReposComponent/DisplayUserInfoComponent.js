import React from 'react';
import PropTypes from 'prop-types';

const DisplayUserInfo = ({ login, avatar_url, html_url }) => {
  return (
    <>
      <img src={avatar_url} alt={login} />
      <h1>
        <a href={html_url} target="_blank" rel="noopener noreferrer">
          {login}
        </a>
      </h1>
    </>
  );
};

DisplayUserInfo.propTypes = {
  login: PropTypes.string.isRequired,
  avatar_url: PropTypes.string,
  html_url: PropTypes.string.isRequired
};

export default DisplayUserInfo;
