import React from 'react';
import { Link } from "react-router-dom";

import * as routes from '../../../../consts/routes';

function Match(props) {
  const { children } = props;
  return (
    <Link to={routes.MATCH}>
      {children}
    </Link>
  );
}

export default Match;