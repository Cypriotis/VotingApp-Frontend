// authService.js
const API_BASE_URL = 'http://52.47.102.10:3000/api';

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

  isAuthenticated: async () => {
    try {
      const authToken = localStorage.getItem('authToken');
      const response = await fetch(`${API_BASE_URL}/isauthenticated`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*', // Adjust based on your server's requirements
        },
        body: JSON.stringify({ token: authToken }), // Pass authToken as a POST parameter
        credentials: 'include', // Include credentials (cookies, etc.)
      });

      if (!response.ok) {
        console.error('Error checking authentication status:', response.statusText);
        return false; // Return false if the response status is not 200
      }

      const result = await response.json();
      return result; // Return the boolean result from the server

    } catch (error) {
      console.error('Error checking authentication status:', error.message);
      return false; // Return false in case of an error
    }
  },
  logout: async () => {
    try {
      const authToken = localStorage.getItem('authToken');
      const userid = localStorage.getItem('ID');
      localStorage.removeItem('authToken');
      localStorage.removeItem('ID');
  
      const response = await fetch(`${API_BASE_URL}/logout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*', // Adjust based on your server's requirements
          'Authorization': authToken,
        },
        body: JSON.stringify({ userid }),
        credentials: 'include', // Include credentials (cookies, etc.)
      });
  
      if (!response.ok) {
        console.error('Error logging out user', response.statusText);
        return false; // Return false if the response status is not 200
      }
  
      const result = await response.json();
      localStorage.removeItem('authToken');
      localStorage.removeItem('ID');
      
      return result; // Return the boolean result from the server
  
    } catch (error) {
      console.error('Error logging user out:', error.message);
      return false; // Return false in case of an error
    }
  },
  isLoggedIn: () => {
    // Check if the authentication token is present in local storage
    const authToken = localStorage.getItem('authToken');
    return !!authToken;
  },
  
};



export default authService;
