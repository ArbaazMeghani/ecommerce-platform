import React from 'react'
import { useSelector } from 'react-redux'
import { Grid } from '@material-ui/core'
import CheckoutButton from '../../checkout/components/CheckoutButton'
import CartProductHeader from './CartProductHeader'
import CartProduct from './CartProduct'

export default function CartModal({handleClose}) {
  const products = useSelector(state => state.cart)

  if(products.length > 0) {
    return (
      <>
        <Grid container spacing={0} direction="row" justify="space-between" alignItems="center">
          <CartProductHeader />
          <CartProduct products={products} />
        </Grid>
        <CheckoutButton buttonText="Checkout" handleClick={handleClose}/>
      </>
    )
  } else {
    return <h3>Your Cart is Empty :(</h3>
  }
}