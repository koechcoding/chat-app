import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = (props) => {
  return (
    <NavLink to="/signin" className="navbar-item">
      Sign In
  </NavLink>
  );
}

export default SignedOutLinks;