import React, { useState } from 'react';

import { FormControlLabel, RadioGroup, Radio } from '@material-ui/core';

function ParsingChoice(props) {
  const { field, name, getNames } = props;
  const [value, setValue] = useState('useField');

  return (
    <RadioGroup
      className=''
      value={value}
      onChange={e => setValue(e.target.value)}
    >
      <FormControlLabel value={'useField'} control={<Radio />} label="Use field" />
      <FormControlLabel value={'useExists'} control={<Radio />} label="Use already exists" />
      <FormControlLabel value={'useNew'} control={<Radio />} label="Use new" />
    </RadioGroup>
  )
}

export default ParsingChoice;