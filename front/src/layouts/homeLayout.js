import React from 'react';
import AppBar from '../components/common/AppBar';

function HomeLayout({children}) {
  return (
    <div>
      <AppBar className='content' />
      {children}
    </div>
  );
}

export default HomeLayout;
