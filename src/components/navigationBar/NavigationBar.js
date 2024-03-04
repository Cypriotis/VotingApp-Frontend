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
        <div className="nav-links-container">
          {isLoggedIn && (
            <Link to="/Home" className="nav-link" activeClassName="active-link">Home</Link>
          )}
          {isLoggedIn && (
            <Link to="/OurTeam" className="nav-link" activeClassName="active-link">Our Team</Link>
          )}
          {/* Dropdown with the selected option */}
          <div className="nav-dropdown-container">
            <div className="nav-dropdown" onMouseEnter={() => setSelectedOption('/')} onMouseLeave={() => setSelectedOption('/')}>
              <label className="for-dropdown">Navigate ⌄<i className="uil uil-arrow-down"></i></label>
              <div className="section-dropdown">
                <Link to="/myelections">Your Elections <i className="uil uil-arrow-right"></i></Link>
                <Link to="/electionslist">Elections <i className="uil uil-arrow-right"></i></Link>
                <Link to="/create">Create Election <i className="uil uil-arrow-right"></i></Link>
                <Link to="/electionApplications">Your Election Applications <i className="uil uil-arrow-right"></i></Link>
                <Link to="/electionreg">Register for Election <i className="uil uil-arrow-right"></i></Link>
                <Link to="/results">Results <i className="uil uil-arrow-right"></i></Link>
                {isLoggedIn ? null : (
                  <>
                    <Link to="/login">Login <i className="uil uil-arrow-right"></i></Link>
                    <Link to="/register">Register <i className="uil uil-arrow-right"></i></Link>
                  </>
                )}
              </div>
            </div>
          </div>
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
