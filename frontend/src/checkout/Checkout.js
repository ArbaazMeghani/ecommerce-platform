import React from 'react'
import { useSelector } from 'react-redux'
import { TextField, InputLabel, Select, FormControl, Grid } from '@material-ui/core'
import StateChoices from './components/StateChoices'

export default function Checkout() {
  const products = useSelector(state => state.cart)
  let totalPrice = 0.0
  products.forEach(product => {
    totalPrice += product.quantity * product.price
  })

  return (
    <div style={{marginLeft: "20%", marginRight: "20%"}}>
      <h1>checkout</h1>
      <form>
        <Grid container spacing={3} justify="center" direction="column">
          <Grid container spacing={2} justify="flex-start" alignItems="center" direction="row">
            <Grid item>
              <TextField id="standard-basic" label="First Name" />
            </Grid>
            <Grid item>
              <TextField id="standard-basic" label="Last Name" />
            </Grid>
          </Grid>
          <Grid item>
            <TextField id="standard-basic" label="Email" />
          </Grid>
          <Grid item>
            <TextField id="standard-basic" label="Phone" />
          </Grid>
          <Grid item>
            <TextField id="standard-basic" label="Street Address" />
          </Grid>
          <Grid container spacing={2} justify="flex-start" alignItems="center" direction="row">
            <Grid item>
              <TextField id="standard-basic" label="City" />
            </Grid>
            <Grid item>
              <FormControl>
                <InputLabel id="demo-simple-select-label">State</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                >
                  <StateChoices />
                </Select>
              </FormControl>
            </Grid>
            <Grid item>
              <TextField id="standard-basic" label="Zipcode" />
            </Grid>
          </Grid>
        </Grid>
      </form>
      <h3>Total Price: {totalPrice}</h3>
    </div>
  )
}