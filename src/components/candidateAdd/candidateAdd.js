import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const CandidateAdd = () => {
  const [setfullname, settitle] = useState('');
  const [description, setdescription] = useState('');

  const handleCreateAccount = () => {
    console.log('Form submitted!');
  };

  return (
    <div className="candidateadd-form-container">
      <div className="candidateadd-form">
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
              id="setfullname"
              placeholder="Full Name"
              value={setfullname}
              onChange={(e) => setfullname(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control item"
              id="description"
              placeholder="Description"
              value={description}
              onChange={(e) => setdescription(e.target.value)}
            />
          </div>
          <div className="form-group">
            <button
              type="button"
              className="btn btn-block create-account"
              onClick={handleCreateAccount}
            >
              Add Candidate
            </button>
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

export default CandidateAdd;
