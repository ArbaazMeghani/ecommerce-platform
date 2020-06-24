import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Card, CardActionArea, CardContent, CardActions, Typography, CardMedia } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom';
import { RemoveFromCart } from '../actions/Cart'
import CheckoutButton from '../checkout/components/CheckoutButton';

const useStyles = makeStyles({
  root: {
    minWidth: "100%",
    // maxHeight: 50,
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
        <>
        </>
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
        {allProducts}
        <CheckoutButton buttonText="Checkout" handleClick={handleClose}/>
      </>
    )
  } else {
    return <h3>Your Cart is Empty :(</h3>
  }
}