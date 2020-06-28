import React from 'react'
import { Grid, Typography, Button } from '@material-ui/core'
import { RemoveFromCart } from '../../actions/CartActions'
import { useDispatch } from 'react-redux'

export default function CartProduct({products}) {
  const disptach = useDispatch()

  return products.map(product => {
    return (
      <>
        <Grid item xs={4}>
          <img src={product.images[0].imageUrl} style={{maxHeight:200, maxWidth:200}} alt={product.description}/>
        </Grid>
        <Grid item xs={2}>
          <Typography>
            {product.title}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>
            {product.quantity}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>
            {product.price}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Button variant="outlined" color="secondary" onClick={() => disptach(RemoveFromCart(product))}>
            X
          </Button>
        </Grid>
        <Grid item xs={12}>
          <hr />
        </Grid>
      </>
    )
  })
}