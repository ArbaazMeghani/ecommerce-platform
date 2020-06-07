import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AddToCart, RemoveFromCart } from '../actions/Cart'
import { Button } from '@material-ui/core'


export default function CartManagementButton({product}) {
  const containsProduct = useSelector(state => state.cart
    .filter(productInCart => productInCart.productId === product.productId).length > 0)
  
  const dispatch = useDispatch()
  const text = containsProduct ? "Remove from cart" : "Add to cart"
  const action = containsProduct ? RemoveFromCart : AddToCart

  return (
    <Button onClick={() => dispatch(action(product))}>
      {text}
    </Button>
  )
}