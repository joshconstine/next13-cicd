import { Comment } from "@prisma/client";
import DeleteButton from "../../../app/restaurants/[restaurantId]/DeleteButton";
import Image from 'next'
import classes from './comment.module.css'

const SingleComment = ({ comment }: { comment: Comment }) => {
    const elementId = `comment-${comment.id}`
    return (<div className={classes.comment}>
        < div className={
            classes.commentAuthor}>
            <div className={classes.commentAuthorImg}>
                {/* <Image width={40} height={40} src="profile-img.jpg" alt="Profile image" /> */}
                img
            </div >
            <div className={classes.commentAuthorName}>{comment.user_id}</div>
        </div >
        <div className={classes.commentText}>{comment.text}</div>
        < div className={
            classes.commentActions}>
            <a href="#">Edit</a>
            <a href="#">Delete</a>
        </div >
    </div >
    );
}

export default SingleComment;