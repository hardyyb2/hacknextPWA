import Link from 'next/link'
import classes from '../../public/styles/component/storylist.module.scss'

const StoryList = ({ stories }) => {
    return (
        <div className={classes.story_list}>
            {
                stories.map((story, index) => {
                    return story.title && story.url ?
                        (
                            story.title.trim !== '' ?
                                <div className={classes.story} key={story.objectID}>
                                    <h2 className={classes.story_title}>
                                        <a href={story.url}>{story.title}</a>
                                    </h2>
                                    <div className={classes.story_details}>
                                        <span>{story.points || 0} points</span>
                                        <Link href={`/story?id=${story.objectID}`} >
                                            <a>{story.num_comments} comments</a>
                                        </Link>
                                    </div>
                                </div>

                                : null
                        )
                        : null
                })
            }
        </div>

    )
}

export default StoryList