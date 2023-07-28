import React from 'react';
import {Box, Grid, Typography, Button, colors } from '@mui/material';


import './styles.scss';
import Sidebar from '../Sidebar/Sidebar';

const Layout = () => {
  return (
        <Grid container space={1} className='App'>
            <Grid item xs={1}>
                <Sidebar />
            </Grid>
            <Grid item xs={10} className='page'>
                <Box className='fake-web'>
                    <Grid container className='browser-header' sx={{height: '50px',}}>
                        <Grid item xs={1} className='browser-menu-icon'>
                            <div className='dot-1'></div>
                            <div className='dot-2'></div>
                            <div className='dot-3'></div>
                        </Grid>
                        <Grid item xs={7} className='fake-search-bar'>www.zoeyz.com</Grid>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
  )
}

export default Layout;