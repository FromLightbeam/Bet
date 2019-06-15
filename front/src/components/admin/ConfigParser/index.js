import React from 'react';

import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';


function ConfigParser(props) {
  const { filename } = props;
  return filename ?
    <Paper>
      <h4>FileName: {filename}</h4>
    </Paper> : null;
}

export default ConfigParser;
