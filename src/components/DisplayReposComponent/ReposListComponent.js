import React from 'react';
import PropTypes from 'prop-types';
import DisplayRepo from './DisplayRepoComponent';

const RepoList = ({ repos }) => {
  return (
    <>
      <h1>Repos</h1>
      <ul>
        {repos.map(repo => (
          <DisplayRepo {...repo} key={repo.id} />
        ))}
      </ul>
    </>
  );
};

RepoList.protoType = {
  repos: PropTypes.array.isRequired
};

export default RepoList;
