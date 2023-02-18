import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Navbar from './components/Navbar';
import Bottom from './components/Bottom';
import Content from './components/Content';
import ServiceProviderForm from './components/ServiceProviderForm';
import CustomerRegForm from './components/CustomerRegForm';



function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Content/>
      <Bottom/>
      <ServiceProviderForm/>
      <CustomerRegForm/>
    </div>
  )
}


export default App;
