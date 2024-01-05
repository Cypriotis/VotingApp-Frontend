// resultsChild.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import apiService from '../../apiService.js';
import ElectionResults from './ElectionResults';
import { wait } from '@testing-library/user-event/dist/utils/index.js';

const Electionsshow = ({ electionid, title, description, startdate, enddate, appliedElections, setAppliedElections, acceptedElections, setSelectedElectionID }) => {
  const [isButtonExpanded, setIsButtonExpanded] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const navigate = useNavigate();

  

  const handleButtonClick2 = async () => {
    try {
      const userID = localStorage.getItem('ID');
      setIsButtonClicked(true);
      setSelectedElectionID(electionid);
      console.log("Debug",electionid);
      navigate(`/results/${electionid}`, { state: { electionId: electionid } });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="electionlist-form-container">
      <div className="electionlist-form">
        <div className="icon-container">
          <div className="icon-circle"></div>
          <div className="form-icon">
            <span>
              <i className="icon icon-user"></i>
            </span>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <div className="form-control item" id="title">
            {title}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <div className="form-control item" id="description">
            {description}
          </div>
        </div>
        <div className="form-group">
          <button
            type="button"
            onClick={handleButtonClick2}
            className="btn btn-block create-account"
          >
            Results
          </button>
        </div>
      </div>
      {isButtonClicked && <ElectionResults electionid={electionid} />}
    </div>
  );
};

export default Electionsshow;
