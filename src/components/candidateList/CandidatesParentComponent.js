// CandidatesParentComponent.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import apiService from '../../apiService';
import CandidateForm from './candidateForm';
import { useLocation } from 'react-router-dom';
import "./parent.css"

const CandidatesParentComponent = () => {
  const { electionid } = useParams();
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('authToken');
        const data = await apiService.getcandidates(electionid, token);
        setCandidates(data);
      } catch (error) {
        console.error('Error fetching candidates:', error);
      }
    };

    fetchData();
  }, [electionid]);

  return (
    <div>
      <div className="election-id-container">
      </div>
      <div className="candidates-container">
        {candidates.map(candidate => (
          <CandidateForm
            key={candidate.CandidateID}
            electionName={candidate.ElectionName} // Replace with the actual property name
            fullName={candidate.CandidateName}
            description={candidate.CandidateDetails}
          />
        ))}
      </div>
    </div>
  );
};

export default CandidatesParentComponent;
