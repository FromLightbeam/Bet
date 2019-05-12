import React from 'react';

import Paper from "../../../components/common/Paper";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import "./style.scss";


function MatchDetails(props) {
  const { match, metrics } = props;

  return (
    <Paper className='item match-details__header'>
      {match.club_1 ?
        <h2>{`${match.club_1.name} - ${match.club_2.name}`}</h2> : null
      }

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Metrics</TableCell>
            <TableCell>Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {metrics.map(row => (
            <TableRow key={row.id}>
              <TableCell>
                {row.metric.shortname}
              </TableCell>
              <TableCell>
                {row.value}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default MatchDetails;