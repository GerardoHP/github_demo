import React, { useState, useEffect } from 'react';
import UserForm from './UserFormComponent';
import RepoList from './ReposListComponent';
import { getUserRepos } from '../../api/services/GithubService';
import DisplayUserInfo from './DisplayUserInfoComponent';
import Header from '../common/HeaderComponent';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/userActions';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

const DisplayRepos = ({ addUser, user: userFromRedux }) => {
  const [username, setUsername] = useState('');
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState('');
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (userFromRedux) {
      const { repos, owner } = userFromRedux;
      setUser(owner);
      setRepos(repos);
    }
  }, []);

  const handleSubmit = async event => {
    event.preventDefault();
    let tempRepos = [];
    let tempUser = {};
    try {
      setIsLoading(true);
      tempRepos = await getUserRepos(username);
      if (tempRepos.length > 0) {
        [{ owner: tempUser }] = tempRepos;
        addUser({
          username: tempUser.login,
          repos: tempRepos,
          owner: tempUser
        });
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
  };

  return (
    <>
      <Header
        title="Search"
        description="Fill the desired username to get the public repos the user have."
      />
      <div className="py-md-5 py-sm-3">
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
            <div className="col-md-2 col-xs-12 py-sm-3">
              <DisplayUserInfo {...user} />
            </div>
            <div className="col-md-9 col-xs-12 py-sm-3">
              <RepoList repos={repos} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

DisplayRepos.propTypes = {
  addUser: PropTypes.func.isRequired,
  user: PropTypes.any
};

const mapStateToProps = (
  { users },
  {
    match: {
      params: { username }
    }
  }
) => {
  let user;
  if (username) {
    user = users.find(u => u.username === username);
    if (user) {
      return { user };
    } else {
      return {};
    }
  } else {
    return {};
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addUser: bindActionCreators(actions.AddUser, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayRepos);
