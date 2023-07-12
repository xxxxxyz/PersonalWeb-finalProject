import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { usesTheme } from '@mui/material/styles';

import './styles.scss';
import Logo from '../../assets/images/Asset 19@4x-8.png';


const Navbar = () => {
  return (
      <div className='navbar'>
        <Link className='logo'>
          <img src={Logo} alt='logo' className='logo-img'/>
        </Link>
        <Link type='text' className='nav-btn' sx={{padding: '4px 24px'}}>Email</Link>
      </div>
  )
}

export default Navbar;