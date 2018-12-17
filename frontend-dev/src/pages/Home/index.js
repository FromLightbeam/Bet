import React from 'react';
import { withNamespaces } from 'react-i18next';
import { connectTo } from '../../utils';
import Page from '../page';


class Home extends React.Component {

  render() {
    return (
      <Page>
        <h1>Home</h1>
        <h1>eee nigers  </h1>
      </Page>
    );
  }
}

export default connectTo(
  state => ({
    token: state.auth.token
  }),
  {  },
  withNamespaces()(Home)
);
