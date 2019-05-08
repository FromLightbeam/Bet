import React from 'react';

import Paper from "../../common/Paper";
import Select from "../../common/Select";
import "./style.scss";

function Filter(props) {
  const { className, seasons, leagues } = props;

  return (
    <Paper className={`${className} item filter__content`}>
      <h3>Filters</h3>
      {seasons.length ?
        <Select
          native
          value={seasons[0].name}
          onChange={() => {}}
          className='filter__select'
        >
          {seasons.map(s => (
            <option key={s.id} value={s.name}>{s.name}</option>
          ))}
        </Select> : null
      }
      {leagues.length ?
        <Select 
          native
          value={leagues[0].name}
          onChange={() => {}}
          className='filter__select'
        >
          {leagues.map(s => (
            <option key={s.id} value={s.name}>{s.name}</option>
          ))}
        </Select> : null
      }
    </Paper>
  );
}

export default Filter;
