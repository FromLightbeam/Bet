import React from 'react';
import { withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';
import { connectTo } from '../../utils';
import Page from '../page';
import MediaCard from '../../components/Home/MediaCard';
import { getCampaigns } from '../../actions/campaigns';
import styles from './style';

class Home extends React.Component {
  componentDidMount() {
    this.props.getCampaigns();
  }

  render() {
    const { classes, campaigns } = this.props;
    return (
      <Page>
        <div className={classes.content}>
          <h1>Campaigns</h1>
          <div className={classes.cards}>
            {campaigns.map((c, i) =>
              <Link key={i} to={`/campaign/${c.id}`}>
                <MediaCard 
                  name={c.title}
                  image={c.img}
                />
              </Link>
            )}
          </div>
        </div>
      </Page>
    );
  }
}

export default connectTo(
  state => ({
    token: state.auth.token,
    campaigns: state.campaigns.campaigns
  }),
  {
    getCampaigns
  },
  withNamespaces()(withStyles(styles)(Home))
);
