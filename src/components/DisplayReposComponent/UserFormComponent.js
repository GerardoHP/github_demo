import React from 'react';
import PropTypes from 'prop-types';
import TextInputComponent from '../common/TextInputComponent';
import ButtonComponent from '../common/ButtonComponent';

const UserForm = ({ onSubmit, username, onChange, error, isLoading }) => {
  const textInputData = {
    name: 'username',
    label: 'User name',
    value: username,
    onChange,
    error
  };
  return (
    <form onSubmit={onSubmit} className="from-row needs-validation" noValidate>
      <div className="form-row">
        <TextInputComponent {...textInputData} />
      </div>
      <ButtonComponent disabled={!username} isLoading={isLoading} />
    </form>
  );
};

UserForm.protoTypes = {
  onSubmit: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired
};

export default UserForm;
