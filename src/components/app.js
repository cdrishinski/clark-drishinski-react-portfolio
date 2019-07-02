import React, { Component } from 'react';
import moment from "moment";
import axios from 'axios'
import {
  BrowserRouter as Router,
  Switch, 
  Route
} from 'react-router-dom';

import NavigationComponent from './navigation/navigation-container';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Blog from './pages/blog';
import PortfolioDetail from './portfolio/portfolio-detail';
import NoMatch from './pages/no-match';

export default class App extends Component {
  constructor(){
    super();

    this.getPortfolioItems = this.getPortfolioItems.bind(this)
  }
getPortfolioItems() {
  // const axios = require('axios');
// Make a request for a user with a given ID
axios
  .get('https://clarkjames.devcamp.space/portfolio/portfolio_items')
  .then(response => {
    // handle success
    console.log('response data',response);
  })
  .catch(error => {
    // handle error
    console.log(error);
  })
}

  render() {
    this.getPortfolioItems();
    return (
      <div className='app'>
        <Router>
          <div>
          <h1>Clark Drishinski's Portfolio</h1> 
        <div>
          {moment().format('MMMM Do YYYY, h:mm:ss a')}
        </div>
            <NavigationComponent />
            {/* Routes are declared in the <Switch> tags  */}
            <Switch>
              <Route exact path="/" component={Home} />
              <Route  path="/about-me" component={About} />
              <Route  path="/contact" component={Contact} />
              <Route  path="/blog" component={Blog} />
              <Route  exact path="/portfolio/:slug" component={PortfolioDetail} />
              <Route  component={NoMatch} />
            </Switch>
          </div>
        </Router>

        
    
      </div>
    );
  }
}
