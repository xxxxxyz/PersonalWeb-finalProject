import React from 'react';

import './styles.scss';
import Sidebar from '../Sidebar/Sidebar';

const Layout = () => {
  return (
    <div className='App'>
        <Sidebar />
        <div className='page'>
            <div className='fake-web'>
                <div className='browser-header'>
                    <div className='browser-menu-icon'></div>
                    <div className='fake-search-bar'></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Layout;