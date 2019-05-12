import React from 'react';

import { withStyles } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Paper from "../../../components/common/Paper";
import "./style.scss";

const styles = theme => ({
  table: {
    width: 'unset',
    margin: 'auto'
  },
  head: {
    // backgorund: theme.palette.primary
    color: 'black',
    fontWeight: 'bold'
  },
  centre: {
    
  }
});

function MatchDetails(props) {
  const { match, metrics, classes } = props;
  console.log(metrics)
  return (
    <Paper className='item match-details__paper'>
      {match.club_1 ?
        <h2>{`${match.club_1.name} - ${match.club_2.name}`}</h2> : null
      }
      <div className='match-details__table'>
        <Table className={classes.table}>
          <TableHead className='match-details__head'>
            <TableRow>
              <TableCell className={classes.head}>Metrics</TableCell>
              <TableCell className={classes.head} align='center'>Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {metrics.map(row => (
              <TableRow key={row.id}>
                <TableCell>
                  {row.metric.description} ({row.metric.shortname})
                </TableCell>
                <TableCell align='center'>
                  {row.value}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Paper>
  );
}

export default withStyles(styles)(MatchDetails);