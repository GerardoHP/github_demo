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
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async event => {
    event.preventDefault();
    let tempRepos = [];
    let tempUser = {};
    try {
      setIsLoading(true);
      tempRepos = await getUserRepos(username);
      if (tempRepos.length > 0) {
        [{ owner: tempUser }] = tempRepos;
      }
      setError('');
    } catch (err) {
      setError(err.message);
    }

    setIsLoading(false);
    setUser(tempUser);
    setRepos(tempRepos);
  };

  const handleChange = ({ target: { value } }) => {
    if (!value) {
      setError('');
    }

    setUsername(value);
  }; // TODO: add validations here

  return (
    <>
      <div className="py-md-5 py-sm-3" >
        <UserForm
          onSubmit={handleSubmit}
          username={username}
          onChange={handleChange}
          error={error}
          isLoading={isLoading}
        />
      </div>
      <div>
        {repos.length > 0 && (
          <div className="row">
            <div className="col-md-2 col-xs-12 py-xs-3">
              <DisplayUserInfo {...user} />
            </div>
            <div className="col-md-9 col-xs-12 py-xs-3">
              <RepoList repos={repos} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DisplayRepos;
