import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavigationComponent extends Component {
    constructor (){
        super();
    }
    render() {
        return (
            <div>
                <NavLink exact to="/">Home</NavLink>
                <NavLink  to="/about-me">About</NavLink>
                <button>Contact</button>
                <button>Blog</button>
                {/* below: checks if logged in as admin, then if logged in as admin lets you add blog */}
                {true ? <button>Add Blog</button> : null }    
            </div>
        )
    }
    

}