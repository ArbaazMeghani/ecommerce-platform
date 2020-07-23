import React from 'react'
import Product from './components/Product'
import { Grid } from '@material-ui/core'
import './styles/home.css'
import { retrieveProducts } from '../api'

export default class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      products: [{
        productId: 1,
        quantity: 1,
        title: "sample",
        description: "sample product description",
        images: [
          {
            imageUrl: "https://images.ctfassets.net/od02wyo8cgm5/mwtuRPXhS6CHwQB0oqA11/78ebafbc12f98797c0fd7b5c4cd266bd/cloud_x_1-fw19-midnight_cobalt-m-g1.png"
          }
        ],
        price: 24.99
      }]
    }
  }

  render() {
    return (
      <Grid container spaceing={0} direction="row" justify="center" alignItems="center">
        {this.products()}
      </Grid>
    );
  }

  products() {
    return this.state.products.map(product => {
        product.quantity = 1
        return <Grid item className="product" key={product.productId}>
          <Product product={product} />
        </Grid>
    })
  }

  saveProducts = (products) => {
    this.setState({products: products})
  }

  componentDidMount() {
    retrieveProducts(this.saveProducts)
  }
}