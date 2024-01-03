// ElectionDetails.js
import React, { useState, useEffect } from 'react';
import apiService from '../../apiService';
import './styles.css'; // Import the new CSS file

const ElectionDetails = () => {
  const [elections, setElections] = useState([]);

  useEffect(() => {
    // Fetch elections data when the component mounts
    const fetchData = async () => {
      try {
        const userid = localStorage.getItem('ID');
        const token = localStorage.getItem('authToken');
        const userElections = await apiService.getElectionsData(userid, token);
        setElections(userElections);
      } catch (error) {
        console.error('Error fetching elections:', error.message);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return (
    <div className="election-details-container">
      {elections.map((election) => (
        <div key={election.ElectionName} className="election-details-item">
          <div className="card">
            <h2>{election.ElectionName}</h2>
            <div>{election.UniqueCode}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ElectionDetails;
