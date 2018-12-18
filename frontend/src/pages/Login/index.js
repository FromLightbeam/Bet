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
  state = {
    username: '',
    password: ''
  }
  componentDidMount() {
    this.props.token && this.props.history.replace('/');
  }

  static getDerivedStateFromProps(props, state) {
    props.token && props.history.replace('/');
    return state;
  }

  render() {
    const { classes } = this.props;
    const { username, password } = this.state;
    return (
      <Page>
        <div className={classes.loginSections}>
          <Paper className={classes.loginCart}>

            <TextField
              placeholder='Login'
              onChange={e => this.setState({ username: e.target.value })}
            />
            <TextField
              placeholder='Password'
              type='password'
              onChange={e => this.setState({ password: e.target.value })}
            />

            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={() => this.props.login({ username, password })}
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
