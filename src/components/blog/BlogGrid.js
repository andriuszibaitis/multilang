import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { useTranslation } from 'react-i18next'
import blogCard from './blogCard'

const BlogGrid = ({ preview }) => {
    const { i18n } = useTranslation()
    const data = useStaticQuery(graphql`
        {
            allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
                edges {
                    node {
                        id
                        excerpt(pruneLength: 250)
                        frontmatter {
                            date(formatString: "MMMM DD, YYYY")
                            slug
                            title
                            key
                            image {
                                childImageSharp {
                                    gatsbyImageData(layout: FULL_WIDTH)
                                }
                            }
                        }
                    }
                }
            }
        }
    `)
    const { edges } = data.allMarkdownRemark

    const postsToDisplay = edges
        // eslint-disable-next-line react/prop-types
        .filter(edge => !!edge.node.frontmatter.date && edge.node.frontmatter.key === i18n.language) // You can filter your posts based on some criteria

    const Posts = (preview ? postsToDisplay.slice(0, 4) : postsToDisplay).map(edge =>
        blogCard(edge),
    )

    return <div className="blogGrid">{Posts}</div>
}

export default BlogGrid

BlogGrid.propTypes = {
    preview: PropTypes.bool,
}

BlogGrid.defaultProps = {
    preview: false,
}
