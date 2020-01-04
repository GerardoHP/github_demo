import React, { useState } from 'react';
import UserForm from './UserFormComponent';
import RepoList from './ReposListComponent';
import { getUserRepos } from '../../api/services/GithubService';

const DisplayRepos = () => {
  const [username, setUsername] = useState('');
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();
    let reposTemp = [];
    try {
      reposTemp = await getUserRepos(username);
    } catch (err) {
      setError(err.message);
    }

    setRepos(reposTemp);
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
