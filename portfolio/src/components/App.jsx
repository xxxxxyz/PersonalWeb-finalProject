import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.scss';

import HomePage from './HomePage/HomePage';
import Projects from './Projects/Projects';
import Others from './Others/Others';
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import Sidebar from './Sidebar/Sidebar'
import ModeBtn from './ModeBtn/ModeBtn';

function App() {
  return (
    <div  className='root'>
      <Navbar />
      <main className='content'>
        <Hero />
        <Sidebar className='side-bar'/>
        <ModeBtn />
      </main>
      
    </div>
  )
}

export default App;
