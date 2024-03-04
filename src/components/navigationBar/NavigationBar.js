// NavigationBar.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthService from '../../authService';
import './navigationBarStyles.css';

const NavigationBar = () => {
  const [selectedOption, setSelectedOption] = useState('/');
  const navigate = useNavigate();
  const isLoggedIn = AuthService.isAuthenticated();

  const handleDropdownChange = (event) => {
    const selectedRoute = event.target.value;
    setSelectedOption(selectedRoute);
    navigate(selectedRoute);
  };

  return (
    <div className="navigation-bar-container">
      <div className="navbar-form">
        {/* Logo */}
        <div className="logo-container">
          <img src="/logoname.png" alt="Logo" className="logo" />
        </div>
        <div className="nav-dropdown-container">
          {isLoggedIn && (
            <Link to="/Home" className="home-link" activeClassName="active-link">Home</Link>
          )}
          {isLoggedIn && (
            <Link to="/OurTeam" className="home-link" activeClassName="active-link">OurTeam</Link>
          )}
          {/* Dropdown with the selected option */}
          <select
            className="nav-dropdown"
            value={selectedOption}
            onChange={handleDropdownChange}
          >
            <option value="/">Your Options</option>
            <option value="/myelections">Your Elections</option>
            <option value="/electionslist">Elections</option>
            <option value="/create">Create Election</option>
            <option value="/electionApplications">Check Your Election Applications</option>
            <option value="/electionreg">Register for Election</option>
            <option value="/results">Results</option>
            {isLoggedIn ? (
              <>
                {/* Exclude "Logout" from the dropdown */}
              </>
            ) : (
              <>
                <option value="/login">Login</option>
                <option value="/register">Register</option>
              </>
            )}
          </select>
          {/* Render "Logout" outside the dropdown for logged-in users */}
          {isLoggedIn && (
            <Link to="/logout" className="logout-link" activeClassName="active-link">Logout</Link>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
