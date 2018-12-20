import React from 'react';
import { withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';
import { connectTo } from '../../utils';
import Page from '../page';
import { getBets } from '../../actions/campaigns';
import styles from './style';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



class Home extends React.Component {
  componentDidMount() {
    this.props.getBets();
    !this.props.token && this.props.history.push('/')
  }

  static getDerivedStateFromProps(props, state) {
    !props.token && props.history.push('/')
    return state;
  }

  getResult = res => {
    if (res === null)
      return 'Wait'
    if (res === true)
      return 'Win'
    if (res === false)
      return 'Loss'
  }

  getColor = res => {
    if (res === null)
    return 'black'
  if (res === true)
    return 'green'
  if (res === false)
    return 'red'
  }

  render() {
    const { classes, bets } = this.props;

    return (
      <Page>
        <div className={classes.content}>
          <h1>My Bets</h1>
          <Paper className={classes.root}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Match</TableCell>
                  <TableCell>Action</TableCell>
                  <TableCell numeric>Coefficient</TableCell>
                  <TableCell numeric>Money</TableCell>
                  <TableCell numeric>Potential</TableCell>
                  <TableCell numeric>Result</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {bets.map(row => {

                  return (
                    <TableRow key={row.id}>
                      <TableCell>{row.id}</TableCell>
                      <TableCell>{row.action.match.data.slice(0, 10)}</TableCell>
                      <TableCell>{`${row.action.match.club_1.name} - ${row.action.match.club_2.name}`}</TableCell>
                      <TableCell>{row.action.action.name}</TableCell>
                      <TableCell numeric>{row.action.coefficient}</TableCell>
                      <TableCell numeric>{row.money}</TableCell>
                      <TableCell numeric>{row.money * row.action.coefficient}</TableCell>
                      <TableCell
                        style={{ fontWeight: 'bold', color: this.getColor(row.action.result) }}
                        numeric
                      >
                        {this.getResult(row.action.result)}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Paper>
        </div>
      </Page>
    );
  }
}

export default connectTo(
  state => ({
    token: state.auth.token,
    bets: state.campaigns.bets
  }),
  {
    getBets
  },
  withNamespaces()(withStyles(styles)(Home))
);
