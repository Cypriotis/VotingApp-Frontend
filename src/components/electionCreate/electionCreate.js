import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const ElectionsList = () => {
  const [title, settitle] = useState('');
  const [description, setdescription] = useState('');
  const [startdate, setstartdate] = useState('');
  const [enddate, setenddate] = useState('');
  const [email, setEmail] = useState('');

  const handleCreateAccount = () => {
    console.log('Form submitted!');
  };

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
            <input
              type="text"
              className="form-control item"
              id="startdate"
              placeholder="Start Date"
              value={startdate}
              onChange={(e) => setstartdate(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control item"
              id="enddate"
              placeholder="End Date"
              value={enddate}
              onChange={(e) => setenddate(e.target.value)}
            />
          </div>
          <div className="form-group">
            <button
              type="button"
              className="btn btn-block create-account"
              onClick={handleCreateAccount}
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
