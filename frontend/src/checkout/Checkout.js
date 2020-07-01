import React, { useState }  from 'react'
import { useSelector } from 'react-redux'
import { InputLabel, Select, FormControl, Grid } from '@material-ui/core'
import StateChoices from './components/StateChoices'
import CheckoutInput from './components/CheckoutInput'

export default function Checkout() {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: ""
  })

  const products = useSelector(state => state.cart)
  let totalPrice = 0.0
  products.forEach(product => {
    totalPrice += product.quantity * product.price
  })

  const handleUpdate = (field, value) => {
    setUserInfo({...userInfo, [field]: value})
  }

  return (
    <div style={{marginLeft: "20%", marginRight: "20%"}}>
      <h1>checkout</h1>
      <form>
        <Grid container spacing={0} justify="center" direction="column">
          <Grid container spacing={2} justify="flex-start" alignItems="center" direction="row">
            <CheckoutInput field="firstName" label="First Name" value={userInfo.firstName} updateValue={handleUpdate}/>
            <CheckoutInput field="lastName" label="Last Name" value={userInfo.lastName} updateValue={handleUpdate}/>
          </Grid>
          <CheckoutInput field="email" label="Email" value={userInfo.email} updateValue={handleUpdate}/>
          <CheckoutInput field="phone" label="Phone" type="number" value={userInfo.phone} updateValue={handleUpdate}/>
          <CheckoutInput field="streetAddress" label="Street Address" value={userInfo.streetAddress} updateValue={handleUpdate}/>
          <Grid container spacing={2} justify="flex-start" alignItems="center" direction="row">
          <CheckoutInput field="city" label="City" value={userInfo.city} updateValue={handleUpdate}/>
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
            <CheckoutInput field="zipCode" label="Zipcode" value={userInfo.zipCode} updateValue={handleUpdate}/>
          </Grid>
        </Grid>
      </form>
      <h3>Total Price: {totalPrice}</h3>
    </div>
  )
}