import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as StarIcon } from 'bootstrap-icons/icons/star-fill.svg';

const RatingStarComponent = ({ stargazers_count, stargazers_url }) => {
  return (
    <div className="star_rating">
      <a
        className="btn btn-primary"
        href={stargazers_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Stars <StarIcon alt="star" />
        <span className="badge badge-pill badge-light">{stargazers_count}</span>
      </a>
    </div>
  );
};

RatingStarComponent.propTypes = {
  stargazers_count: PropTypes.number.isRequired,
  stargazers_url: PropTypes.string.isRequired
};

export default RatingStarComponent;
