// NavigationBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../../authService';
import './navigationBarStyles.css';

const NavigationBar = () => {
  const isLoggedIn = AuthService.isAuthenticated();

  return (
    <div className="navigation-bar-container">
      <div className="navbar-form">
        <ul className="nav-list">
          <li><Link to="/myelections">Your Elections</Link></li>
          <li><Link to="/electionslist">Elections</Link></li>
          <li><Link to="/create">Create Election</Link></li>
          <li><Link to="/electionApplications">Check Your Election Applications</Link></li>
          <li><Link to="/electionreg">Register to election</Link></li>
          {isLoggedIn ? (
            <>
              <li><Link to="/logout">Logout</Link></li>
            </>
          ) : (
            <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default NavigationBar;