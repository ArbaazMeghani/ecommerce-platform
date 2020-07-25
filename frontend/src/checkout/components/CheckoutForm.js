import React from 'react'
import { Grid, Button } from '@material-ui/core'
import CheckoutInput from './CheckoutInput'
import { CardElement } from '@stripe/react-stripe-js'
import StateDropdown from './StateDropdown'

const CheckoutForm = ({handleUpdate, handleSubmit, userInfo, price}) => {
  return (
    <form onSubmit={handleSubmit}>
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
          <StateDropdown field="state" value={userInfo.state} updateValue={handleUpdate}/>
          <CheckoutInput field="zipCode" label="Zipcode" value={userInfo.zipCode} updateValue={handleUpdate}/>
        </Grid>
        <br />
        <Grid item xs={6}>
          <div style={{ borderBottom: "solid 1px" }}>
            <CardElement options={{
              style: {
                base: {
                  fontFamily: "Arial",
                  fontSize: "16px",
                  color: "#000000"
                }
              }
            }}/>
          </div>
        </Grid>
      </Grid>
      <br />
  <Button variant="contained" type="submit" color="primary">Pay ${price}</Button>
    </form>
  )
}

export default CheckoutForm