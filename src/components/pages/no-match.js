import React from 'react'
import { Link } from 'react-router-dom'

export default function NoMatch() {
    return (
        <div>
           <h2>We coundnt find that page</h2>
           <Link to="/">Return to Home page</Link>
        </div>
    )
}
