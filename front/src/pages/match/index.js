import React, { useEffect, useState } from 'react';

import { getMatchById, getMetrics } from "../../api/api";
import MatchDetails from '../../components/match/MatchDetails';
import './style.scss';

function Match(props) {
  const [match, setMatch] = useState({});
  const [metrics, setMetrics] = useState([]);

  useEffect(() => {
    const id = props.match.params.id
    getMatchById(id).then(response => setMatch(response.data));
    getMetrics(id).then(response => setMetrics(response.data));
  }, []);

  console.log(match)
  console.log(metrics)
  return (
    <div className='content'>
      <MatchDetails
        match={match}
        metrics={metrics}
      />
    </div>
  );
}

export default Match;
