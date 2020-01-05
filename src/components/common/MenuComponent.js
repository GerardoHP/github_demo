import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Icon } from '../../gjhp.svg';

const Menu = () => {
  const [collapsed, setCollapsed] = useState(true);
  const handleClick = () => setCollapsed(!collapsed);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/">
          <Icon fill="currentColor" width="50" height="50" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleClick}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`navbar-collapse ${collapsed ? 'collapse' : ''}`}
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <NavLink
              to="/"
              className="nav-item nav-link"
              activeClassName="active"
              exact
            >
              Home
            </NavLink>
            <NavLink
              to="/search"
              className="nav-item nav-link"
              activeClassName="active"
              exact
            >
              Search
            </NavLink>
            <NavLink
              to="/recent"
              className="nav-item nav-link"
              activeClassName="active"
              exact
            >
              Recent
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Menu;
