import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './styles.scss';

const Sidebar = () => {
  return (
      <div className='sidebar'>
        <Link className='logo' to='/' onClick={() => {}} style={{textDecoration: 'none',  color: '#333', fontSize: '2rem', }}>
          <div style={{fontFamily: 'Gaegu'}}>.yz</div>
        </Link>
        <nav>
          <NavLink to='/' exact='true' activeclassname="active" className='nav-item' onClick={() => {}}>Home</NavLink>
          <NavLink to='/projects' className='nav-item'>Projects</NavLink>
          <NavLink to='/contact' className='nav-item'>Contact</NavLink>
        </nav>
      </div>
  )
}

export default Sidebar;