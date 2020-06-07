import React from 'react'
import { withStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

const useStyles = () => ({
  root: {
    marginTop: "5%",
    marginLeft: "5%",
    marginRight: "5%",
    marginBottom: "0",
    borderTop: "solid",
    borderColor: "DarkGrey",
    paddingTop: "2%",
    paddingBottom: "2%",
    backgroundColor: "lavender",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
})

class Footer extends React.Component {
  render() {
    const {classes} = this.props
    return (
      <div className={classes.root}>
        <Typography>
          © Sample.com
        </Typography>
      </div>
    )
  }
}

export default withStyles(useStyles)(Footer);