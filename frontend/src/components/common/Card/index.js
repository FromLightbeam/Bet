import React from 'react';
import { withNamespaces } from 'react-i18next';
import { connectTo } from '../../../utils';

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import Button from '@material-ui/core/Button';
import { Link, withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core';
import { getCampaignsById, getMatchAction } from '../../../actions/campaigns';
import styles from './style';

class Campaign extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getCampaignsById({ id });
    this.props.getMatchAction({ id });
  }

  render() {
    const { classes, mymatch, actions } = this.props;

    return (
      <Card className={classes.card}>
        <CardActionArea>
          <div className={classes.images}>
            <img
              alt='club'
              className={classes.media}
              src={mymatch.club_1 && mymatch.club_1.logo}
            />
            <img
              alt='club'
              className={classes.media}
              src={mymatch.club_1 && mymatch.club_2.logo}
            />
          </div>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {`${mymatch.club_1 && mymatch.club_1.name} - ${mymatch.club_1 && mymatch.club_2.name}`}
            </Typography>
            <Typography component="p">
              {mymatch.description}
            </Typography>
            {
              actions.map((k, i) =>
                <h3 key={i}>
                  {k.action.name}: {k.coefficient}
                </h3>
              )
            }
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.buy}>

        </CardActions>
      </Card>

    );
  }
}

export default connectTo(
  state => ({
    token: state.auth.token,
    mymatch: state.campaigns.campaign,
    actions: state.campaigns.actions,
  }),
  {
    getCampaignsById,
    getMatchAction
  },
  withRouter(withNamespaces()(withStyles(styles)(Campaign)))
);
