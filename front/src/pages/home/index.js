import React, { useState, useEffect } from 'react';
import axios from 'axios';

import * as api from '../../consts/api';
import MatchList from '../../components/home/MatchList';
import Filter from '../../components/home/Filter';
import './style.scss'


function Home() {
  const [seasons, setSeasons] = useState([]);
  const [leagues, setLeagues] = useState([]);
  const [matches, setMathes] = useState([]);

  useEffect(() => {
    Promise.all([
      axios.get(api.SEASONS)
        .then(response => setSeasons(response.data)),
      axios.get(api.LEAGUES)
        .then(response => setLeagues(response.data))
    ])
      .then(() =>
        axios.get(api.MATCH, {
          params: {
            season: seasons.length ? seasons[1] : 'default',
            league: leagues.length ? leagues[0] : 'default'
          }
        }))
  }, []);

  return (
    <div className='content home__content'>
      <Filter
        className='home__filter'
        seasons={seasons}
        leagues={leagues}
      />
      <MatchList
        className='home__matches'
      />
    </div>
  );
}

export default Home;
