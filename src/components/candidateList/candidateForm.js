// CandidateForm.js

import React from 'react';
import './style.css';

const CandidateForm = ({ electionName, fullName, description, onVoteClick, hasVoted, highlightVoted }) => {
  const handleVote = async () => {
    try {
      if (!hasVoted && onVoteClick) {
        await onVoteClick();
        console.log('Voted successfully!');
        // You can update the UI or state based on the vote success
      }
    } catch (error) {
      console.error('Failed to vote for candidate:', error);
      // Handle error, show a message, etc.
    }
  };

  const formClassName = `candidateform-form-container ${highlightVoted ? 'voted' : ''}`;

  return (
    <div className={formClassName}>
      <div className="candidateform-form">
        <div className="icon-container">
          <div className="icon-circle"></div>
          <div className="form-icon">
            <span>
              <i className="icon icon-user"></i>
            </span>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="electionName">Election:</label>
          <div className="form-control item" id="electionName">
            {electionName}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="Fullname">Full Name:</label>
          <div className="form-control item" id="Fullname">
            {fullName}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <div className="form-control item" id="description">
            {description}
          </div>
        </div>
        <div className="form-group">
          {hasVoted ? (
            <div className="voted-message">You voted in this election</div>
          ) : (
            <button
              type="button"
              className="btn btn-block create-account"
              onClick={handleVote}
            >
              Vote for Candidate
            </button>
          )}
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

export default CandidateForm;
