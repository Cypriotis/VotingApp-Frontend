import React, { useState, useEffect } from 'react';
import ElectionApplicationComponent from './showApplications'; // Import the new component
import apiService from '../../apiService';

const ElectionApplicationsParentComponent = () => {
  const [electionApplications, setElectionApplications] = useState([]);

  const fetchData = async () => {
    try {
      const userId = localStorage.getItem('ID');
      const token = localStorage.getItem('authToken');
      const data = await apiService.getElectionApplications(token);
      setElectionApplications(data.electionApplications);
      console.log('Election Applications Data:', data);
    } catch (error) {
      console.error('Error fetching election applications:', error);
    }
  };

  const handleAccept = async (applicationId) => {
    // Implement the logic for accepting an application
    console.log(`Accepting application with ID ${applicationId}`);
  };

  const handleDecline = async (applicationId) => {
    // Implement the logic for declining an application
    console.log(`Declining application with ID ${applicationId}`);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Your Election Applications</h1>
      {electionApplications.map((application) => (
        <ElectionApplicationComponent
          key={application.ApplicationID}
          applicationData={application}
          onAccept={handleAccept}
          onDecline={handleDecline}
        />
      ))}
    </div>
  );
};

export default ElectionApplicationsParentComponent;
