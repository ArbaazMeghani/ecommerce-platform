import React from 'react'
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import { IconButton, Badge, Modal } from '@material-ui/core'
import { useSelector } from 'react-redux'

export default function CartButton() {
  const productCount = useSelector(state => state.cart.length)
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton aria-label="Shopping Cart" onClick={handleOpen}>
        <Badge badgeContent={productCount} color="secondary">
          <ShoppingCart htmlColor="#FFFFFF"/>
        </Badge>
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <h1>hello</h1>
      </Modal>
    </>
  )
}