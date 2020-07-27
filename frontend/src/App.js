import React from 'react'
import Home from './home/Home'
import ProductPage from './product/ProductPage'
import {BrowserRouter as Router} from 'react-router-dom'
import { Route } from 'react-router-dom/cjs/react-router-dom.min'
import Header from './common/Header'
import Footer from './common/Footer'
import Checkout from './checkout/Checkout'
import Confirmation from './confirmation/Confirmation'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/test" render={() => (<h1>hi</h1>)} />
          <Route path="/product" component={ProductPage} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/confirmation" component={Confirmation} />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;
