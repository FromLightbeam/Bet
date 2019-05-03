import React from 'react';

import Paper from "../../common/Paper";


function Filter(props) {
  const { className, seasons, leagues } = props;

  return (
    <Paper className={`${className} item`}>
      Filters
      {seasons.map(s => (
        <h3 key={s.id}>{s.name}</h3>
      ))}
      {leagues.map(l => (
        <h5 key={l.id}>{l.name}</h5>
      ))}
    </Paper>
  );
}

export default Filter;
