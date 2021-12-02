import React from 'react'
import { useTranslation } from 'react-i18next'

import Layout from '../components/layout'
import SEO from '../components/seo'
import BlogGrid from '../components/blog/BlogGrid'

const Blog = () => {
    const { t } = useTranslation('blog')

    return (
        <Layout>
            <SEO title="blog:title" />
            <h1 className="pageTitle">{t('title')}</h1>
            <BlogGrid />
        </Layout>
    )
}
export default Blog
