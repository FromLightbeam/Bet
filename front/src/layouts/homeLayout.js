import React from 'react';
import AppBar from '../components/common/AppBar';
import './style.scss';

function HomeLayout({children}) {
  return (
    <div className='layout'>
      <AppBar className='content' />
      {children}
    </div>
  );
}

export default HomeLayout;
