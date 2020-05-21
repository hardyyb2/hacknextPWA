import Link from 'next/link'
import Head from 'next/head'

import classes from '../../public/styles/component/layout.module.scss'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from 'react';


const Layout = ({ children, title, description }) => {

    const [showScroll, setShowScroll] = useState(false)

    const handleScroll = e => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, true)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleButtonToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name={classes.description} content={description} />
            </Head>
            <div className={classes.container} >
                <nav className={classes.nav} >
                    <Link href='/'>
                        <a>
                            <FontAwesomeIcon icon={faHome} />
                            <span className={classes.main_title}>Hacker News</span>
                        </a>
                    </Link>
                </nav>
                {children}
                <a
                    className={classes.toTopButton}
                    style={{
                        display: showScroll ? 'inline-block' : 'none'
                    }}
                    onClick={handleButtonToTop}  >
                    <FontAwesomeIcon icon={faCaretUp} size='3x' />
                </a>
            </div>
        </div>
    )
}

export default Layout