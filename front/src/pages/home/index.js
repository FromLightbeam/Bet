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
      axios.get(api.SEASONS).then(response => response.data),
      axios.get(api.LEAGUES).then(response => response.data)
    ])
      .then(values => {
        const [seasons, leagues] = values;
        setSeasons(seasons);
        setLeagues(leagues);
        axios.get(api.MATCH, {
          params: {
            season: seasons.length ? seasons[0].name : 'default',
            league: leagues.length ? leagues[0].name : 'default'
          }
        }).then(response => setMathes(response.data))
      })
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
        matches={matches}
      />
    </div>
  );
}

export default Home;
