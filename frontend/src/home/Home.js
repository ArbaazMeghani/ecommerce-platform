import React from 'react'
import Product from './components/Product'
import Axios from 'axios'

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
    const test = this.products()
    return (
      <div className="App">
        {test}
      </div>
    );
  }

  products() {
    return this.state.products.map(product => {
      console.log(product)
      return <Product key={product.id} product={product}> </Product>;
    })
  }

  componentDidMount() {
    Axios.get("http://localhost:8762/product-service/products")
    .then(res => this.setState({ products: res.data }))
    .catch(console.log)
  }
}