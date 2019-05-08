import React from 'react';
import { Link } from "react-router-dom";

import * as routes from '../../../../consts/routes';
import './style.scss'

function Match(props) {
  const { match } = props;

  return (
    <Link to={routes.MATCH(match.id)}>
      <div className='match__content'>
        {`${match.club_1.name} - ${match.club_2.name}`}
      </div>
    </Link>
  );
}

export default Match;