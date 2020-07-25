import React from 'react'
import { useSelector } from 'react-redux'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import CheckoutForm from './components/CheckoutForm'
import { useHistory } from 'react-router-dom'
import Keys from '../config/Keys'

export default function Checkout() {
  const history = useHistory()

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

  const stripePromise = loadStripe(Keys.STRIPE_API_KEY)

  return (
    <div style={{marginLeft: "20%", marginRight: "20%"}}>
      <h1>checkout</h1>
      <Elements stripe={stripePromise}>
        <CheckoutForm products={products} price={totalPrice}/>
      </Elements>
    </div>
  )
}