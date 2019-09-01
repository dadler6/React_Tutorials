// Template for a blog post component

import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
export default ({ data }) => {
    const post = data.markdownRemark
    return (
    <Layout>
        <div>
            <h1>{post.frontmatter.title}, by {post.frontmatter.author}</h1>
            <h2>Posted on {post.frontmatter.date}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
    </Layout>
    )
}

// Query
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        author
      }
    }
  }
`