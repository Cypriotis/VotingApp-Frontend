// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import AuthService from './authService';
import RegistrationForm from './components/register/RegistrationForm';
import LoginForm from './components/login/LoginForm';
import ElectionsReg from './components/electionRegistry/electionRegForm';
import CreateElection from './components/electionCreate/electionCreate';
import CandidateForm from './components/candidateList/candidateForm';
import CandidateAdd from './components/candidateAdd/candidateAdd';
import ParentComponent from './components/electionList/parentComp';
import ErrorPage from './ErrorPage';
import NotLoggedIn from './notLoggedin';
import NavigationBar from './components/navigationBar/NavigationBar'; // Import the NavigationBar component

const Home = () => <h2>Home</h2>;
const Dashboard = () => <h2>Dashboard</h2>;
const Login = () => <LoginForm />;
const Logout = () => (
  <div>
    <h2>Logout</h2>
    <button onClick={AuthService.logout}>Logout</button>
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route
          path="/electionreg"
          element={
            <ProtectedRoute
              element={
                <>
                  <NavigationBar />
                  <ElectionsReg />
                </>
              }
            />
          }
        />
        <Route
          path="/electionslist"
          element={
            <ProtectedRoute
              element={
                <>
                  <NavigationBar />
                  <ParentComponent />
                </>
              }
            />
          }
        />
        <Route
          path="/create"
          element={
            <ProtectedRoute
              element={
                <>
                  <NavigationBar />
                  <CreateElection />
                </>
              }
            />
          }
        />
        <Route
          path="/candform"
          element={
            <ProtectedRoute
              element={
                <>
                  <NavigationBar />
                  <CandidateForm />
                </>
              }
            />
          }
        />
        <Route
          path="/candadd"
          element={
            <ProtectedRoute
              element={
                <>
                  <NavigationBar />
                  <CandidateAdd />
                </>
              }
            />
          }
        />
        <Route path="/notloggedin" element={<NotLoggedIn />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
