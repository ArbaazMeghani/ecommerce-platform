import React from 'react'
import { useSelector } from 'react-redux'
import { Button, Card, CardActionArea, CardContent, CardActions, Typography, CardMedia } from '@material-ui/core'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function CartProduct() {
  const products = useSelector(state => state.cart)

  const productList = () => {
    return products.map(product => {
      return (
        <Card>
          <Link to={`/product/${product.productId}`}>
            <CardActionArea>
              <CardMedia
                image={product.images[0].imageUrl}
                title={product.title}
              />
              <CardContent>
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