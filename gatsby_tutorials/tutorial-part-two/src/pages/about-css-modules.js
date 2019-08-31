/*
    This is a page since it is located in
    src/pages/*.js

    This page will be linked to (if hosted
    locally on port 8000)

    http://localhost:8000/about-css-modules
*/

// Imports
import React from "react"

// CSS Module we created
import styles from "./about-css-modules.module.css"

// Container component we created
import Container from "../components/container"

console.log(styles)


// Create a new user component

// Note: if a component is being used in multiple
// areas of a site, we should generally put it within
// it's own .js file in the components folder
const User = props => (
    <div className={styles.user}>
        <img src={props.avatar} className={styles.avatar} alt="" />
        <div className={styles.description}>
            <h2 className={styles.username}>{props.username}</h2>
            <p className={styles.excerpt}>{props.excerpt}</p>
        </div>
    </div>
)

export default () => (
    <Container>
        <h1>About CSS Modules</h1>
        <p>CSS Modules are cool</p>
    <User
      username="Jane Doe"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
      excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
    <User
      username="Bob Smith"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
      excerpt="I'm Bob Smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />   
    </Container>
)