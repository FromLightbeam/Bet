import React, { useState, useEffect } from 'react';

import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Select from '@material-ui/core/Select';
import { Checkbox, FormGroup, FormControlLabel, Button } from '@material-ui/core';

import Dialog from "./Dialog";
import './style.scss';
import ParsingChoice from './ParsingChoice';




function ConfigParser(props) {
  const { filename, fields, names, setConfig, getConfigs } = props;

  useEffect(() => { getConfigs() }, []);

  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [seasonField, setSeasonField] = useState('');
  const [seasonName, setSeasonName] = useState('');
  const [leagueField, setLeagueField] = useState('');
  const [leagueName, setLeagueName] = useState('');
  const [dateField, setDateField] = useState('');
  const [dateFormat, setDateFormat] = useState('');
  const [club1, setClub1] = useState('');
  const [club2, setClub2] = useState('');
  const [metricsExclude, setMetricsExclude] = useState([]);

  return filename ?
    <Paper className='config-content'>
      <Dialog 
        open={open}
        handleClose={() => setOpen(false)}
        handleSubmit={setConfig}
      />
      <h4>FileName: {filename}</h4>
      <Divider />
      <h3>Select parser or create new</h3>
      <div>
        <Button
          color='primary'
          variant='contained'
          onClick={() => setOpen(true)}
        >
          New
        </Button>
        <Select
          native
          value={name}
          onChange={e => setName(e.target.value)}
        >
          <option value="" />
          {names.map(config => 
            <option
              key={config.name}
              value={config}
            >
              {config.name}
            </option>
          )}
        </Select>
      </div>
      <Divider />
      <h3>Season</h3>
      <ParsingChoice 
        name={seasonName}
        field={''}
        getNames={() => {}}
      />
      <Divider />
      <h3>League</h3>
      <ParsingChoice 
        name={leagueName}
        field={''}
        getNames={() => {}}
      />
      <Divider />
      <h3>First Club</h3>
      <Select
        native
        value={club1}
        onChange={e => setClub1(e.target.value)}
      >
        <option value="" />
        {fields.map(field => <option key={field} value={field}>{field}</option>)}
      </Select>
      <Divider />
      <h3>Second Club</h3>
      <Select
        native
        value={club2}
        onChange={e => setClub2(e.target.value)}
      >
        <option value="" />
        {fields.map(field => <option key={field} value={field}>{field}</option>)}
      </Select>
      <Divider />
      <h3>Metrics</h3>
      <FormGroup className='config-content__columns'>
        {fields.map(field =>
          <FormControlLabel
            key={field}
            control={<Checkbox checked={!!field} onChange={() => { }} value={field} />}
            label={field}
          />
        )}
      </FormGroup>
      <Divider />
      <Button color='primary' variant='contained'>
        Submit
      </Button>
    </Paper> : null;
}

export default ConfigParser;
