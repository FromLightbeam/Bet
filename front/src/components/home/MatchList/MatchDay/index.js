import React from 'react';

import Paper from "../../../common/Paper";
import "./style.scss";

function MatchDay(props) {
  const { children, date } = props;

  return (
    <Paper className='item matchday__content'>
      <div className='matchday__appbar'>{date}</div>
      <div className='matchday__matches'>{children}</div>
    </Paper>
  );
}

export default MatchDay;