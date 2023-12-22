import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import authService from '../../authService.js';
import apiService from '../../apiService.js';

const ElectionsReg = () => {
  const [electionCode, setElectionCode] = useState('');

  const handleRegElection = async () => {
    try {
      const userid = localStorage.getItem('ID');
      const token = localStorage.getItem('authToken');

      const userData = await apiService.electionreg(userid, electionCode,token);

      // Perform actions after successful login, such as redirecting the user or updating state
      console.log('User data:', userData);
    } catch (error) {
      // Handle login error, display an error message, etc.
      console.error('Login error:', error.message);
    }
  };

  return (
    <div className="elections-form-container">
      <div className="elections-form">
        <form>
          <div className="icon-container">
            <div className="icon-circle"></div>
            <div className="form-icon">
              <img
                src={`${process.env.PUBLIC_URL}/manual-voting.png`}
                alt="Vote Icon"
                width="40"
                height="40"
              />
            </div>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control item"
              id="electionCode"
              placeholder="Election Code"
              value={electionCode}
              onChange={(e) => setElectionCode(e.target.value)}
            />
          </div>
          <div className="form-group">
            <button
              type="button"
              className="btn btn-block create-account"
              onClick={handleRegElection}
            >
              Register and Vote
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ElectionsReg;