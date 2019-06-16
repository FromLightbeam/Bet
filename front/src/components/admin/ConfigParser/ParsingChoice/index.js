import React, { useState, useEffect } from 'react';

import { FormControlLabel, RadioGroup, Radio, TextField, Select } from '@material-ui/core';

export function UseField(props) {
  const { value, fields, setValue } = props;
  return (
    <Select
      native
      value={value}
      onChange={e => setValue(e.target.value)}
    >
      <option value="" />
      {fields.map(field => <option key={field} value={field}>{field}</option>)}
    </Select>
  )
}

function UseExists(props) {
  const { value, fields, setValue } = props;
  return (
    <Select
      native
      value={value}
      onChange={e => setValue(e.target.value)}
    >
      <option value="" />
      {fields.map(field => <option key={field.id} value={field.name}>{field.name}</option>)}
    </Select>
  )
}

function UseNew(props) {
  const {value, setValue} = props;
  return <TextField value={value} onChange={e => setValue(e.target.value)}/>
}


function ParsingChoice(props) {
  const { field, fields, name, setField, getNames, setName } = props;
  const [value, setValue] = useState('useField');
  const [names, setNames] = useState([]);

  useEffect(() => {
    getNames().then(response => setNames(response.data))
  }, []);

  return (
    <RadioGroup
      className=''
      value={value}
      onChange={e => setValue(e.target.value)}
    >
      <FormControlLabel value={'useField'} control={<Radio />} label="Use field" />
      <FormControlLabel value={'useExists'} control={<Radio />} label="Use already exists" />
      <FormControlLabel value={'useNew'} control={<Radio />} label="Use new" />
      {value === 'useField' ?
        <UseField
          fields={fields}
          value={field}
          setValue={setField}
        /> : null}
      {value === 'useExists' ?
        <UseExists
          fields={names}
          value={name}
          setValue={setName}
        /> : null}
      {value === 'useNew' ?
        <UseNew
          value={name}
          setValue={setName}
        /> : null}
    </RadioGroup>
  )
}

export default ParsingChoice;
