import React, { useState } from 'react';
import {Box, Tabs, Tab} from '@mui/material';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import { styled } from '@mui/material/styles';

import './styles.scss';

const StyledTabs = styled((props) => (
    <Tabs
      {...props}
      TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
  ))({
    '& .MuiTabs-indicator': {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: '#343434',
    },
  });  

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
      textTransform: 'none',
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.pxToRem(15),
      marginRight: theme.spacing(1),
      '&.Mui-selected': {
        color: '#343434',
      },
      '&.Mui-focusVisible': {
        backgroundColor: '#343434',
      },
    }),
  );

const Projects = () => {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <Box sx={{background: '#f7f7f7'}}>
            <TabContext value={value}>
                <Box>
                    <StyledTabs centered onChange={handleChange} value={value} sx={{marginTop: '6%'}}>
                        <StyledTab 
                        value='1'
                        className='label-item' label='Web' sx={{fontFamily: 'Outfit', textTransform: 'Capitalize'}}></StyledTab>
                        <StyledTab 
                        value='2'
                        className='label-item' label='Design' sx={{fontFamily: 'Outfit', textTransform: 'Capitalize'}}></StyledTab>
                        <StyledTab 
                        value='3'
                        className='label-item' label='Other' sx={{fontFamily: 'Outfit', textTransform: 'Capitalize'}}></StyledTab>
                    </StyledTabs>
                </Box>
                <TabPanel value='1'>Item 1</TabPanel>
                <TabPanel value='2'>Item 2</TabPanel>
                <TabPanel value='3'>Item 3</TabPanel>
            </TabContext>
             
        </Box>
    )
}

export default Projects;