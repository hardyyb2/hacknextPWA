import Link from 'next/link'
import Head from 'next/head'

import classes from '../../public/styles/component/layout.module.scss'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";


const Layout = ({ children, title, description }) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name={classes.description} content={description} />
            </Head>
            <div className={classes.container}>
                <nav className={classes.nav} >
                    <Link href='/'>
                        <a>
                            <FontAwesomeIcon icon={faHome} />
                            <span className={classes.main_title}>Hacker News</span>
                        </a>
                    </Link>
                </nav>
                {children}
            </div>
        </div>
    )
}

export default Layout