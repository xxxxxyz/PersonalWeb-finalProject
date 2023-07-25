import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './HomePage/HomePage';
import Navbar from './Navbar/Navbar';
import ProjectsPage from './ProjectsPage/ProjectsPage';
import Others from './Others/Others';

import './App.scss';

function App() {
  return (
    <div className='main-container'>
      <Navbar />
      <Routes className='main-content'>
        <Route path='/' element={<HomePage />}/>
        <Route path='/projects' element={<ProjectsPage />}/>
        <Route path='/others' element={<Others />}/>
      </Routes>
    </div>
  )
}

export default App;
