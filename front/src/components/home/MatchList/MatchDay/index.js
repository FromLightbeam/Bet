import React from 'react';
import Paper from "../../../common/Paper";
import { Link } from "react-router-dom";

import * as routes from '../../../../consts/routes';

function MatchDay(props) {
  const { children } = props;
  return (
    <Link to={routes.MATCH}>
      <Paper className='item'>
        {children}
      </Paper>
    </Link>
  );
}

export default MatchDay;