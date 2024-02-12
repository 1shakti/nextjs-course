import { useEffect, useState } from "react";
import CommentList from "./comment-list";
import NewComment from "./new-comment";
import classes from "./comments.module.css";

export default function Comments(props){
    const [showComments, setShowComments] = useState(false);
    const [comments, setComments] = useState([]);
    const { eventId } = props;

    useEffect(() => {
        fetch(`/api/comments/${eventId}`)
        .then((response) => response.json())
        .then((data) => setComments(data?.comments))
    },[eventId])

    const toggleCommentsHandler = () => {
        setShowComments(prev => !prev)
    }

    const addCommentsHandler = (commentData) => {
        fetch(`/api/comments/${eventId}`,{
            method: 'POST',
            body: JSON.stringify(commentData),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then((response) => response.json())
        .then((data) => console.log(data))
    }

    return(
        <section className={classes.comments}>
            <button onClick={toggleCommentsHandler}>
            { showComments ? 'Hide' : 'Show' } comments
            </button>
            {showComments && <NewComment onAddComments={addCommentsHandler} />}
            {showComments && <CommentList items={comments} />}
        </section>
    )
}