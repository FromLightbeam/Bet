import React from 'react';
import { withNamespaces } from 'react-i18next';
import { connectTo } from '../../utils';
import Page from '../page';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import { TextField, withStyles } from '@material-ui/core';
import styles from './style';
import { login } from '../../actions/auth';

class Start extends React.Component {
  componentDidMount() {
    this.props.token && this.props.history.replace('/');
  }

  static getDerivedStateFromProps(props, state){
    props.token && props.history.replace('/');
    return state;
  }

  render() {
    const { classes } = this.props;
    return (
      <Page>
        <div className={classes.loginSections}>
          <Paper className={classes.loginCart}>

            <TextField placeholder='Login' />
            <TextField placeholder='Password' type='password' />

            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={() => this.props.login({ login: 'Pyrloh', password: 'Where is my backend?' })}
            >
              Home sweet home
            </Button>

          </Paper>
        </div>
      </Page>
    );
  }
}

export default connectTo(
  state => ({
    token: state.auth.token
  }),
  {
    login
  },
  withNamespaces()(withStyles(styles)(Start))
);
