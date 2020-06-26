import React from 'react'
import { Grid, Typography } from '@material-ui/core'

export default function CartProductHeader() {
  return (
    <>
      <Grid item xs={4}>
        Image
      </Grid>
      <Grid item xs={2}>
        <Typography>
          Title
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography>
          Quantity
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography>
          Cost
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography>
          Remove
        </Typography>
      </Grid>
    </>
  )
}