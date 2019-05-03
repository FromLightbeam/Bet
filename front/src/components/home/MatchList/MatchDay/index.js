import React from 'react';
import Paper from "../../../common/Paper";

function MatchDay(props) {
  const { children } = props;
  return (
    <Paper className='item'>
      {children}
    </Paper>
  );
}

export default MatchDay;