import axios from 'axios'
import Layout from '../components/Layout/Layout'
import Comments from '../components/Comments/Comments'

import classes from '../public/styles/pages/story.module.scss'
import Link from 'next/link'

const Story = ({ comments, storyDetails }) => {
    console.log(storyDetails)
    return (
        <Layout title={'story'} description='Individual stories comments'>
            <div className={classes.story}>
                <div className={classes.title} >
                    <a href={storyDetails.url}> {storyDetails.title}</a>
                </div>
                <div className={classes.author_and_time}>
                    <span>By : {storyDetails.author}</span>
                    <span>{storyDetails.created_at.replace(/[TZ]/gi, ' ')}</span>
                </div>
                <div className={classes.comments}>
                    <Comments comments={comments} />
                </div>
            </div>
        </Layout>
    )
}

Story.getInitialProps = async ({ req, res, query }) => {
    let comments = [], storyDetails = []
    try {
        let res = await axios.get(`http://hn.algolia.com/api/v1/search?tags=comment,story_${query.id}`)
        let story = await axios.get(`http://hn.algolia.com/api/v1/search?tags=story_${query.id}`)
        comments = res.data.hits
        storyDetails = story.data.hits[0]
    } catch (err) {
        console.log(err.response)
    }
    return { comments, storyDetails }
}

export default Story