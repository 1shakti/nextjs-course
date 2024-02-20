import React, { useContext, useRef, useState } from "react";
import classes from "./new-comment.module.css";
import NotificationContext from "@/context-api/notification-context";

export default function NewComment(props) {

	const [isInvalid, setIsInvalid] = useState(false);
	const { notification } = useContext(NotificationContext);

	const emailInputRef = useRef();
	const nameInputRef = useRef();
	const commentInputref = useRef();

	const sendCommentHandler = (event) => {
		event.preventDefault();
		
		const enteredEmail = emailInputRef.current.value;
		const enteredName = nameInputRef.current.value;
		const enteredComment = commentInputref.current.value;

		if(!enteredEmail || enteredEmail.trim() === '' || !enteredName || enteredName.trim() === '' || !enteredComment || enteredComment.trim() === ''){
			setIsInvalid(true);
			return;
		}

		props.onAddComments({
			email:enteredEmail,
			name: enteredName,
			text: enteredComment
		})

	}

	return (
		<form className={classes.form} onSubmit={sendCommentHandler}>
			<div className={classes.row}>
				<div className={classes.control}>
					<label htmlFor="email">Your Email</label>
					<input type="email" name="email" id="email" ref={emailInputRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor="name">Your Name</label>
					<input type="text" name="name" id="name" ref={nameInputRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor="comment">Your Comment</label>
					<textarea
						id="comment"
						name="comment"
						rows="5"
						ref={commentInputref}
					></textarea>
				</div>
			</div>
			{isInvalid && <p>Please enter a valid email address and comment!</p>}
			{notification?.status === "pending" ? "Loading..." : <button className={classes.btn}>Submit</button>}
		</form>
	);
}
