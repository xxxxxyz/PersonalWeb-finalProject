import React from 'react';

import './styles.scss';
import { Link } from 'react-router-dom';
import BottomBar from '../BottomBar/BottomBar';

const HomePage = () => {
  return (
     <div className='home-content'>
        <div className='content-container'>
          <div className='loading-line-h'></div>
          <div className='loading-line-v'></div>  
          <div className='home-title'><span className='word-a'>Web Developer,</span> <br/><Link className='design-link' style={{textDecoration: 'none', color: '#333'}}>Designer</Link></div>
        </div>
        <BottomBar />
      </div>    
  )
}

export default HomePage;