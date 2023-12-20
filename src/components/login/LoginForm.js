import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleCreateAccount = () => {
    console.log('Form submitted!');
  };

  return (
    <div className="registration-form-container">
      <div className="registration-form">
        <form>
          <div className="icon-container">
            <div className="icon-circle"></div>
            <div className="form-icon">
              <span>
                <i className="icon icon-user"></i>
              </span>
            </div>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control item"
              id="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control item"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <button
              type="button"
              className="btn btn-block create-account"
              onClick={handleCreateAccount}
            >
              Login
            </button>
          </div>
          <div className="login-link">
          </div>
        </form>
        <div className="social-media">
          <h5>Follow us on social media</h5>
          <div className="social-icons">
            <a href="#">
              <i className="icon-social-facebook" title="Facebook"></i>
            </a>
            <a href="#">
              <i className="icon-social-google" title="Google"></i>
            </a>
            <a href="#">
              <i className="icon-social-twitter" title="Twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
