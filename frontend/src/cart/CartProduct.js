import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Card, CardActionArea, CardContent, CardActions, Typography, CardMedia } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom';
import { RemoveFromCart } from '../actions/Cart'

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
        <Card className={classes.root} key={product.productId}>
            <CardActionArea onClick={() => handleProductClick(product)}>
              <CardMedia
                className={classes.media}
                image={product.images[0].imageUrl}
                title={product.title}
              />
              <CardContent className={classes.action}>
                <Typography gutterBottom variant="h5" component="h2">
                  {product.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  price: {product.price}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  quantity: {product.quantity}
                </Typography>
              </CardContent>
            </CardActionArea>
          <CardActions>
            <Button size="small" color="primary"onClick={() => dispatch(RemoveFromCart(product))}>
              X
            </Button>
          </CardActions>
        </Card>
      )
    })
  }

  const handleProductClick = (product) => {
    const path = `/product/${product.productId}`
    history.push(path)
    handleClose()
  }

  const handleCheckout = () => {
    const path = '/checkout'
    history.push(path)
    handleClose()
  }

  const allProducts = productList()

  if(allProducts.length > 0) {
    return (
      <>
        {allProducts}
        <Button variant="contained" color="primary" onClick={handleCheckout}>Checkout</Button>
      </>
    )
  } else {
    return <h3>Your Cart is Empty :(</h3>
  }
}