import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './Layout/Layout';
import Home from './Home/Home';
import Projects from './Projects/Projects';
import ProjectPage from './ProjectPage/ProjectPage';
import AnimCursor from './AnimCursor/AnimCursor';

import './App.scss';

function App() {
  return (
    <div className='main-container'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/projects/projectpage' element={<ProjectPage />} />
        </Route>
      </Routes>
      <AnimCursor />
    </div>
  )
}

export default App;
