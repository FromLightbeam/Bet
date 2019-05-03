import React from 'react';
import Paper from "../../common/Paper";

function Filter(props) {
  

  const { className } = props;

  return (
    <Paper className={`${className} item`}>
      Filter
    </Paper>
  );
}

export default Filter;
