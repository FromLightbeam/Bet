import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import { connectTo } from '../../../utils/';
import { logout } from '../../../actions/auth';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  label: {
    color: 'white'
  }
};
class SimpleAppBar extends React.Component {
  state = {
    anchorEl: null,
  }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes, auth } = this.props;
    const { anchorEl } = this.state
    const open = Boolean(anchorEl);
    return (
      <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Link to='/' className={classes.grow}>
              <Typography variant="h6" color="inherit" className={classes.label}>
                Top site
              </Typography>
            </Link>
            {auth ?
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : undefined}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}><Link to='/'>Home</Link></MenuItem>
                  <MenuItem onClick={this.handleClose}><Link to='/my/cards'>My Cards</Link></MenuItem>
                  <MenuItem onClick={() => { 
                    this.props.logout();
                    this.handleClose();
                  }}>
                    Logout
                  </MenuItem>
                </Menu>
              </div>
              :
              <Link to='/login'>
                <Button color="inherit" className={classes.label}>Login</Button>
              </Link>
            }
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connectTo(
  state => ({
    auth: state.auth.token
  }),
  {
    logout
  },
  withStyles(styles)(SimpleAppBar)
);
