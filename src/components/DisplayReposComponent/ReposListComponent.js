import React from 'react';
import PropTypes from 'prop-types';
import DisplayRepo from './DisplayRepoComponent';

const RepoList = ({ repos }) => {
  return (
    <>
      <h3>Repos</h3>
      <div className="row row-cols-1 row-cols-md-6">
        {repos.map(repo => (
          <DisplayRepo {...repo} key={repo.id} />
        ))}
      </div>
    </>
  );
};

RepoList.protoType = {
  repos: PropTypes.array.isRequired
};

export default RepoList;
