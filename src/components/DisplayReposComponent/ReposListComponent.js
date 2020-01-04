import React from 'react';

const RepoList = ({ repos }) => {
  return (
    <ul>
      {repos.map(repo => (
        <li key={repo.id}>{repo.id}</li>
      ))}
    </ul>
  );
};

export default RepoList;
