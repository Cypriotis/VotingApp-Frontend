import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import authService from '../../authService.js';

// import { useNavigate } from 'react-router-dom';


const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleCreateAccount = async () => {
    try {
      console.log(username, password, email);
      const userData = await authService.register(username, password, email);
  
      // Perform actions after successful login
      console.log('User data:', userData);
  
      // Redirect the user to the desired URL (e.g., /something)
      window.location.href = '/login';
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
            <input
              type="text"
              className="form-control item"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <button
              type="button"
              className="btn btn-block create-account"
              onClick={handleCreateAccount}
            >
              Create Account
            </button>
          </div>
          <div className="login-link">
            <p>
              Already have an account? <Link to="/login">Login</Link>
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
