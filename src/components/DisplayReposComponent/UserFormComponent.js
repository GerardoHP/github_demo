import React from 'react';
import PropTypes from 'prop-types';

const UserForm = ({ onSubmit, username, onChange }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="username"
        id="username"
        value={username}
        onChange={onChange}
      />
      <button type="submit" value="Submit">Submit</button>
    </form>
  );
};

UserForm.protoTypes = {
  onSubmit: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default UserForm;
