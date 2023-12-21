import React from 'react';
import './styles.css';

const ElectionsList = ({
  electionid,
  title,
  description,
  startdate,
  enddate,
}) => {
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
            onClick={() => console.log('Go vote')}
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
