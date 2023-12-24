// ParentComponent.js
import React, { useState, useEffect } from 'react';
import apiService from '../../apiService';
import ElectionsList from './electionList';
import './parentComponent.css'; // Import your new CSS file

const ParentComponent = () => {
  const [electionsData, setElectionsData] = useState([]);

  const fetchData = async () => {
    try {
      const userId = localStorage.getItem('ID');
      const token = localStorage.getItem('authToken');
      const data = await apiService.getelections(userId, token);
      setElectionsData(data);
      console.log("Test");
      console.log(setElectionsData)
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
          isLastInRow={(index + 1) % 3 === 0} // Add a prop to determine if it's the last in the row
        />
      ))}
    </div>
  );
};

export default ParentComponent;
