import React from 'react'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/styles';
import ShoppingCart from '@material-ui/icons/ShoppingCart';

const styles = () => ({
  root: {
    flexGrow: 1,
    marginLeft: "5%",
    marginRight: "5%",
  },
  title: {
    flexGrow: 1,
  },
});

class Header extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              E-Commerce
            </Typography>
            <IconButton aria-label="Shopping Cart">
              <ShoppingCart htmlColor="#FFFFFF"/>
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default withStyles(styles)(Header);