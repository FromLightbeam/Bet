import React from 'react';
import { withNamespaces } from 'react-i18next';
import { connectTo } from '../../../utils';

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { Link, withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core';
import { getCampaignsById, addToMyCards, getLinkForCards } from '../../../actions/campaigns';
import styles from './style';

class Campaign extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getCampaignsById({ id: id });
  }

  isSold = () => {
    const { mycampaign, campaign, token } = this.props;
    console.log(mycampaign);
    console.log(mycampaign.find(v => v.id === campaign.id));
    return token ? !mycampaign.find(v => v.id === campaign.id) : true;
  }

  render() {
    const { classes, campaign, token } = this.props;

    return (

      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={campaign.img ? campaign.img : ''}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {campaign.title}
            </Typography>
            <Typography component="p">
              {campaign.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.buy}>
          {this.isSold() ?
            < Button
              variant="contained"
              color='primary'
              disabled={!token}
              onClick={() => this.props.addToMyCards({ card: campaign })}
            >
              Buy
              </Button>
            :
            <a href={campaign.link} download>
              < Button
                variant="contained"
                color='primary'
              // onClick={() => this.props.getLinkForCards({ card: campaign })}
              >
                Download
              </Button>
            </a>
          }
        </CardActions>
      </Card>

    );
  }
}

export default connectTo(
  state => ({
    token: state.auth.token,
    campaign: state.campaigns.campaign,
    mycampaign: state.campaigns.myCards,

  }),
  {
    addToMyCards,
    getCampaignsById,
    getLinkForCards
  },
  withRouter(withNamespaces()(withStyles(styles)(Campaign)))
);
