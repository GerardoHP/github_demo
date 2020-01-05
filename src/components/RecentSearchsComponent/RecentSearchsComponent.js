import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../common/HeaderComponent';
import { NavLink } from 'react-router-dom';

const RecentSearchs = ({ users }) => {
  return (
    <>
      <Header
        title="Recent searchs"
        description="Stores the recent searchs using Redux."
      />
      <div className="row px-md-5 py-sm-3 row-cols-1 row-cols-md-6">
        {users.map(u => (
          <div key={u.username} className="col mb-2">
            <div className="card">
              <h5 className="card-header">{u.username}</h5>
              <h5 className="card-title">
                <NavLink to={`/search/${u.username}`}>{u.username}</NavLink>
              </h5>
              <div className="card-body">
                <p className="card-text">{`Repos: ${u.repos.length}`}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

RecentSearchs.propTypes = {
  users: PropTypes.array
};

const mapStateToProps = ({ users }) => ({ users });

export default connect(mapStateToProps)(RecentSearchs);
