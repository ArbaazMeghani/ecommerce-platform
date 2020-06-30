import React from 'react'
import { useSelector } from 'react-redux'
import { InputLabel, Select, FormControl, Grid } from '@material-ui/core'
import StateChoices from './components/StateChoices'
import CheckoutInput from './components/CheckoutInput'

export default function Checkout() {
  const products = useSelector(state => state.cart)
  let totalPrice = 0.0
  products.forEach(product => {
    totalPrice += product.quantity * product.price
  })

  const handleUpdate = (label, value) => {
    console.log(label)
    console.log(value)
  }

  return (
    <div style={{marginLeft: "20%", marginRight: "20%"}}>
      <h1>checkout</h1>
      <form>
        <Grid container spacing={0} justify="center" direction="column">
          <Grid container spacing={2} justify="flex-start" alignItems="center" direction="row">
            <CheckoutInput label="First Name" updateValue={handleUpdate}/>
            <CheckoutInput label="Last Name" updateValue={handleUpdate}/>
          </Grid>
          <CheckoutInput label="Email" updateValue={handleUpdate}/>
          <CheckoutInput label="Phone" type="number" updateValue={handleUpdate}/>
          <CheckoutInput label="Street Address" updateValue={handleUpdate}/>
          <Grid container spacing={2} justify="flex-start" alignItems="center" direction="row">
          <CheckoutInput label="City" updateValue={handleUpdate}/>
            <Grid item>
              <FormControl>
                <InputLabel id="demo-simple-select-label">State</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  required
                >
                  <StateChoices />
                </Select>
              </FormControl>
            </Grid>
            <CheckoutInput label="Zipcode" updateValue={handleUpdate}/>
          </Grid>
        </Grid>
      </form>
      <h3>Total Price: {totalPrice}</h3>
    </div>
  )
}