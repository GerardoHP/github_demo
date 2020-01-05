import React from 'react';
import PropTypes from 'prop-types';

const TextInputComponent = ({ name, label, value, onChange, error }) => {
  return (
    <div className="form-group col-md-6">
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        className={`form-control${error ? ' is-invalid' : ''}`}
        id={name}
        name={name}
        onChange={onChange}
        value={value}
      />
      <div className="invalid-feedback">{error}</div>
    </div>
  );
};

TextInputComponent.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired
};

export default TextInputComponent;
