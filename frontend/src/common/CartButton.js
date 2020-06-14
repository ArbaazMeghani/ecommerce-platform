import React from 'react'
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import { IconButton, Badge, Modal } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function CartButton() {
  const classes = useStyles();
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
        <div className={classes.paper}>
          <h2 id="simple-modal-title">Text in a modal</h2>
          <p id="simple-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
        </div>
      </Modal>
    </>
  )
}