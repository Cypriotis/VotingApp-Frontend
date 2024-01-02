// ElectionApplicationComponent.js

import React from 'react';
import './style.css'; // You can create a CSS file for styling

const ElectionApplicationComponent = ({ applicationData, onAccept, onDecline }) => {
  return (
    <div className="election-application-container">
      <h2>{applicationData.ElectionTitle}</h2>
      <p>
        <strong>Applicant Username:</strong> {applicationData.ApplicantUsername}
      </p>
      <p>
        <strong>Status:</strong> {applicationData.Status}
      </p>
      <div className="action-buttons">
        <button onClick={() => onAccept(applicationData.ApplicationID)}>Accept</button>
        <button onClick={() => onDecline(applicationData.ApplicationID)}>Decline</button>
      </div>
    </div>
  );
};

export default ElectionApplicationComponent;
