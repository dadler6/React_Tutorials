/*
    This file, since it is src/pages/*.js will
    automatically become a page.

    This page is index.js.
    Since it is index, this page can be
    reached at the root address, e.g.

    http://localhost:8000/
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

    <div style={{ color: 'purple'}}>
        <Link to="/contact/">Contact</Link>
        <Header headerText="Hello Gatsby!" />
        <p>What a world.</p>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
)
