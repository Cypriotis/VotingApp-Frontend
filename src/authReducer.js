// authReducer.js
const authReducer = (state = { authToken: null }, action) => {
    switch (action.type) {
      case 'SET_AUTH_TOKEN':
        return { authToken: action.payload };
      case 'CLEAR_AUTH_TOKEN':
        return { authToken: null };
      default:
        return state;
    }
  };
  
  export default authReducer;
  