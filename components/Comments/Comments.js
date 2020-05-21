import Comment from './Comment/Comment'

const Comments = ({ comments }) => {
    return (
        comments.map((comment, index) =>
            <Comment comment={comment} key={index} />
        )
    )
}

export default Comments