import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './Layout/Layout';
import Home from './Home/Home';
import Projects from './Projects/Projects';

import './App.scss';

function App() {
  return (
    <div className='main-container'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/projects' element={<Projects />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;
