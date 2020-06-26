import React from 'react'
import { Grid, Typography, Button } from '@material-ui/core'

export default function CartProduct({products}) {
  return products.map(product => {
    return (
      <>
        <Grid item xs={4}>
          {product.images[0].imageUrl}
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
          <Button>
            X
          </Button>
        </Grid>
      </>
    )
  })
}