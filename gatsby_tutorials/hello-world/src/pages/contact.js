/*
    This file, since it is src/pages/*.js will
    automatically become a page.

    This page is contact.js.
    Since it is index, this page can be
    reached at the root address, e.g.

    http://localhost:8000/contact/
*/

import React from "react"

// The "Link" component is predefined by gatsby
import { Link } from "gatsby"

// We defined the "Header" component
import Header from "../components/header"

export default () => (
    // These are react components
    // They look like HTML, but are not, really
    // They are what we call JSX

    // We are also using the "Link" component
    // below
    
    <div style={{ color: 'teal' }}>
        <Link to="/">Home</Link>
        <Header headerText="Contact" />
        <p>Send us a message!</p>
    </div>
)