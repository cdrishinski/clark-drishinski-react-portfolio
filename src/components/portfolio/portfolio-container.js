import React, { Component } from "react";

import PortfolioItem from './portfolio-item';


export default class PortfolioContainer extends Component {
    constructor () {
        super()
  
        this.state = {
            pageTitle: "Welcome to my portfolio",
            isloading: false,
            data: [
                {title: "Primerica", category: "Insurance"},
                {title: "MACU", category: "Banking"},
                {title: "LPL FINANCIAL", category: "Investments"},
                {title: "Keeler Thomas", category: "Financial Planning"},
                {title: "Foursteps", category: "Financial Planning"}
            ]
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

portfolioItems () {
    return this.state.data.map(item => {
        return <PortfolioItem title={item.title} />
    } )
}


    render() {
        if(this.state.isloading){
            return <div>Loading...</div>
        }

        return (
            <div>
                <h2>{this.state.pageTitle}</h2>

                <button onClick={() => this.handleFilter("Insurance")}>Insurance</button>
                <button onClick={() => this.handleFilter("Banking")}>Banking</button>
                <button onClick={() => this.handleFilter("Investments")}>Investments</button>
                <button onClick={() => this.handleFilter("Financial Planning")}>Financial Planning</button>

                {this.portfolioItems()}

            </div>
        )
    }
}