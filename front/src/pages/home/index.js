import React from 'react';

import MatchList from '../../components/home/MatchList';
import Filter from '../../components/home/Filter';
import './style.scss'


function Home() {
  return (
    <div className='content home__content'>
      <Filter className='home__filter'/>
      <MatchList className='home__matches'/>
    </div>
  );
}

export default Home;
