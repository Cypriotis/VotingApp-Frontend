// ElectionResults.js

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import apiService from '../../apiService';
import './electionResultsStyles.css'; // Import the CSS file


const ElectionResults = () => {
  const location = useLocation();
  const { state } = location;
  const electionid = state ? state.electionId : null;

  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResultsData = async () => {
      try {
        const userID = localStorage.getItem('ID');
        const response = await apiService.results(userID);

        console.log("id", electionid);

        const filteredResults = response.filter(candidate => candidate.ElectionID === electionid);
        setResults(filteredResults);
      } catch (error) {
        console.error('Error fetching results:', error);
      }
    };

    fetchResultsData();
  }, [electionid]);

  if (!results || results.length === 0) {
    return <div>No results available for this election.</div>;
  }

  return (
    <div className="results-container">
      {results.map((candidate, index) => (
        <div key={index} className="candidate-card">
          <div className="candidate-name">{candidate.CandidateName}</div>
          <div className="election-name">{`Election: ${candidate.ElectionName}`}</div>
          <div className="votes-count">{`Votes: ${candidate.VotesCount || 0}`}</div>
        </div>
      ))}
    </div>
  );
};

export default ElectionResults;
