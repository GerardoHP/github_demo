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

ButtonComponent.propTypes = {};

const LoadingSpan = () => (
  <>
    <span
      class="spinner-border spinner-border-sm"
      role="status"
      aria-hidden="true"
    ></span>
    Loading...
  </>
);

const SearchContent = () => (
  <span>
    <SearchIcon alt="search" /> Search
  </span>
);

export default ButtonComponent;
