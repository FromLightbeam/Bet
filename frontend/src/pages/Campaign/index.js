import React from 'react';
import { withNamespaces } from 'react-i18next';
import { connectTo } from '../../utils';
import Page from '../page';
import MyCard from '../../components/common/Card'
import { withStyles } from '@material-ui/core';
import { getCampaignsById, addToMyCards } from '../../actions/campaigns';
import styles from './style';

class Campaign extends React.Component {


  render() {
    const { classes } = this.props;

    return (
      <Page>
        < MyCard />
      </Page >
    );
  }
}

export default connectTo(
  state => ({
    token: state.auth.token,
    campaign: state.campaigns.campaign
  }),
  {
    addToMyCards,
    getCampaignsById
  },
  withNamespaces()(withStyles(styles)(Campaign))
);
