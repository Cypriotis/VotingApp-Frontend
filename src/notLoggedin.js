// NotLoggedIn.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const NotLoggedIn = () => (
  <div>
    <h2>You are not logged in</h2>
    <p>Please log in to access this page.</p>
    <NavLink to="/login">Go to Login</NavLink>
  </div>
);

export default NotLoggedIn;
