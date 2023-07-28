import React, { useState } from 'react';

import './styles.scss';
import { Link } from 'react-router-dom';
import BottomBar from '../BottomBar/BottomBar';
import { Typography } from '@mui/material';
import AnimatedLetters from '../AnimatedLetters/AnimatedStyles';

const HomePage = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = ['Z', 'o', 'e'];
  const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.'];

  return (
    <div className='home-content container'>
      <div className='home-title'>
          <Typography variant='h3' className='title' sx={{margin:'auto', textAlign:'center', marginTop: '10%', maxWidth: '400px'}}>Hi, I'm Zoe <br/> a frontend developer & designer.</Typography>





        <h1>
          <span className={letterClass}>H</span>
          <span className={letterClass}>i</span>
          <span className={letterClass}>,</span>
          <span className={letterClass}>I</span>
          <span className={letterClass}>'</span>
          <span className={letterClass}>m</span>
          <AnimatedLetters letterClass={letterClass} strArray={nameArray} index={11}/><br/>
          <AnimatedLetters letterClass={letterClass} strArray={jobArray} index={25}/>
        </h1>
        <h2>Frontend developer | Designer</h2>
        <Link to="/contact" className='contact-btn'>Contact me</Link>
      </div>
      <BottomBar />
    </div>    
  )
}

export default HomePage;