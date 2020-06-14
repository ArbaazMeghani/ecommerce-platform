import React from 'react'
import { useSelector } from 'react-redux'
import { Button } from '@material-ui/core'

export default function CartProduct() {
  const products = useSelector(state => state.cart)

  const productList = () => {
    return products.map(product => {
      return <h3 key={product.productId}>{product.title}</h3>
    })
  }

  const allProducts = productList()

  if(allProducts.length > 0) {
    return (
      <>
        {allProducts}
        <Button variant="contained" color="primary">Checkout</Button>
      </>
    )
  } else {
    return <h3>Your Cart is Empty :(</h3>
  }
}