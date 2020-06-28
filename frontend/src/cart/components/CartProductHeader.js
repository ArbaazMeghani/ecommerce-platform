import React from 'react'
import { Grid, Typography } from '@material-ui/core'

export default function CartProductHeader() {
  return (
    <>
      <Grid item xs={4}>
        <Typography variant="overline">
          Image
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="overline">
          Title
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="overline">
          Quantity
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="overline">
          Cost ea.
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="overline">
          Remove From Cart
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <hr />
      </Grid>
    </>
  )
}