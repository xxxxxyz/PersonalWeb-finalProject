import React from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Button } from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const theme = createTheme({
  palette: {
    primary: {
      light: '#757575',
      main: '#535353',
      dark: '#3a3a3a', 
      contrastText: '#fff',
    },
    secondary: {
      light: '#ebebeb',
      main: '#e7e7e7',
      dark: '#a1a1a1',
      contrastText: '#333',
    },
  },
})

const ButtonCustom = () => {
  return (
    <ThemeProvider theme={theme}>
        <Button color="primary" variant='contained' className='home-cta' startIcon={<EmailOutlinedIcon />}><span style={{fontFamily:'Outfit', fontSize: '14px',textTransform: 'capitalize'}} className='btn-name'> Contact me</span></Button>
    </ThemeProvider>
  )
}

export default ButtonCustom;