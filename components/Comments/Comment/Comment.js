import classes from '../../../public/styles/component/comment.module.scss'

const Comment = ({ comment }) => {
    return (
        <div key={comment.objectID} className={classes.commentBody}>
            <div className={classes.header}>
                <span className={classes.author}>
                    {comment.author}
                </span>
                <span className={classes.datetime}>
                    {comment.created_at.replace(/[TZ]/gi, ' ')}
                </span>
            </div>
            <div className={classes.body}>
                <span
                    className={classes.comment}
                    dangerouslySetInnerHTML={{
                        __html: comment.comment_text
                    }}
                >
                </span>
            </div>
        </div>
    )
}

export default Comment