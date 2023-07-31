import React from 'react';
import { Typography, Box, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

import './styles.scss';

const Contact = () => {
  return (
    <Box className="contact-container">
      <Typography variant='h5' sx={{fontFamily: "Gaegu", marginRight: '12px'}}>Find me on:</Typography>
      <Box>
        <IconButton><InstagramIcon /></IconButton>
        <IconButton><LinkedInIcon /></IconButton>
        <IconButton><TwitterIcon /></IconButton>
      </Box>
    </Box>
  )
}

export default Contact