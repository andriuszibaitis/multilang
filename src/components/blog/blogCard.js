import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Card, CardContent } from '@mui/material'
import Link from '../link'

function blogCard(edge) {
    return (
        <Link className="blogCard" key={edge.node.id} to={edge.node.frontmatter.slug}>
            <Card className="card" elevation={0}>
                <GatsbyImage
                    className="cardImage"
                    alt={edge.node.frontmatter.title}
                    image={edge.node.frontmatter.image.childImageSharp.gatsbyImageData}
                />
                <CardContent className="cardTitle">{edge.node.frontmatter.title}</CardContent>
            </Card>
        </Link>
    )
}

export default blogCard
