// Parentresults.js

import React, { useState, useEffect } from 'react';
import apiService from '../../apiService';
import Electionsshow from './resultsChild';
import ElectionResults from './ElectionResults';
import NavigationBar from '../navigationBar/NavigationBar';

const Parentresults = () => {
  const [electionsData, setElectionsData] = useState([]);
  const [appliedElections, setAppliedElections] = useState([]);
  const [acceptedElections, setAcceptedElections] = useState([]);
  const [resultsData, setResultsData] = useState([]);
  const [selectedElectionID, setSelectedElectionID] = useState(null);

  const fetchData = async () => {
    try {
      const userId = localStorage.getItem('ID');
      const token = localStorage.getItem('authToken');

      // Fetch all elections
      const data = await apiService.getelections(userId, token);
      setElectionsData(data);
    } catch (error) {
      console.error('Error fetching elections:', error);
    }
  };

  const fetchResultsData = async (electionID) => {
    try {
      const userID = localStorage.getItem('ID');
      const response = await apiService.results(userID);
      const filteredResults = response.filter(candidate => candidate.ElectionID === electionID);
      setResultsData(filteredResults);
    } catch (error) {
      console.error('Error fetching results:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (selectedElectionID) {
      fetchResultsData(selectedElectionID);
    }
  }, [selectedElectionID]);

  return (
    <>
      <NavigationBar />
      <div className="elections-container">
        {electionsData.map((election, index) => (
          <Electionsshow
            key={election.ElectionID}
            electionid={election.ElectionID}
            title={election.Title}
            description={election.Description}
            startdate={election.StartDate}
            enddate={election.EndDate}
            isLastInRow={(index + 1) % 3 === 0}
            setSelectedElectionID={setSelectedElectionID}
          />
        ))}
        {selectedElectionID && <ElectionResults results={resultsData} />}
      </div>
    </>
  );
};

export default Parentresults;
