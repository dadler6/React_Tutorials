/*
    This is a layout component.
*/

import React from "react"

// For linking
import { Link } from "gatsby"

// Local component
const ListLink = props => (
    <li style={{ display: 'inline-block', marginRight: '1rem' }}>
        <Link to={props.to}>{props.children}</Link>
    </li>
)


// This will create a header and a menu that when
// "Layout" is imported into a page will transfer

export default ({ children }) => (
    <div style={{ margin: '3rem auto', maxWidth: 650, padding: '0 1rem' }}>
        <header style={{ marginBottom: '1.5rem' }}>
            <Link to="/" style={{ textShadow: 'none', backgroundImage: 'none'}}>
                <h3 style={{ display: 'inline'}}>MySweetSite</h3>
            </Link>
            <ul style={{ listStyle: 'none', float: 'right'}}>
                <ListLink to="/">Home</ListLink>
                <ListLink to="/about/">About</ListLink>
                <ListLink to="/contact/">Contact</ListLink>
            </ul>
        </header>
        {children}
    </div>

)