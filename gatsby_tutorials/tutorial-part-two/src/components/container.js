/*
    This is a component file since it is located in
    src/components/*.js

    This file makes a Container component.
*/

// Imports
import React from "react"

// Import a CSS module
import containerStyles from "./container.module.css"

export default ({ children }) => (
    <div className={containerStyles.container}>
        {children}
    </div>
)