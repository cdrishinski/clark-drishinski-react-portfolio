import React from 'react'
import { Link } from 'react-router-dom'

export default function blog() {
    return (
        <div>
            <h2>Blog</h2>
            <div>
                <Link to='/about-me'>Read More about me</Link>
            </div>
        </div>
    )
}
