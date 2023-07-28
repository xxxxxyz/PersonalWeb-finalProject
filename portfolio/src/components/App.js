import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './HomePage/HomePage';
import ProjectsPage from './ProjectsPage/ProjectsPage';

import './App.scss';
import Layout from './Layout/Layout';

function App() {
  return (
    <div className='main-container'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route element={<HomePage />} />
          <Route path='/projects' element={<ProjectsPage />} />
          {/* <Route path='/contact' element={<Contact />} /> */}
        </Route>
      </Routes>
    </div>
  )
}

export default App;
