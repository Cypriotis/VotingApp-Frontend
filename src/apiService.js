const API_BASE_URL = 'http://13.38.62.46:3000/api';

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
  }

};

export default apiService;
