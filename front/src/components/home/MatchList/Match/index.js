import React from 'react';
import { Link } from "react-router-dom";

import * as routes from '../../../../consts/routes';
import './style.scss'

function Match(props) {
  const { match } = props;
  console.log(match)
  return (
    <Link to={routes.MATCH}>
      <div>
        {`${match.club_1.name} - ${match.club_2.name}`}
      </div>
    </Link>
  );
}

export default Match;