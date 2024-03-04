import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import authService from '../../authService.js';

const RegistrationForm = () => {
  const [identifier, setiDentifier] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      console.log(identifier, password);
      const userData = await authService.login(identifier, password);
  
      // Perform actions after successful login
      //console.log('User data:', userData);
      const authToken = localStorage.getItem('authToken');
      //console.log(authToken)
      const userid = localStorage.getItem('ID');
      //console.log(userid)
      // Redirect the user to the desired URL (e.g., /something)
      window.location.href = '/home';
    } catch (error) {
      // Handle login error, display an error message, etc.
      console.error('Login error:', error.message);
    }
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
              id="identifier"
              placeholder="Username"
              value={identifier}
              onChange={(e) => setiDentifier(e.target.value)}
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
              onClick={handleLogin} // Call the handleLogin function on Login button click  
            >
              Login
            </button>
          </div>
          <div className="login-link">
            <p>
              Don't have an account? <Link to="/register">Register</Link>
            </p>
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
