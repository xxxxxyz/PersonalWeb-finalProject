import React from 'react';

import './App.scss';
import { Routes, Route, Link } from 'react-router-dom';

import Welcome from './Welcome/Welcome';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" elements={<Welcome />}></Route>
      </Routes>
    </>
  );
};

export default App;
