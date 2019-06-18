import React from 'react';

import { withStyles } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Paper from "../../../components/common/Paper";
import Stats from './Stats';
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

function getStats(stats) {
  let names = ['h_goals', 'a_goals', 'h_xg', 'a_xg', 
               'h_w', 'h_d', 'h_l', 'h_shot', 
               'a_shot', 'h_shotOnTarget', 'a_shotOnTarget',
               'h_deep', 'a_deep', 'a_ppda', 'h_ppda' ];
  let conv_format = {}
  stats.filter(s => names.find(label => s.metric.shortname == label)).map(s => { conv_format[s.metric.shortname] = parseFloat(s.value)});
  return conv_format
}

function MatchDetails(props) {
  const { match, metrics, classes } = props;
  console.log(metrics)
  return (
    <Paper className='item match-details__paper'>
      {match.club_1 ?
        <h2>{`${match.club_1.name} - ${match.club_2.name}`}</h2> : null
      }
      <Stats 
        stats={getStats(metrics)}
      />
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