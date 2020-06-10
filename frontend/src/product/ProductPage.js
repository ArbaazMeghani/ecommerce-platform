import React from 'react'
import Axios from 'axios'
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid'
import { Button, TextField } from '@material-ui/core';
import CartManagementButton from '../common/CartManagementButton';

const useStyles = () => ({
  root: {
    marginLeft: "12%",
    marginTop: "2%",
    marginRight: "12%",
    minWidth: "100%",
    maxWidth: "100%",
  }
})

class ProductPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      product: {
        id: 1,
        title: "sample",
        description: "sample product description",
        images: [
          {
            imageUrl: "https://images.ctfassets.net/od02wyo8cgm5/mwtuRPXhS6CHwQB0oqA11/78ebafbc12f98797c0fd7b5c4cd266bd/cloud_x_1-fw19-midnight_cobalt-m-g1.png"
          }
        ],
        quantity: '',
        price: 24.99
      }
    }
  }
  render() {
    const {classes} = this.props

    return (
      <Grid container spacing={0} direction="row" justify="center" alignItems="center" className={classes.root}>
        <Grid item xs={6}>
          <img src={this.state.product.images[0].imageUrl} width="500"/>
        </Grid>
        <Grid item xs={6}>
            <h1>{this.state.product.title}</h1>
            <h4>{this.state.product.price}</h4>
            <TextField type="number" label="Quantity" value={this.state.product.quantity} onChange={this.handleQuantityUpdate}/>
            <br />
            <br />
            <CartManagementButton product={this.state.product} />
            <Button>Buy it now</Button>

            <h3>{this.state.product.description}</h3>
        </Grid>
      </Grid>
    )
  }

  componentDidMount() {
    const productId = this.props.location.pathname.split("/")[2]
    console.log(productId)
    Axios.get(`http://localhost:8762/product-service/products/${productId}`)
    .then(res => {
      res.data.quantity = ''
      this.setState({ product: res.data })
    })
    .catch(console.log)
  }

  handleQuantityUpdate = (event) => {
    if(event.target.value < 0) {
      return;
    } else if(event.target.value === 0) {
      event.target.value = ''
    }
    const product = this.state.product
    product.quantity = event.target.value

    this.setState({
      product: product
    })
  }
}

export default withStyles(useStyles)(ProductPage);