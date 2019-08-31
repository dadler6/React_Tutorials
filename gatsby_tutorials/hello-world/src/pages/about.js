/*
    This file, since it is src/pages/*.js will
    automatically become a page.

    This page is about.js. It can be reached at a URL
    such as...

    http://localhost:8000/about/
*/

import React from "react"

// Custom component
import Header from "../components/header"

export default () => (
    // These are react components.
    // The Header is defined in "../components/header.js"
    
    <div style={{ color: 'teal' }}>
        <Header headerText="About Gatsby" />
        <Header headerText="It's pretty cool"/>
        <p>Such wow. Very React.</p>
    </div>
)
