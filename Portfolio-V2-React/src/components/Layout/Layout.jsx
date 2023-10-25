import React from 'react';
import { Outlet } from 'react-router-dom';

import { Box, Grid } from '@mui/material';

import './styles.scss';
import Sidebar from '../Sidebar/Sidebar';

const Layout = () => {
  return (
        <Box className='app'>
            <Sidebar />
            <Box className='main-layout'>
                <Box className='fake-web'>
                    <div className='browser-header' sx={{height: '50px',}}>
                        <Box className='browser-menu-icon'>
                            <div className='dot-1'></div>
                            <div className='dot-2'></div>
                            <div className='dot-3'></div>
                        </Box>
                        <Box className='fake-search-bar'>www.zoeyz.com</Box>
                    </div>
                    <Outlet />
                </Box>
            </Box>
        </Box>
  )
}

export default Layout;