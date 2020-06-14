import React from 'react'
import { useSelector } from 'react-redux'

export default function CartProduct() {
  const products = useSelector(state => state.cart)
  return (
      products.map(product => {
          return <h3 key={product.productId}>{product.title}</h3>
      })
  )
}