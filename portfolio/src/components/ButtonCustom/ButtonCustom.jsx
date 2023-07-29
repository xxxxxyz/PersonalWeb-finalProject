import React from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Button } from '@mui/material';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

import './styles.scss';

const theme = createTheme({
  palette: {
    primary: {
      light: '#5c5c5c',
      main: '#343434',
      dark: '#242424', 
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
        <Button color="primary" variant='outlined' className='home-cta' startIcon={<KeyboardDoubleArrowDownIcon />}><span style={{fontFamily:'Outfit'}} className='btn-name'> Scroll down</span></Button>
    </ThemeProvider>
  )
}

export default ButtonCustom;