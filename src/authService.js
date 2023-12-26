// authService.js
const API_BASE_URL = 'http://52.47.108.89:3000/api';

const authService = {
  login: async (identifier, password) => {
    try {
      const response = await fetch(`${API_BASE_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*', // Adjust based on your server's requirements
        },
        body: JSON.stringify({ identifier, password }),
        credentials: 'include', // Include credentials (cookies, etc.)
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      console.log('Login successful:', data);

      // Save the authentication token in local storage
      localStorage.setItem('authToken', data.token);
      localStorage.setItem('ID', data.userID);

      // You can handle the response data as needed
      // For example, you might store user information in state or context

    } catch (error) {
      console.error('Login failed:', error.message);
      throw error;
    }
  },

  register: async (username, password, email) => {
    try {
      const response = await fetch(`${API_BASE_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*', // Adjust based on your server's requirements
        },
        body: JSON.stringify({ username, password, email }),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      const data = await response.json();
      console.log('Registration successful:', data);

      // Save the authentication token in local storage upon successful registration
      localStorage.setItem('authToken', data.token);

      // You can handle the response data as needed
      // For example, you might store user information in state or context

    } catch (error) {
      console.error('Registration failed:', error.message);
      throw error;
    }
  },

  isAuthenticated: () => {
    // Check if the authentication token is present and not expired
    const authToken = localStorage.getItem('authToken'); // Adjust this based on your token storage

    if (authToken) {
      // You may also want to decode the token and check its expiration
      // Example: const decodedToken = decodeToken(authToken);
      // Check the decodedToken for expiration

      return true; // User is authenticated
    } else {
      return false; // User is not authenticated
    }
  },
};

export default authService;
