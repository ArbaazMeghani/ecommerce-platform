import React from 'react'
import { useSelector } from 'react-redux'
import { TextField, InputLabel, Select, FormControl } from '@material-ui/core'
import StateChoices from './components/StateChoices'

export default function Checkout() {
  const products = useSelector(state => state.cart)
  let totalPrice = 0.0
  products.forEach(product => {
    totalPrice += product.quantity * product.price
  })

  return (
    <div>
      <h1>checkout</h1>
      <form>
        <TextField id="standard-basic" label="First Name" />
        <TextField id="standard-basic" label="Last Name" />
        <br />
        <TextField id="standard-basic" label="Email" />
        <br />
        <TextField id="standard-basic" label="Phone" />
        <br />
        <TextField id="standard-basic" label="Street Address" />
        <br />
        <TextField id="standard-basic" label="City" />
        <FormControl>
          <InputLabel id="demo-simple-select-label">State</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
          >
            <StateChoices />
          </Select>
        </FormControl>
        <TextField id="standard-basic" label="Zipcode" />

      </form>
      <h3>Total Price: {totalPrice}</h3>
    </div>
  )
}