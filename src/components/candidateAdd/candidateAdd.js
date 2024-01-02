// CandidateAdd.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './style.css';
import apiService from '../../apiService';

const CandidateAdd = () => {
  const { electionid } = useParams(); // Extract electionid from route parameters
  const [fullname, setFullname] = useState('');
  const [description, setDescription] = useState('');

  const handleAddCandidate = async () => {
    try {
      console.log('Form submitted!');
      const token = localStorage.getItem('authToken');

      
      // Create a candidate object with the provided data
      const candidateData = {
        candidateName: fullname,
        candidateDetails: description,
      };

      // Call your API service here using electionid, token, and candidateData
      await apiService.addcandidate(electionid, token, candidateData);
    } catch (error) {
      console.error('Failed to add candidate:', error);
    }
  };

  useEffect(() => {
    // You can perform additional actions on component mount if needed
    // For example, fetch additional data based on the electionid
    // You can make an API call here if necessary
  }, [electionid]);

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
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control item"
              id="description"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="form-group">
            <button
              type="button"
              className="btn btn-block create-account"
              onClick={handleAddCandidate}
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
