import React from 'react'
import { useSelector } from 'react-redux'
import { Button, Card, CardActionArea, CardContent, CardActions, Typography, CardMedia } from '@material-ui/core'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { makeStyles } from '@material-ui/core/styles';

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
  noTextDecoration: {
    textDecoration: 'inherit',
    color: "inherit",
  },
})

export default function CartProduct() {
  const products = useSelector(state => state.cart)
  const classes = useStyles();

  const productList = () => {
    return products.map(product => {
      return (
        <Card className={classes.root}>
          <Link to={`/product/${product.productId}`} className={classes.noTextDecoration}>
            <CardActionArea>
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
          </Link>
          <CardActions>
            <Button size="small" color="primary">
              X
            </Button>
          </CardActions>
        </Card>
      )
    })
  }

  const allProducts = productList()

  if(allProducts.length > 0) {
    return (
      <>
        {allProducts}
        <Button variant="contained" color="primary">Checkout</Button>
      </>
    )
  } else {
    return <h3>Your Cart is Empty :(</h3>
  }
}