import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { GatsbyImage, getSrc } from 'gatsby-plugin-image'
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { Button, Card, CardContent } from '@mui/material'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import { useTranslation } from 'react-i18next'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Blog } from '../utils/navLinks'
import Link from '../components/link'

const featuredImage = data => data.markdownRemark.frontmatter.image.childImageSharp.gatsbyImageData
function BlogTemplate({ data }) {
    const { t } = useTranslation('blog')

    // this data prop will be injected by the GraphQL query below.
    const { frontmatter, html } = data.markdownRemark // data.markdownRemark holds your post data
    const imagePath = getSrc(featuredImage(data))

    return (
        <Layout>
            <SEO
                title={frontmatter.title}
                description={frontmatter.description}
                image={imagePath}
                alreadyTranslated
            />
            <Card className="blogPost" elevation={0}>
                <GatsbyImage
                    image={featuredImage(data)}
                    alt={frontmatter.title}
                    className="postImage"
                />
                <CardContent className="postContent">
                    <Button
                        to={Blog.path}
                        component={Link}
                        variant="contained"
                        startIcon={<KeyboardArrowLeftIcon />}
                        classes={{ root: 'backButton', startIcon: 'backButtonIcon' }}
                    >
                        {t('title')}
                    </Button>
                    <h1 className="postTitle">{frontmatter.title}</h1>
                    <Markdown rehypePlugins={[rehypeRaw]}>{html}</Markdown>
                    <span className="postDate">{frontmatter.date}</span>
                </CardContent>
            </Card>
        </Layout>
    )
}

export const pageQuery = graphql`
    query ($originalPath: String!, $lang: String!) {
        markdownRemark(frontmatter: { slug: { eq: $originalPath }, key: { eq: $lang } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
                template
                key
                slug
                image {
                    childImageSharp {
                        gatsbyImageData(layout: FULL_WIDTH)
                    }
                }
            }
        }
    }
`

BlogTemplate.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.shape({
                title: PropTypes.string,
                description: PropTypes.string,
                date: PropTypes.string,
            }),
            html: PropTypes.string,
        }),
    }),
}

BlogTemplate.defaultProps = {
    data: {},
}

export default BlogTemplate
