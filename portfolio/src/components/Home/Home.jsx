import React, { useState } from 'react';

import './styles.scss';

import { Box, Typography } from '@mui/material';

import ButtonCustom from '../ButtonCustom/ButtonCustom';
import AnimatedLetters from '../AnimatedLetters/AnimatedStyles';

const Home = () => {
  // const [letterClass, setLetterClass] = useState('text-animate');
  // const nameArray = ['Z', 'o', 'e'];
  // const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.'];

  return (
    <Box className='home-content'>
      <Box className='text-zone'>
        <Typography variant='h3' className='title' style={{marginLeft: 'auto', marginRight: 'auto', paddingTop: '16%'}}>Hi, I'm Zoe,<br/> web developer & designer</Typography>
      </Box>
      <ButtonCustom />
    </Box>    
  )
}

export default Home;