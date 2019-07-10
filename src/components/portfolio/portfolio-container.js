import React, { Component } from "react";
import axios from 'axios';

import PortfolioItem from './portfolio-item';


export default class PortfolioContainer extends Component {
    constructor () {
        super()
  
        this.state = {
            pageTitle: "Welcome to my portfolio",
            isloading: false,
            data: []
        }
        this.handleFilter = this.handleFilter.bind(this)  
    }

handleFilter (filter){
    this.setState({
        data: this.state.data.filter(item => {
            return item.category === filter;
        })
    })
}

getPortfolioItems() {

  // Make a request for a user with a given ID
  axios
    .get('https://clarkjames.devcamp.space/portfolio/portfolio_items')
    .then(response => {
      // handle success
      console.log("data info", response.data)
      this.setState({
          data: response.data.portfolio_items
      })
    })
    .catch(error => {
      // handle error
      console.log(error);
    })
  }

portfolioItems () {
    return this.state.data.map(item => {
      
        return (
            <PortfolioItem 
                key={item.id} 
               item={item}
            />
            )
    })
}

componentDidMount(){
    this.getPortfolioItems();
}

    render() {
        if(this.state.isloading){
            return <div>Loading...</div>
        }

        return (
                <div className='portfolio-items-wrapper'>
                   <button className="btn" onClick={() => this.handleFilter("Marketing")}>Marketing</button>
                     <button className="btn" onClick={() => this.handleFilter("Non-Profit")}>Non-Profit</button>
                     <button className="btn" onClick={() => this.handleFilter("Fin-Tech")}>Fin-Tech</button>
                   
                    {this.portfolioItems()}
                </div>
                

       
        )
    }
}