import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Bottom from './components/Bottom';
import HomeScreen from './screens/HomeScreen';
import JobseekerRegScreen from './screens/JobseekerRegScreen';
import UserRegScreen from './screens/UserRegScreen';
import LoginScreen from './screens/LoginScreen';




function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Navbars/> */}
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen/>}/>
          <Route path="/jobseeker" element={<JobseekerRegScreen/>}/>
          <Route path="/new-user" element={<UserRegScreen/>}/>
          <Route path="/login" element={<LoginScreen/>}/>
          
        </Routes>
      </Router>
      <Bottom/>
    </div>
  )
}


export default App;
