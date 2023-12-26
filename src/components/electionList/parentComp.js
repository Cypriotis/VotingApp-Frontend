// ParentComponent.js

import React, { useState, useEffect } from 'react';
import apiService from '../../apiService';
import ElectionsList from './electionList';
import './parentComponent.css';

const ParentComponent = () => {
  const [electionsData, setElectionsData] = useState([]);
  const [appliedElections, setAppliedElections] = useState([]);
  const [acceptedElections, setAcceptedElections] = useState([]);

  const fetchData = async () => {
    try {
      const userId = localStorage.getItem('ID');
      const token = localStorage.getItem('authToken');

      // Fetch all elections
      const data = await apiService.getelections(userId, token);
      setElectionsData(data);

      // Fetch the user's applied elections
      const appliedData = await apiService.getelectionsapplied(token);
      setAppliedElections(appliedData.appliedElections);

      // Fetch the user's accepted elections
      const acceptedData = await apiService.acceptedelections(token);
      setAcceptedElections(acceptedData.acceptedElections);

      console.log('Elections Data:', data);
      console.log('Applied Elections:', appliedData.appliedElections);
      console.log('Accepted Elections:', acceptedData.acceptedElections);
    } catch (error) {
      console.error('Error fetching elections:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="elections-container">
      {electionsData.map((election, index) => (
        <ElectionsList
          key={election.ElectionID}
          electionid={election.ElectionID}
          title={election.Title}
          description={election.Description}
          startdate={election.StartDate}
          enddate={election.EndDate}
          isLastInRow={(index + 1) % 3 === 0}
          appliedElections={appliedElections} // Pass the applied elections array
          setAppliedElections={setAppliedElections} // Pass the function to update applied elections
          acceptedElections={acceptedElections} // Pass the accepted elections array
        />
      ))}
    </div>
  );
};

export default ParentComponent;
