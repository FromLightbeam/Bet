import React, { useState, useEffect } from 'react';

import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Select from '@material-ui/core/Select';
import { Checkbox, FormGroup, FormControlLabel, Button } from '@material-ui/core';

import { getSeasons, getLeagues } from '../../../api/api';
import Dialog from "./Dialog";
import ParsingChoice, { UseField } from './ParsingChoice';
import './style.scss';



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

  function submit() {
    console.log('name', name);
    console.log('seasonField', seasonField);
    console.log('seasonName', seasonName);
    console.log('leagueField', leagueName);
    console.log('dateField', dateField);
    console.log('dateFormat', dateFormat);
    console.log('club1', club1);
    console.log('club2', club2);
    console.log('metricsExclude', metricsExclude);
  }

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
        setName={setSeasonName}
        field={seasonField}
        fields={fields}
        setField={setSeasonField}
        getNames={getSeasons}
      />
      <Divider />
      <h3>League</h3>
      <ParsingChoice
        name={leagueName}
        setName={setLeagueName}
        field={leagueField}
        fields={fields}
        setField={leagueField}
        getNames={getLeagues}
      />
      <Divider />
      <div>
        <h3>First Club</h3>
        <UseField
          fields={fields}
          value={club1}
          setValue={setClub1}
        />
      </div>
      <Divider />
      <div>
        <h3>Second Club</h3>
        <UseField
          fields={fields}
          value={club2}
          setValue={setClub2}
        />
      </div>
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
      <Button color='primary' variant='contained' onClick={submit}>
        Submit
      </Button>
    </Paper> : null;
}

export default ConfigParser;
