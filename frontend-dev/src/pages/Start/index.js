import React from 'react';
import { withNamespaces } from 'react-i18next';
import { connectTo } from '../../utils';
import Page from '../page';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';

class Start extends React.Component {

  render() {
    return (
      <Page>
        <Paper>
          <Link to='/home'>
            <Button variant="contained" color="primary">Home sweet home</Button>
          </Link>
        </Paper>
      </Page>
    );
  }
}

export default connectTo(
  state => ({
    token: state.auth.token
  }),
  {},
  withNamespaces()(Start)
);
