import React from 'react'
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import { IconButton, Badge } from '@material-ui/core'
import {useSelector} from 'react-redux'

export default function CartButton() {
  const productCount = useSelector(state => state.cart.length)
  return (
    <IconButton aria-label="Shopping Cart">
      <Badge badgeContent={productCount} color="secondary">
        <ShoppingCart htmlColor="#FFFFFF"/>
      </Badge>
    </IconButton>
  )
}