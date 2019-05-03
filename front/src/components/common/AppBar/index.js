import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";

import * as routes from '../../../consts/routes';

function SimpleAppBar(props) {
  const { className } = props;

  return (
    <AppBar position="static" color="primary">
      <Toolbar className={className}>
        <Link to={routes.HOME}>
          <Typography variant="h6" color="inherit">
            Matches
            </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
}


export default SimpleAppBar;