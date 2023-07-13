import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Grid } from '@mui/material';
import HomePage from './HomePage/HomePage';
import Navbar from './Navbar/Navbar';
import ProjectsPage from './ProjectsPage/ProjectsPage';
import BottomBar from './BottomBar/BottomBar';

import './App.scss';

function App() {
  return (
    <div className='main-container'>
      <Navbar />
      <section className='outer-wrapper'>
        <section className='content-wrapper'>
          <HomePage />
          <ProjectsPage />
        </section>
      </section>
    </div>
  )
}

export default App;
