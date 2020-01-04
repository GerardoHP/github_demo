import React, { useState } from 'react';
import UserForm from './UserFormComponent';
import RepoList from './ReposListComponent';

const DisplayRepos = () => {
  const [username, setUsername] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSubmit = event => {
    event.preventDefault();
    setRepos([{ id: 1 }, { id: 2 }]);
  };

  const handeleChange = ({ target: { value } }) => setUsername(value); // TODO: add validations here

  return (
    <>
      <UserForm
        onSubmit={handleSubmit}
        username={username}
        onChange={handeleChange}
      />
      <RepoList repos={repos} />
    </>
  );
};

export default DisplayRepos;
