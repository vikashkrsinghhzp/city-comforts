import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Navbar from './components/Navbar';
import Bottom from './components/Bottom';
import Content from './components/Content';
import ServiceProviderForm from './components/ServiceProviderForm';
import CustomerRegForm from './components/CustomerRegForm';
import HomeScreen from './screens/HomeScreen';
import JobseekerRegScreen from './screens/JobseekerRegScreen';
import UserRegScreen from './screens/UserRegScreen';
import LoginScreen from './screens/LoginScreen';



function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen/>}></Route>
          <Route path="/new-jobseeker" element={<JobseekerRegScreen/>}></Route>
          <Route path="/new-user" element={<UserRegScreen/>}></Route>
          <Route path="/login" element={<LoginScreen/>}></Route>
        </Routes>
      </Router>
      <Bottom/>
    </div>
  )
}


export default App;
