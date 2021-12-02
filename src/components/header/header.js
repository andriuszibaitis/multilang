import React from 'react'
import { AppBar, Toolbar, useScrollTrigger, Fade, IconButton } from '@mui/material'

import { usePageContext } from '../pageContext'
import LanguagePicker from '../languagePicker/languagePicker'
import Drawer from '../drawer/drawer'
import ThemeToggle from '../themeToggle/themeToggle'
import { Homepage } from '../../utils/navLinks'
import Link from '../link'

import Logo from '../../assets/svg/logo.svg'

const Header = () => {
    const { originalPath } = usePageContext()
    const isHomepage = originalPath === Homepage.path
    const scrollTrigger = useScrollTrigger({ threshold: 300, disableHysteresis: true })
    const fadeOut = scrollTrigger || !isHomepage

    return (
        <AppBar
            position={isHomepage ? 'fixed' : 'relative'}
            className={fadeOut ? '' : 'transparent'}
        >
            <Toolbar component="nav" disableGutters className={isHomepage ? 'fixedNav' : ''}>
                <div className="navLHS">
                    <Drawer />
                </div>
                <Fade in={fadeOut}>
                    <IconButton
                        to={Homepage.path}
                        component={Link}
                        aria-label="home"
                        className="navLogo"
                        color="inherit"
                    >
                        <Logo />
                    </IconButton>
                </Fade>
                <div className="navRHS">
                    <LanguagePicker />
                    <ThemeToggle />
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Header
