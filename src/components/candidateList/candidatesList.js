// CandidatesList.js

import React from 'react';
import './style.css';

const CandidatesList = ({ candidateId, name, party }) => {
  return (
    <div className="candidate-list-container">
      <div className="candidate-list">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <div className="form-control item" id="name">
            {name}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="party">Party:</label>
          <div className="form-control item" id="party">
            {party}
          </div>
        </div>
        {/* Add other candidate properties as needed */}
      </div>
    </div>
  );
};

export default CandidatesList;
