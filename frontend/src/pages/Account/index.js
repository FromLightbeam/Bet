import React from 'react';
import { withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';
import { connectTo } from '../../utils';
import Page from '../page';
import { getBets } from '../../actions/campaigns';
import styles from './style';

class Home extends React.Component {
  componentDidMount() {
    this.props.getBets();
    !this.props.token && this.props.history.push('/')
  }

  static getDerivedStateFromProps(props, state) {
    !props.token && props.history.push('/')
    return state;
  }

  render() {
    const { classes, bets } = this.props;
    console.log(bets)
    return (
      <Page>
        <div className={classes.content}>
          <h1>My Bets</h1>
          {
            bets.map((b, i) => 
              <div key={i}>
                <h3>{b.money}</h3>
              </div>
            )
          }
          
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
