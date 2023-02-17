import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Navbar from './components/Navbar';
import Bottom from './components/Bottom';
import Content from './components/Content';





function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Content/>
      <Bottom/>
    </div>
  )
}


export default App;
