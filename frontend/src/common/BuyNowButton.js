import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AddToCart } from '../actions/CartActions'
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

const BuyNowButton = ({product}) => {
  const dispatch = useDispatch()
  const history = useHistory()

  const containsProduct = useSelector(state => state.cart
    .filter(productInCart => productInCart.productId === product.productId).length > 0)

  const handleClick = () => {
      if(!containsProduct) {
        dispatch(AddToCart(product))
      }

      history.push("/checkout")
  }

  return (
    <Button onClick={handleClick} size="small" color="primary">
      Buy Now
    </Button>
  )
}

export default BuyNowButton