const API_BASE_URL = 'http://13.39.23.248:3000/api';

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
};

export default apiService;
