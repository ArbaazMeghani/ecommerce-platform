import React from 'react'
import { Grid, Typography, Button } from '@material-ui/core'

export default function CartProduct({products}) {
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
          <Button variant="outlined" color="secondary">
            X
          </Button>
        </Grid>
      </>
    )
  })
}