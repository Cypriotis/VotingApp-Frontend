import React, { useState } from 'react';
import './style.css';
import apiService from '../../apiService.js';
import { useNavigate } from 'react-router-dom';


const ElectionsList = () => {
  const [title, settitle] = useState('');
  const [description, setdescription] = useState('');
  const [startdatetime, setstartdatetime] = useState('');
  const [enddatetime, setenddatetime] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();  // Change the hook name to useNavigate



  const handleCreateElection = async () => {
    try {
      const userid = localStorage.getItem('ID');
      const token = localStorage.getItem('authToken');
      

      // Ensure the datetime format is compatible with your backend's expectations
      const formattedStartDatetime = new Date(startdatetime).toISOString();
      const formattedEndDatetime = new Date(enddatetime).toISOString();

      const userData = await apiService.electioncreate(
        title,
        description,
        formattedStartDatetime,
        formattedEndDatetime,
        userid,
        token
      );
      navigate('/electionslist');      // Perform actions after successful login, such as redirecting the user or updating state
     // console.log('User data:', userData);
    } catch (error) {
      // Handle login error, display an error message, etc.
      console.error('Login error:', error);
    }
  }

  return (
    <div className="createelection-form-container">
      <div className="createelection-form">
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
              id="title"
              placeholder="Title"
              value={title}
              onChange={(e) => settitle(e.target.value)}
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
            <label htmlFor="startdatetime">Start Date and Time:</label>
            <input
              type="datetime-local"
              className="form-control item"
              id="startdatetime"
              value={startdatetime}
              onChange={(e) => setstartdatetime(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="enddatetime">End Date and Time:</label>
            <input
              type="datetime-local"
              className="form-control item"
              id="enddatetime"
              value={enddatetime}
              onChange={(e) => setenddatetime(e.target.value)}
            />
          </div>
          <div className="form-group">
            <button
              type="button"
              className="btn btn-block create-account"
              onClick={handleCreateElection}
            >
              Create Election
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

export default ElectionsList;
