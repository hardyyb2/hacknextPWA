import axios from 'axios'
import Error from 'next/error'
import StoryList from '../components/StoryList/StoryList'
import Layout from '../components/Layout/Layout'
import Link from 'next/link'

import classes from '../public/styles/pages/index.module.scss'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from 'react'


const Home = ({ stories, page, totalPages }) => {

    useEffect(() => {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/service-worker.js')
                .then(() => console.log('registered'))
                .catch(err => console.log(err))
        }
    }, [])

    return (
        <Layout title='HackerNext' description='A news compilation'>
            <div className={classes.header}>
                Today's headlines
            </div>
            {
                stories.length !== 0 ?
                    <StoryList stories={stories} />
                    :
                    <Error statusCode={503} />
            }
            <footer className={classes.footer}>
                {
                    page !== 1 &&
                    <Link href={`/?page=${page - 1}`}>
                        <a className={classes.prev}>
                            <FontAwesomeIcon icon={faCaretLeft} size='2x' />
                            &nbsp;&nbsp;
                            {page - 1}
                        </a>
                    </Link>

                }
                {
                    page !== totalPages - 1 &&

                    <Link href={`/?page=${page + 1}`}>
                        <a>
                            {page + 1}&nbsp;&nbsp;
                            <FontAwesomeIcon icon={faCaretRight} size='2x' />
                        </a>
                    </Link>
                }
            </footer>
        </Layout>
    )

}

Home.getInitialProps = async ({ req, res, query }) => {
    let stories, page, totalPages = 0
    try {
        page = parseInt(query.page) || 1
        let res = await axios.get(`http://hn.algolia.com/api/v1/search?page=${page}`)
        totalPages = res.data.nbPages
        stories = res.data.hits
    } catch (error) {

        stories = []
    }
    return { stories, page, totalPages }
}
export default Home