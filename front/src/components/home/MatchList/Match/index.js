import React from 'react';
import { Link } from "react-router-dom";

import * as routes from '../../../../consts/routes';

function Match(props) {
  const { club1, club2 } = props;
  return (
    <Link to={routes.MATCH}>
      <div>
        {`${club1} - ${club2}`}
      </div>
    </Link>
  );
}

export default Match;