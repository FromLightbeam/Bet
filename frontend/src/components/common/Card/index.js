import React from 'react';
import { withNamespaces } from 'react-i18next';
import { connectTo } from '../../../utils';

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import Button from '@material-ui/core/Button';
import { Link, withRouter } from 'react-router-dom';
import { withStyles, TextField } from '@material-ui/core';
import { getCampaignsById, getMatchAction, postBet } from '../../../actions/campaigns';
import styles from './style';


class Campaign extends React.Component {
  state = {
    money: '',
    action: ''
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getCampaignsById({ id });
    this.props.getMatchAction({ id });
  }

  render() {
    const { classes, mymatch, actions } = this.props;
    console.log(mymatch)
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
            {new Date(mymatch.data) > Date.now() ?
              <div className={classes.footer}>
                <div>
                  {actions.map((k, i) =>
                    <h3 key={i}>
                      {k.action.name}: {k.coefficient}
                    </h3>
                  )}
                </div>
                <div className={classes.betRow}>
                  <h1>Make bet</h1>
                  <Select
                    style={{width: 180}}
                    value={this.state.action}
                    onChange={e => this.setState({ action: e.target.value })}
                  >
                    {actions.map((k, i) =>
                      <MenuItem key={i} value={k.action.id}>
                        {k.action.name}
                      </MenuItem>
                    )}

                  </Select>
                  <TextField
                    style={{width: 180}}
                    margin='normal'
                    type="number"
                    placeholder="Money"
                    value={this.state.money}
                    onChange={e => this.setState({ money: e.target.value })}
                  />
                  <Button 
                    variant="contained"
                    color="primary"
                    onClick={() => this.props.postBet({ bet: {
                      action: this.state.action,
                      money: this.state.money
                    }})}
                  >
                    Bet
                  </Button>
                </div>
              </div> :
              <div>
                <h3>Xg: {mymatch.xg}</h3>
                <h3>XgA: {mymatch.xgA}</h3>
                <h3>xPTS: {mymatch.xPTS}</h3>
                <h3>PPDA: {mymatch.PPDA}</h3>
              </div>
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
    getMatchAction,
    postBet
  },
  withRouter(withNamespaces()(withStyles(styles)(Campaign)))
);
