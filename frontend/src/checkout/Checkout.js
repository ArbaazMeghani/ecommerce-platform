import React from 'react'
import { useSelector } from 'react-redux'

export default function Checkout() {
  const products = useSelector(state => state.cart)
  let totalPrice = 0.0
  products.forEach(product => {
    totalPrice += product.quantity * product.price
  })

  return (
    <div>
      <h1>checkout</h1>
      <h3>Total Price: {totalPrice}</h3>
    </div>
  )
}