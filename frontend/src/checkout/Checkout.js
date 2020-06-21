import React from 'react'
import { useSelector } from 'react-redux'

export default function Checkout() {
  const products = useSelector(state => state.cart)
  return (
    <div>
      <h1>checkout</h1>
    </div>
  )
}