import React from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '@mui/material'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Homepage } from '../utils/navLinks'
import Link from '../components/link'

function NotFoundPage() {
    const { t } = useTranslation('error404')

    return (
        <Layout>
            <SEO title="error404:title" />
            <h1 className="pageTitle">{t('header')}</h1>
            <p>{t('message')}</p>
            <Button to={Homepage.path} component={Link}>
                {t('link')}
            </Button>
        </Layout>
    )
}

export default NotFoundPage
