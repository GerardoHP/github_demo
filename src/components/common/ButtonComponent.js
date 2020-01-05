import React from 'react';
import { ReactComponent as SearchIcon } from 'bootstrap-icons/icons/search.svg';
import PropTypes from 'prop-types';

const ButtonComponent = ({ isLoading, disabled }) => {
  return (
    <button
      class="btn btn-primary"
      type="button"
      disabled={isLoading || disabled}
    >
      {isLoading ? <LoadingSpan /> : <SearchContent />}
    </button>
  );
};

ButtonComponent.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  disabled: PropTypes.bool
};

const LoadingSpan = () => (
  <>
    <span
      class="spinner-border spinner-border-sm"
      role="status"
      aria-hidden="true"
    ></span>
    &nbsp;Loading...
  </>
);

const SearchContent = () => (
  <span>
    <SearchIcon alt="search" /> Search
  </span>
);

export default ButtonComponent;
