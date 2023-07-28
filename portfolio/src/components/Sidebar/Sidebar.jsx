import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Box } from '@mui/material';

import './styles.scss';

const Sidebar = () => {
  return (
      <div className='nav-bar'>
        <Link className='logo' to='/' style={{textDecoration: 'none',  color: '#333', fontSize: '2rem', }}>
          <div style={{fontFamily: 'Gaegu'}}>.yz</div>
        </Link>
        <nav className='nav-container'>
          <NavLink exact='true' activeclassname='active' to='/' className='nav-item'>Home</NavLink>
          <NavLink exact='true' activeclassname='active' to='/projects' className='nav-item'>Projects</NavLink>
          <NavLink exact='true' activeclassname='active' to='/contact' className='nav-item'>Contact</NavLink>  
        </nav>
      </div>
  )
}

export default Sidebar;