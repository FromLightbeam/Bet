import React from 'react';

import Paper from "../../../common/Paper";
import "./style.scss";

function MatchDay(props) {
  const { children, date } = props;
  // console.log(date)

  return (
    <Paper className='item matchday__content'>
      <div className='matchday__appbar'>{date}</div>
      {children}
    </Paper>
  );
}

export default MatchDay;