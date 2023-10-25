import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Box } from '@mui/material';

import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';

import './styles.scss';


const Sidebar = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const logoArray = ['.', 'y', 'z']; 

  useEffect(() => {
    setTimeout(() => {
     setLetterClass('text-animate-hover')
   }, 3000)
 }, []);


  return (
      <Box className='nav-bar'>
        <Link className='logo' to='/' style={{textDecoration: 'none',  color: '#333', fontSize: '2rem', fontFamily: 'Gaegu', }}>
            <AnimatedLetters letterClass={letterClass} strArray={logoArray} index={0} />
          {/* <div style={{fontFamily: 'Gaegu'}}>.yz</div> */}
        </Link>
        <nav className='nav-container'>
          <NavLink exact='true' activeclassname='active' to='/' className='nav-item'>Home</NavLink>
          <NavLink exact='true' activeclassname='active' to='/projects' className='nav-item'>Projects</NavLink>
        </nav>
      </Box>
  )
}

export default Sidebar;