/*
    This file, since it is src/components/*.js will
    define a component.

    This page is header.js. It will make a "Header"
    component.
*/

// Import react
import React from "react"

// Make a header component

// We have "props" as the input, which are
// "properties" supplied to React components

// In JSX, we can add any JavaScript expression by
// wrapping it with {}

export default props => <h1>{props.headerText}</h1>