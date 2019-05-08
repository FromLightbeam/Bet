import React from 'react';

import Paper from "../../components/common/Paper";
import './style.scss';

function Match(props) {
  console.log(props);
  return (
    <div className='content'>
      <Paper className='item'>
        Match
      </Paper>
    </div>
  );
}

export default Match;
