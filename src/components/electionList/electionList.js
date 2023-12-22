import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const ElectionsList = ({
  electionid,
  title,
  description,
  startdate,
  enddate,
}) => {
  const [isButtonExpanded, setIsButtonExpanded] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const navigate = useNavigate();
  const authToken = localStorage.getItem('authToken');
  const userid = localStorage.getItem('ID');

  const handleButtonClick = () => {
    console.log('Apply for promotion on this election');
    setIsButtonClicked(!isButtonClicked);
    setIsButtonExpanded(!isButtonExpanded);
    navigate('/candform'); // Navigate to /candform when the button is clicked
  };

  return (
    <div className="electionlist-form-container">
      <div className="electionlist-form">
        <div className="expand-button-container">
          <button
            type="button"
            className={`expand-button ${isButtonExpanded ? 'expanded' : ''} ${isButtonClicked ? 'clicked' : ''}`}
            onClick={handleButtonClick}
            onMouseEnter={() => setIsButtonExpanded(true)}
            onMouseLeave={() => setIsButtonExpanded(false)}
          >
            {isButtonExpanded ? 'Apply for Promotion' : 'AFP'}
          </button>
        </div>
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
            onClick={() => navigate('/candform')} // Redirect to /candform on Go vote button click
          >
            Go vote
          </button>
        </div>
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
