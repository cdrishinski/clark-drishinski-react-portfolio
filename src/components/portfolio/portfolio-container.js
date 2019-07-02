import React, { Component } from "react";

import PortfolioItem from './portfolio-item';


export default class PortfolioContainer extends Component {
    constructor () {
        super()
  
        this.state = {
            pageTitle: "Welcome to my portfolio",
            isloading: false,
            data: [
                {title: "Fenway Media One", category: "Marketing", slug: "fenwaymediaone"},
                {title: "Outreach Pawsibilities", category: "Non-Profit", slug: "outreachpawsibilities"},
                {title: "FourSteps, LLC", category: "Fin-Tech", slug: "foursteps"},
               
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
        return <PortfolioItem title={item.title} slug={item.slug} />
    } )
}


    render() {
        if(this.state.isloading){
            return <div>Loading...</div>
        }

        return (
            <div>
                <h2>{this.state.pageTitle}</h2>

                <button onClick={() => this.handleFilter("Marketing")}>Marketing</button>
                <button onClick={() => this.handleFilter("Non-Profit")}>Non-Profit</button>
                <button onClick={() => this.handleFilter("Fin-Tech")}>Fin-Tech</button>
             
                {this.portfolioItems()}

            </div>
        )
    }
}