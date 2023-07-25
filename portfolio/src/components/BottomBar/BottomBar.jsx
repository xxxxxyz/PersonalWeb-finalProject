import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const  BottomBar = () => {
  const mode = 'dark';

  return (
    <div className='bottom-container'>
      <div className='toggle-btn'>
        {/* {mode === 'dark' ? <img src='../../assets/icons/toggle-left.svg' /> : <img src="../../assets/icons/toggle-right.svg" />} */}
        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.5 8H11.5C5.70101 8 1 12.4772 1 18C1 23.5228 5.70101 28 11.5 28H23.5C29.299 28 34 23.5228 34 18C34 12.4772 29.299 8 23.5 8Z" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11.6667 22.75C14.0829 22.75 16.0417 20.7912 16.0417 18.375C16.0417 15.9588 14.0829 14 11.6667 14C9.25044 14 7.29169 15.9588 7.29169 18.375C7.29169 20.7912 9.25044 22.75 11.6667 22.75Z" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div className='bottom-list'>
        <a  className='list-item' href="https://www.linkedin.com/in/zoe-x-249a94207/" >Linkedin</a>
        <a className='list-item' to="/others">Resume</a>
      </div>
    </div>
  )
}

export default BottomBar;