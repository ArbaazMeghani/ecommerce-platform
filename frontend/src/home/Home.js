import React from 'react'
import Product from './components/Product'
import Axios from 'axios'
import { Grid } from '@material-ui/core'
import './styles/home.css'

export default class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      products: [{
        id: 1,
        title: "sample",
        description: "sample product description",
        imageUrl: "https://images.ctfassets.net/od02wyo8cgm5/mwtuRPXhS6CHwQB0oqA11/78ebafbc12f98797c0fd7b5c4cd266bd/cloud_x_1-fw19-midnight_cobalt-m-g1.png",
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
      console.log(product)
      return (
        <Grid item className="product" key={product.id}>
          <Product product={product} />
        </Grid>
      )
    })
  }

  componentDidMount() {
    Axios.get("http://localhost:8762/product-service/products")
    .then(res => this.setState({ products: res.data }))
    .catch(console.log)
  }
}