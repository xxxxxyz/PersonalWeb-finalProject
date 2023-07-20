import React from 'react';
import { Grid,Item, Typography } from '@mui/material';

import './styles.scss';


const FilmpirePage = () => {
  return (
    <Grid container className='project-content'>
          <Grid container item className='content'>
            <div className='title-l' ><span className='title-s'>Website</span> Filmpire</div>
            <img className="project-img" src='https://github.com/xxxxxyz/project-filmpire/blob/main/src/assets/images/Dark%20Mode.png?raw=true' alt='screen-cut'/>
            <div className='demo'>
              <a href="https://react-practice-filmpire.netlify.app/" style={{textDecoration: 'underline', color: '#fff'}}>Live Site</a>
            </div>
          </Grid>
    </Grid>
  )
}

export default FilmpirePage;