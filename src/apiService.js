const API_BASE_URL = 'http://15.188.53.103:3000/api';

const apiService = {
  electionreg: async (UserID, UniqueCode, token) => {
    const Authorization = token; // Make sure the token is formatted correctly
    console.log(UserID, UniqueCode, Authorization);

    try {
      const response = await fetch(`${API_BASE_URL}/addusertoUsersElections`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*', // This is not needed for a POST request
          'Authorization': Authorization,
        },
        body: JSON.stringify({ UserID, UniqueCode }),
        credentials: 'include', // Include credentials (cookies, etc.)
      });

      if (!response.ok) {
        throw new Error('Failed to register user to election');
      }

      const data = await response.json();
      console.log('Registry to election successful');
      // Adjust based on your server's requirements
    } catch (error) {
      console.error('Failed to register user to election:', error);
      throw error;
    }
  },

  electioncreate: async (title, description, startDate, endDate, adminID, token) => {
    const Authorization = token; // Make sure the token is formatted correctly
    console.log(title, description, startDate, endDate, adminID);

    try {
      const response = await fetch(`${API_BASE_URL}/createelection`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*', // This is not needed for a POST request
          'Authorization': Authorization,
        },
        body: JSON.stringify({ title, description, startDate, endDate, adminID }),
        credentials: 'include', // Include credentials (cookies, etc.)
      });

      if (!response.ok) {
        throw new Error('Failed to create election');
      }

      const data = await response.json();
      console.log('Election created successfully');
      // Adjust based on your server's requirements
    } catch (error) {
      console.error('Failed to create election:', error);
      throw error;
    }
  
  },
  electionapply: async (electionid) => {
    const token = localStorage.getItem('authToken');
    const Authorization = token; // Make sure the token is formatted correctly

    try {
      const response = await fetch(`${API_BASE_URL}/applyforelection/${electionid}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*', // This is not needed for a POST request
          'Authorization': Authorization,
        },
        credentials: 'include', // Include credentials (cookies, etc.)
      });

      if (!response.ok) {
        throw new Error('Failed to register user to election');
      }

      const data = await response.json();
      console.log('Registry to election successful');
      // Adjust based on your server's requirements
    } catch (error) {
      console.error('Failed to register user to election:', error);
      throw error;
    }
  },
  results: async (userID) => {
    const userid = userID;
    try {
      const response = await fetch(`https://8qme6oh2qe.execute-api.eu-west-3.amazonaws.com/final/{usedID+}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({userid}),
      });

      if (!response.ok) {
        throw new Error('Failed to register user to election');
      }

      const data = await response.json();
      return data;
      // Adjust based on your server's requirements
    } catch (error) {
      console.error('Failed to register user to election:', error);
      throw error;
    }
  },
  getElectionApplications: async (token) => {
    const Authorization = token;

    try {
      const response = await fetch(`${API_BASE_URL}/electionApplications`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Authorization': Authorization,
        },
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('Failed to get election applications');
      }

      const data = await response.json();
      return data; // Return the election applications array directly
    } catch (error) {
      console.error('Failed to get election applications:', error);
      throw error;
    }
  },

  getelections: async (userid, token) => {
    const Authorization = token;
    const id = userid;

    try {
      const response = await fetch(`${API_BASE_URL}/userelections/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Authorization': Authorization,
        },
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('Failed to get elections');
      }

      const data = await response.json();
      return data.elections; // Return the elections array directly
    } catch (error) {
      console.error('Failed to get elections:', error);
      throw error;
    }
  },

  uservoted: async (electionid, token) => {
    const Authorization = token;
    const id = electionid;

    try {
      const response = await fetch(`${API_BASE_URL}/check-vote/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Authorization': Authorization,
        },
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('Failed to get elections');
      }

      const data = await response.json();
      return data; // Return the elections array directly
    } catch (error) {
      console.error('Failed to get elections:', error);
      throw error;
    }
  },

  getcandidates: async (electionid, token) => {
    const Authorization = token;

  try {
    const response = await fetch(`${API_BASE_URL}/candidates/${electionid}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': Authorization,
      },
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error('Failed to get candidates for election');
    }

    const data = await response.json();
    return data.candidates; // Return the candidates array directly
  } catch (error) {
    console.error('Failed to get candidates for election:', error);
    throw error;
  }
},

voteforcandidate: async (candidateid,electionsid, token) => {
  const Authorization = token;
  const electionsId = electionsid;
  const candidateId = candidateid

try {
  const response = await fetch(`${API_BASE_URL}/vote/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': Authorization,
    },
    body: JSON.stringify({ electionsId, candidateId}),
    credentials: 'include',
  });

  if (!response.ok) {
    throw new Error('Failed to vote for candidate');
  }

  const data = await response.json();
  return data; // Return the entire response data
} catch (error) {
  console.error('Failed to vote for candidate:', error);
  throw error;
}
},

  getelectionsapplied: async (token) => {
    const Authorization = token;
  
    try {
      const response = await fetch(`${API_BASE_URL}/checkapplications`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Authorization': Authorization,
        },
        credentials: 'include',
      });
  
      if (!response.ok) {
        throw new Error('Failed to get elections applied');
      }
  
      const data = await response.json();
      return data; // Return the entire response data
    } catch (error) {
      console.error('Failed to get elections applied:', error);
      throw error;
    }
  },
  acceptedelections: async (token) => {
    const Authorization = token;
  
    try {
      const response = await fetch(`${API_BASE_URL}/acceptedelections`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Authorization': Authorization,
        },
        credentials: 'include',
      });
  
      if (!response.ok) {
        throw new Error('Failed to get elections applied');
      }
  
      const data = await response.json();
      return data; // Return the entire response data
    } catch (error) {
      console.error('Failed to get elections applied:', error);
      throw error;
    }
  },
  addcandidate: async (electionid, token, candidateData) => {
    const Authorization = token;
    const candidateName = candidateData.candidateName;
    const candidateDetails = candidateData.candidateDetails;
    console.log(candidateData)
    console.log(candidateName, candidateDetails); // Log the candidateName and candidateDetails for debugging purposes)
    console.log(token)

    try {
      const response = await fetch(`${API_BASE_URL}/addcandidate/${electionid}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Authorization': Authorization,
        },
        body: JSON.stringify(candidateData), // Send the candidateData in the request body
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('Failed to add candidate');
      }

      const data = await response.json();
      return data; // Return the entire response data
    } catch (error) {
      console.error('Failed to add candidate:', error);
      throw error;
    }
  },
  acceptApplication: async (applicationId, token) => {
    const Authorization = token;
  
    try {
      const response = await fetch(`${API_BASE_URL}/acceptapplication/${applicationId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Authorization': Authorization,
        },
        credentials: 'include',
      });
  
      if (!response.ok) {
        throw new Error('Failed to accept application');
      }
  
      const data = await response.json();
      console.log('Application accepted successfully');
      // Adjust based on your server's requirements
    } catch (error) {
      console.error('Failed to accept application:', error);
      throw error;
    }
  },
  rejectApplication: async (applicationId, token) => {
    const Authorization = token;
  
    try {
      const response = await fetch(`${API_BASE_URL}/rejectapplication/${applicationId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Authorization': Authorization,
        },
        credentials: 'include',
      });
  
      if (!response.ok) {
        throw new Error('Failed to accept application');
      }
  
      const data = await response.json();
      console.log('Application accepted successfully');
      // Adjust based on your server's requirements
    } catch (error) {
      console.error('Failed to accept application:', error);
      throw error;
    }
  },

  getElectionDetails: async (userID, token) => {
    const Authorization = token;
  
    try {
      const response = await fetch(`${API_BASE_URL}/electiondetails/${userID}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Authorization': Authorization,
        },
        credentials: 'include',
      });
  
      if (!response.ok) {
        throw new Error('Failed to get election details');
      }
  
      const data = await response.json();
      return data; // Return the entire response data
    } catch (error) {
      console.error('Failed to get election details:', error);
      throw error;
    }
  },

  getElectionsData: async (userID, token) => {
    const Authorization = token;

    try {
      const response = await fetch(`${API_BASE_URL}/electiondetails/${userID}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Authorization': Authorization,
        },
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('Failed to get elections data');
      }

      const data = await response.json();
      return data; // Return the elections array directly
    } catch (error) {
      console.error('Failed to get elections data:', error);
      throw error;
    }
  },
  

};

export default apiService;
