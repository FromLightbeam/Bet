import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { styles } from './style';


function MediaCard(props) {
  const { classes, match } = props;
  console.log(match);
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <div className={classes.images}>
          <img
            alt='club'
            className={classes.media}
            src={match.club_1.logo}
          />
          <img
            alt='club'
            className={classes.media}
            src={match.club_2.logo}
          />
        </div>
        <CardContent>
          <Typography className={classes.text} variant="subtitle1" component="h2">
            {`${match.club_1.name} - ${match.club_2.name}`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);