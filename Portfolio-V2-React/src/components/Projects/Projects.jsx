import React, { useState } from 'react';
import {Box, Tabs, Tab} from '@mui/material';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import { styled } from '@mui/material/styles';

import ProjectsCarousel from './ProjectsCarousel/ProjectsCarousel';

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
        <Box className='projects-container'>
            <TabContext value={value}>
                <Box className='tab-lab'>
                    <StyledTabs centered onChange={handleChange} value={value}>
                        <StyledTab 
                        value='1'
                        label='Web' sx={{fontFamily: 'Outfit', textTransform: 'Capitalize', fontWeight: '300'}}></StyledTab>
                        <StyledTab 
                        value='2'
                        label='Design' sx={{fontFamily: 'Outfit', textTransform: 'Capitalize', fontWeight: '300'}}></StyledTab>
                    </StyledTabs>
                </Box>
                <Box className='tab-panel-container'>
                  <TabPanel  className='tab-panel' value='1'><ProjectsCarousel /></TabPanel>
                  <TabPanel className='tab-panel' value='2'><ProjectsCarousel /></TabPanel>
                </Box>
                
            </TabContext>
             
        </Box>
    )
}

export default Projects;