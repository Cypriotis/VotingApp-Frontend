// authService.js
const API_BASE_URL = 'http://13.39.86.137:3000/api';

const authService = {
  login: async (username, password) => {
    try {
      const response = await fetch(`${API_BASE_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*', // Adjust based on your server's requirements
        },
        body: JSON.stringify({ username, password }),
        credentials: 'include', // Include credentials (cookies, etc.)
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      console.log('Login successful:', data);

      // You can handle the response data as needed
      // For example, you might store user information in state or context

    } catch (error) {
      console.error('Login failed:', error.message);
      throw error;
    }
  },
};

export default authService;
