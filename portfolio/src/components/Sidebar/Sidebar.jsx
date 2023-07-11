import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';

function Sidebar() {

  return (
    <>
      <nav id='side-bar'>
        <NavLink className='list-item' to="/projects">Projects</NavLink>
        <NavLink className='list-item' to="/others">Others</NavLink>
      </nav>
    </>
  )
}

export default Sidebar;