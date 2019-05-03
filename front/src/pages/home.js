import React from 'react';
import MatchList from '../components/home/MatchList';
import Filter from '../components/home/Filter';

function Home() {
  return (
    <div className='content'>
      <Filter />
      <MatchList />
    </div>
  );
}

export default Home;
