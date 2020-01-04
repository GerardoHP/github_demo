import React from 'react';
import PropTypes from 'prop-types';
import RatingStarComponent from '../common/RatingStarComponent';

const DisplayRepo = ({
  id,
  name,
  full_name,
  description,
  html_url,
  stargazers_count,
  stargazers_url
}) => {
  return (
    <>
      <div className="col mb-4">
        <div className="card">
          <div className="card-header">{name}</div>
          <div className="card-body">
            <h5 className="card-title">{full_name}</h5>
            <p className="card-text">{description}</p>
          </div>
          <div className="card-body">
            <RatingStarComponent
              stargazers_count={stargazers_count}
              stargazers_url={stargazers_url}
            />
          </div>
        </div>
      </div>
    </>
  );
};

DisplayRepo.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  full_name: PropTypes.string.isRequired,
  description: PropTypes.string,
  html_url: PropTypes.string.isRequired,
  stargazers_count: PropTypes.number.isRequired,
  stargazers_url: PropTypes.string
};

export default DisplayRepo;
