/* eslint-disable react/jsx-props-no-spreading */
import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'
import { useTranslation } from 'react-i18next'
import { currentLanguages } from '../i18n/config/currentLanguages'

const Link = forwardRef(({ to, ...rest }, ref) => {
    const { i18n } = useTranslation()
    const currentLanguage = currentLanguages.find(language => i18n.language === language.shorthand)

    return <GatsbyLink {...rest} to={`${currentLanguage.path}${to}`} ref={ref} />
})

Link.propTypes = {
    to: PropTypes.string,
}

Link.defaultProps = {
    to: '',
}

export default Link
