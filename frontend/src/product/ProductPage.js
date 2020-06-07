import React from 'react'
import Axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid'
import { Button } from '@material-ui/core';
import CartManagementButton from '../common/CartManagementButton';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0),
    flexGrow: 1,
    maxWidth: `100%`,
    flexBasis: `100%`
  }
}))

class ProductPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      product: {
        id: 1,
        title: "sample",
        description: "sample product description",
        imageUrl: "https://images.ctfassets.net/od02wyo8cgm5/mwtuRPXhS6CHwQB0oqA11/78ebafbc12f98797c0fd7b5c4cd266bd/cloud_x_1-fw19-midnight_cobalt-m-g1.png",
        price: 24.99
      }
    }
  }
  render() {
    const {classes} = this.props
    console.log(classes)

    return (
      <Grid container spacing={0} direction="row" justify="center" alignItems="center">
        <Grid item xs={6}>
          <img src={this.state.product.imageUrl} width="500"/>
        </Grid>
        <Grid item xs={6}>
            <h1>{this.state.product.title}</h1>
            <h4>{this.state.product.price}</h4>
            <CartManagementButton product={this.state.product} />
            <Button>Buy it now</Button>
        </Grid>
        <Grid item xs={12}>
            {this.state.product.description}
        </Grid>
      </Grid>
    )
  }

  componentDidMount() {
    const productId = this.props.location.pathname.split("/")[2]
    console.log(productId)
    Axios.get(`http://localhost:8762/product-service/products/${productId}`)
    .then(res => this.setState({ product: res.data }))
    .catch(console.log)
  }
}

export default withStyles(useStyles)(ProductPage);