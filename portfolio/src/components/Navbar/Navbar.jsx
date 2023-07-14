import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { usesTheme } from '@mui/material/styles';


import './styles.scss';
import Logo from '../../assets/images/Asset 19@4x-8.png';


const Navbar = () => {
  return (
      <div className='navbar'>
        <Link className='logo' to="/">
          <img src={Logo} alt='logo' className='logo-img'/>
        </Link>
        <Link type='text' className='nav-btn' sx={{padding: '4px 24px'}}>Email</Link>
      </div>
  )
}

export default Navbar;