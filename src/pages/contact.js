import React from 'react'
import { useTranslation } from 'react-i18next'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ContactForm from '../components/ContactForm'

function SecondPage() {
    const { t } = useTranslation('contact')

    return (
        <Layout>
            <SEO title="contact:title" />
            <h1 className="pageTitle">{t('title')}</h1>
            <ContactForm />
        </Layout>
    )
}

export default SecondPage
