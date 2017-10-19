import React from 'react';
import { NavLink } from 'react-router-dom';

import './index.css';

const VisibilityFilters = () => {
  return (
    <ul className="VisibilityFilters">
      <NavLink
        to="/"
        exact
        className="VisibilityFilters-link"
        activeClassName="link-active">
        all
      </NavLink>
      <NavLink
        to="/active"
        className="VisibilityFilters-link"
        activeClassName="link-active">
        active
      </NavLink>
      <NavLink
        to="/completed"
        className="VisibilityFilters-link"
        activeClassName="link-active">
        completed
      </NavLink>
    </ul>
  );
};

export default VisibilityFilters;
