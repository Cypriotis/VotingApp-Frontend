import React, { useState, useEffect } from 'react';
import ElectionApplicationComponent from './showApplications';
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
    const tokenValue = localStorage.getItem('authToken');

    try {
      await apiService.acceptApplication(applicationId, tokenValue);
      // After successful acceptance, refetch the data
      fetchData();
    } catch (error) {
      console.error('Failed to accept application:', error);
    }
  };

  const handleDecline = async (applicationId) => {
    const tokenValue = localStorage.getItem('authToken');

    try {
      await apiService.rejectApplication(applicationId, tokenValue);
      // After successful rejection, refetch the data
      fetchData();
    } catch (error) {
      console.error('Failed to decline application:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Your Election Applications</h1>
      {electionApplications.length === 0 ? (
        <p>
          Applications from people who want to add candidates to elections that you are the host will be displayed here when they occur.
        </p>
      ) : (
        electionApplications.map((application) => (
          <ElectionApplicationComponent
            key={application.ApplicationID}
            applicationData={application}
            onAccept={handleAccept}
            onDecline={handleDecline}
          />
        ))
      )}
    </div>
  );
};

export default ElectionApplicationsParentComponent;
