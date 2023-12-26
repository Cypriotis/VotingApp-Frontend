// ElectionsList.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import apiService from '../../apiService.js';

const ElectionsList = ({ electionid, title, description, startdate, enddate, appliedElections, setAppliedElections, acceptedElections }) => {
  const [isButtonExpanded, setIsButtonExpanded] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = async (electionid) => {
    try {
      console.log(`Apply for promotion on election with ID: ${electionid}`);
      setIsButtonClicked(!isButtonClicked);
      setIsButtonExpanded(!isButtonExpanded);
      console.log(electionid);
      const userId = localStorage.getItem('ID');
      console.log(userId);

      // Make an API call using the ElectionID
      const response = await apiService.electionapply(electionid);

      // Handle the API response as needed
      console.log(response);

      // Update the applied elections state
      setAppliedElections([...appliedElections, electionid]);

      // Example: Navigate to /candform with the ElectionID as a query parameter
      // navigate(`/candform?electionId=${electionId}`);
    } catch (error) {
      console.log(error);
    }
  };

  // Check if the user has applied for the current election
  const hasApplied = appliedElections.includes(electionid);

  // Check if the election is accepted
  const isAccepted = acceptedElections.includes(electionid);

  return (
    <div className="electionlist-form-container">
      <div className="electionlist-form">
        {hasApplied ? (
          <div className="applied-button">Applied</div>
        ) : (
          <>
            <button
              type="button"
              className={`expand-button ${isButtonExpanded ? 'expanded' : ''} ${isButtonClicked ? 'clicked' : ''}`}
              onClick={() => handleButtonClick(electionid)}
              onMouseEnter={() => setIsButtonExpanded(true)}
              onMouseLeave={() => setIsButtonExpanded(false)}
            >
              {isButtonExpanded ? 'Apply for Promotion' : 'AFP'}
            </button>
            {/* Add Candidate button */}
            {hasApplied && isAccepted && (
              <div className="form-group">
                <button
                  type="button"
                  className="btn btn-block create-account add-candidate"  // Added "add-candidate" class
                  onClick={() => navigate(`/test?electionId=${electionid}`)}
                >
                  Add Candidate
                </button>
              </div>
            )}
          </>
        )}
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
          <label htmlFor="startdate">Start Date:</label>
          <div className="form-control item" id="startdate">
            {startdate}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="enddate">End Date:</label>
          <div className="form-control item" id="enddate">
            {enddate}
          </div>
        </div>
        <div className="form-group">
          <button
            type="button"
            className="btn btn-block create-account"
            onClick={() => navigate(`/candform?electionId=${electionid}`)}
          >
            Go Vote
          </button>
        </div>
        {/* "Add Candidate" button with spacing */}
        {hasApplied && isAccepted && (
          <div className="form-group add-candidate-spacing">
            <button
              type="button"
              className="btn btn-block create-account add-candidate"  // Added "add-candidate" class
              onClick={() => navigate(`/test?electionId=${electionid}`)}
            >
              Add Candidate
            </button>
          </div>
        )}
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

export default ElectionsList;
