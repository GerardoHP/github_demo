import React, { useState } from 'react';
import UserForm from './UserFormComponent';
import RepoList from './ReposListComponent';
import { getUserRepos } from '../../api/services/GithubService';
import DisplayUserInfo from './DisplayUserInfoComponent';

const DisplayRepos = () => {
  const [username, setUsername] = useState('');
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState('');
  const [user, setUser] = useState({});

  const handleSubmit = async event => {
    event.preventDefault();
    let tempRepos = [];
    let tempUser = {};
    try {
      tempRepos = await getUserRepos(username);
      if (tempRepos.length > 0) {
        [{ owner: tempUser }] = tempRepos;
      }
    } catch (err) {
      setError(err.message);
    }

    setUser(tempUser);
    setRepos(tempRepos);
  };

  const handeleChange = ({ target: { value } }) => setUsername(value); // TODO: add validations here

  return (
    <>
      <UserForm
        onSubmit={handleSubmit}
        username={username}
        onChange={handeleChange}
        error={error}
      />
      {repos.length > 0 && (
        <div className="row">
          <div className="col-md-2 col-xs-12">
            <DisplayUserInfo {...user} />
          </div>
          <div className="col-md-9 col-xs-12">
            <RepoList repos={repos} />
          </div>
        </div>
      )}
    </>
  );
};

export default DisplayRepos;
