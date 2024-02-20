import { useContext, useEffect, useState } from "react";
import CommentList from "./comment-list";
import NewComment from "./new-comment";
import classes from "./comments.module.css";
import NotificationContext from "@/context-api/notification-context";

export default function Comments(props){
    const [showComments, setShowComments] = useState(false);
    const [comments, setComments] = useState([]);
    const { eventId } = props;
    const { showNotification } = useContext(NotificationContext);

    useEffect(() => {
        fetch(`/api/comments/${eventId}`)
        .then((response) => response.json())
        .then((data) => setComments(data?.comments))
    },[eventId])

    const toggleCommentsHandler = () => {
        setShowComments(prev => !prev)
    }

    const addCommentsHandler = (commentData) => {

        showNotification({
            title: 'Sending comment...',
            message: 'Your comment is currently being stored into a database.',
            status: 'pending',
          });
      

        fetch(`/api/comments/${eventId}`,{
            method: 'POST',
            body: JSON.stringify(commentData),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            if(response.ok){
                return response.json();
            }
            return response.json().then((data) => {
                throw new Error(data.message || 'Something went wrong!');
            })
        })
        .then((data) => {
            showNotification({
                title: 'Success!',
                message: 'Your comment was saved!',
                status: 'success',
            })
        })
        .catch((error) => {
            showNotification({
                title: 'Error!',
                message: error.message || 'Something went wrong!',
                status: 'error',
            })
        })
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