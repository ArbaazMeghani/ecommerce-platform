import React, { useState }  from 'react'
import { useSelector } from 'react-redux'
import { createOrder } from '../api'
import {Elements, useElements, useStripe} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'
import CheckoutForm from './components/CheckoutForm'
import { useHistory } from 'react-router-dom'

export default function Checkout() {
  const history = useHistory()

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

  const products = useSelector(state => JSON.parse(JSON.stringify(state.cart)))

  if(products.length === 0) {
    history.push("/")
  }

  let totalPrice = 0.0
  products.forEach(product => {
    totalPrice += product.quantity * product.price
    product.productNumber = product.productId
    product.productId = null
  })

  const handleUpdate = (field, value) => {
    setUserInfo({...userInfo, [field]: value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    createOrder({
      customer: {
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
        email: userInfo.email,
        phoneNumber: userInfo.phone,
        address: {
          streetAddress: userInfo.streetAddress,
          city: userInfo.city,
          state: userInfo.state,
          zipCode: userInfo.zipCode
        }
      },
      products: products,
      totalCost: totalPrice
    })
  }

  const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh')

  return (
    <div style={{marginLeft: "20%", marginRight: "20%"}}>
      <h1>checkout</h1>
      <Elements stripe={stripePromise}>
        <CheckoutForm handleUpdate={handleUpdate} handleSubmit={handleSubmit} userInfo={userInfo} price={totalPrice}/>
      </Elements>
    </div>
  )
}