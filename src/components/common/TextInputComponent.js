import React from 'react';
import PropTypes from 'prop-types';

const TextInputComponent = ({ name, label, value, onChange, error }) => {
  return (
    <div className="form-group col-md-6">
      <label for={name}>{label}</label>
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

TextInputComponent.propTypes = {};

export default TextInputComponent;
