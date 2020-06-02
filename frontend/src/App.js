import React from 'react';
import Home from './home/Home'
import ProductPage from './product/ProductPage'
import {BrowserRouter as Router} from 'react-router-dom'
import { Route } from 'react-router-dom/cjs/react-router-dom.min';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/test" render={() => (<h1>hi</h1>)} />
          <Route path="/product" component={ProductPage} />
        </div>
      </Router>
    )
  }
}

export default App;
