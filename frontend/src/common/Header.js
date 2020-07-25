import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import CartButton from '../cart/components/CartButton'
import { useHistory } from 'react-router-dom' 

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    marginLeft: "5%",
    marginRight: "5%",
  },
  title: {
    flexGrow: 1,
    cursor: "pointer"
  },
}))

const Header = () => {
  const classes = useStyles()
  const history = useHistory()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography onClick={() => history.push("/")} variant="h6" className={classes.title}>
            E-Commerce
          </Typography>
          <CartButton />
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header