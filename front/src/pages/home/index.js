import React, { useState, useEffect } from 'react';

import MatchList from '../../components/home/MatchList';
import Filter from '../../components/home/Filter';
import { getLeagues, getSeasons, getMatches } from '../../api/api'
import './style.scss';


function Home() {
  const [seasons, setSeasons] = useState([]);
  const [leagues, setLeagues] = useState([]);
  const [matches, setMathes] = useState([]);
  const [season, setSeason] = useState(null);
  const [league, setLeague] = useState(null);

  useEffect(() => {
    Promise.all([
      getLeagues().then(response => response.data),
      getSeasons().then(response => response.data)
    ])
      .then(values => {
        const [leagues, seasons] = values;
        setSeasons(seasons);
        setLeagues(leagues);
        const s = seasons.length ? seasons[0].name : '';
        const l = leagues.length ? leagues[0].name : '';
        getMatches(s, l).then(response => setMathes(response.data))    
      })
  }, []);

  useEffect(() => {
    if (seasons.length && leagues.length) {
      const s = season ? season : seasons[0].name;
      const l = league ? league : leagues[0].name;
      getMatches(s, l).then(response => setMathes(response.data))
    }
  }, [season, league])

  return (
    <div className='content home__content'>
      <Filter
        className='home__filter'
        season={season}
        seasons={seasons}
        setSeason={setSeason}
        league={league}
        leagues={leagues}
        setLeague={setLeague}
      />
      <MatchList
        className='home__matches'
        matches={matches}
      />
    </div>
  );
}

export default Home;
