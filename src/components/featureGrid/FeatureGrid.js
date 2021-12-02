import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import GatsbyLogo from '../../assets/svg/featureIcons/gatsby.svg'
import LanguageIcon from '../../assets/svg/featureIcons/language.svg'
import ThemeIcon from '../../assets/svg/featureIcons/theme.svg'
import BlogIcon from '../../assets/svg/featureIcons/blog.svg'
import ScoreIcon from '../../assets/svg/featureIcons/score.svg'
import PWAicon from '../../assets/svg/featureIcons/pwa.svg'

const FeatureCard = ({ icon, title, description }) => (
    <div className="featureCard">
        {icon}
        <div>
            <span className="featureTitle">{title}</span>
            <p className="featureDescription">{description}</p>
        </div>
    </div>
)

FeatureCard.propTypes = {
    icon: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

const FeatureGrid = () => {
    const { t } = useTranslation('homepage')
    const featuredArray = [
        { icon: <GatsbyLogo />, title: t('performance'), description: t('performanceDescription') },
        { icon: <LanguageIcon />, title: t('language'), description: t('languageDescription') },
        { icon: <ThemeIcon />, title: t('theme'), description: t('themeDescription') },
        { icon: <BlogIcon />, title: t('blog'), description: t('blogDescription') },
        { icon: <ScoreIcon />, title: t('score'), description: t('scoreDescription') },
        { icon: <PWAicon />, title: t('pwa'), description: t('pwaDescription') },
    ]

    return (
        <div className="starterFeatures">
            <span className="starterIntro">{t('starterIntro')}</span>
            <div className="featureGrid">
                {featuredArray.map(feature => (
                    <FeatureCard
                        key={feature.title}
                        icon={feature.icon}
                        title={feature.title}
                        description={feature.description}
                    />
                ))}
            </div>
        </div>
    )
}
export default FeatureGrid
