import React from 'react';
import PropTypes from 'prop-types';

const DisplayUserInfo = ({ login, avatar_url, html_url }) => {
  return (
    <>
      <h3>User</h3>
      <div className="card">
        <img src={avatar_url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{login}</h5>
          <a
            href={html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Github
          </a>
        </div>
      </div>
    </>
  );
};

DisplayUserInfo.propTypes = {
  login: PropTypes.string.isRequired,
  avatar_url: PropTypes.string,
  html_url: PropTypes.string.isRequired
};

export default DisplayUserInfo;
