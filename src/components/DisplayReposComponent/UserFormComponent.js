import React from 'react';
import PropTypes from 'prop-types';
import TextInputComponent from '../common/TextInputComponent';

const UserForm = ({ onSubmit, username, onChange, error }) => {
  const textInputData = {
    name: 'username',
    label: 'User name',
    value: username,
    onChange,
    error
  };
  return (
    <form onSubmit={onSubmit} className="needs-validation" novalidate>
      <TextInputComponent {...textInputData} />
      <button type="submit" value="Submit">
        Submit
      </button>
    </form>
  );
};

UserForm.protoTypes = {
  onSubmit: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default UserForm;
