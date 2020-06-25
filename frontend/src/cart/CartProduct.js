import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom';
import { RemoveFromCart } from '../actions/Cart'
import CheckoutButton from '../checkout/components/CheckoutButton';

const useStyles = makeStyles({
  root: {
    minWidth: "100%",
  },
  action: {
    display: "flex",
    justifyContent: "space-between",
  },
  media: {
    height: 50,
    maxWidth: 10,
  },
})

export default function CartProduct({handleClose}) {
  const products = useSelector(state => state.cart)
  const classes = useStyles()
  const history = useHistory()
  const dispatch = useDispatch()

  const productList = () => {
    return products.map(product => {
      return (
        <Grid container spacing={0} direction="row" justify="space-between" alignItems="center">
          <Grid item>
              {product.images[0].url}
          </Grid>
          <Grid item>
            <Typography>
              {product.title}
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              {product.quantity}
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              {product.price}
            </Typography>
          </Grid>
          <Grid item>
            <Button>
              X
            </Button>
          </Grid>
        </Grid>
      )
    })
  }

  const handleProductClick = (product) => {
    const path = `/product/${product.productId}`
    history.push(path)
    handleClose()
  }

  const allProducts = productList()

  if(allProducts.length > 0) {
    return (
      <>
      <Grid container spacing={0} direction="row" justify="space-between" alignItems="center">
          <Grid item>
              Image
          </Grid>
          <Grid item>
            <Typography>
              Title
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              Quantity
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              Cost
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              Remove
            </Typography>
          </Grid>
        </Grid>
        {allProducts}
        <CheckoutButton buttonText="Checkout" handleClick={handleClose}/>
      </>
    )
  } else {
    return <h3>Your Cart is Empty :(</h3>
  }
}