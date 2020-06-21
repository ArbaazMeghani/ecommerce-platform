import React from 'react'
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom';

export default function CheckoutButton({buttonText, handleClick = () => {}}) {
  const history = useHistory()

  const handleCheckout = () => {
    const path = '/checkout'
    history.push(path)
    handleClick()
  }

  return (
    <Button variant="contained" color="primary" onClick={handleCheckout}>
      {buttonText}
    </Button>
  )
}