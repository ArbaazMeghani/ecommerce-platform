import React from 'react'
import ShoppingCart from '@material-ui/icons/ShoppingCart'
import { IconButton, Badge } from '@material-ui/core'
import { useSelector } from 'react-redux'
import Cart from '../Cart'

export default function CartButton() {
  const productCount = useSelector(state => state.cart.length)
  const [open, setOpen] = React.useState(false);

  const handleChange = () => {
    setOpen(!open);
  }

  return (
    <>
      <IconButton aria-label="Shopping Cart" onClick={handleChange}>
        <Badge badgeContent={productCount} color="secondary">
          <ShoppingCart htmlColor="#FFFFFF"/>
        </Badge>
      </IconButton>
      <Cart open={open} handleChange={handleChange} />
    </>
  )
}