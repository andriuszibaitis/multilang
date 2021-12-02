import React from 'react'
import { useTranslation } from 'react-i18next'
import Charbz from '../../assets/svg/charbz.svg'

const Footer = () => {
    const { t } = useTranslation('contact')

    return (
        <footer>
            <hr />
            <div className="footerCredits">
                <span>{`© ${new Date().getFullYear()} Mountain Central`}</span>
                <span className="dash">&nbsp;-&nbsp;</span>
                <a href="https://charbz.dev" target="_blank" rel="noreferrer" className="madeBy">
                    <span>{t('siteBy')}</span>
                    <Charbz className="charbzLogo" />
                </a>
            </div>
        </footer>
    )
}

export default Footer
