// CandidatesParentComponent.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import apiService from '../../apiService';
import CandidateForm from './candidateForm';
import './parent.css'; // Import the modified CSS

const CandidatesParentComponent = () => {
  const { electionid } = useParams();
  const [candidates, setCandidates] = useState([]);
  const [AlreadyVoted, setAlreadyVoted] = useState([]);
  const [showAlreadyVotedWarning, setShowAlreadyVotedWarning] = useState(false);

  const fetchData = async () => {
    try {
      const userId = localStorage.getItem('ID');
      const token = localStorage.getItem('authToken');

      const data = await apiService.getcandidates(electionid, token);
      setCandidates(data);

      const voteddata = await apiService.uservoted(electionid, token);
      setAlreadyVoted(voteddata);

      console.log('Elections Data:', data);
      console.log('Does the user already voted in the current election?', voteddata);
    } catch (error) {
      console.error('Error fetching elections:', error);
    }
  };

  const handleVoteClick = async (electionId, candidateId) => {
    try {
      const token = localStorage.getItem('authToken');
      await apiService.voteforcandidate(candidateId, electionId, token);
      // You can update the UI or state based on the vote success
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setShowAlreadyVotedWarning(true);
      } else {
        console.error('Failed to vote for candidate:', error);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const closeAlreadyVotedWarning = () => {
    setShowAlreadyVotedWarning(false);
  };

  return (
    <div>
      <div className="candidates-container">
        {candidates.map(candidate => (
          <CandidateForm
            key={candidate.CandidateID}
            electionName={candidate.ElectionName}
            fullName={candidate.CandidateName}
            description={candidate.CandidateDetails}
            onVoteClick={() => handleVoteClick(electionid, candidate.CandidateID)}
            hasVoted={AlreadyVoted.hasVoted}
            highlightVoted={AlreadyVoted.candidateID === candidate.CandidateID}
          />
        ))}
      </div>

      {/* Display warning modal or alert */}
      {showAlreadyVotedWarning && (
        <div className="warning-modal">
          <p>You have already voted for this election!</p>
          <button onClick={closeAlreadyVotedWarning}>Close</button>
        </div>
      )}
    </div>
  );
};

export default CandidatesParentComponent;
