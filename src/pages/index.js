import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { useTranslation } from 'react-i18next'
import { Button } from '@mui/material'

import Layout from '../components/layout'
import SEO from '../components/seo'
import FeatureGrid from '../components/featureGrid/FeatureGrid'
import { Blog } from '../utils/navLinks'
import Link from '../components/link'
import BlogGrid from '../components/blog/BlogGrid'

import Logo from '../assets/svg/logo.svg'
import ContactForm from '../components/ContactForm'

function IndexPage() {
    const { t } = useTranslation()

    return (
        <Layout>
            <SEO title="homepage:title" />
            <div className="welcomeHeader">
                <StaticImage
                    alt="Mountain Central"
                    className="backgroundImage"
                    src="../assets/images/homeHeader.png"
                />
                <div className="logoFull">
                    <Logo className="homeLogo" />
                    <h1 className="homeTitle">Mountain Central</h1>
                </div>
                <FeatureGrid />
            </div>
            <div className="blogPreview">
                <h2>{t('blog:title')}</h2>
                <BlogGrid preview />
                <Button to={Blog.path} component={Link} className="seeAllButton">
                    {t('blog:seeAll')}
                </Button>
            </div>
            <div className="contactPreview">
                <h2>{t('contact:title')}</h2>
                <ContactForm />
            </div>
        </Layout>
    )
}

export default IndexPage
