import React, { useContext, useRef } from "react";
import classes from "./newsletter-registration.module.css";
import NotificationContext from "@/context-api/notification-context";

export default function NewsletterRegistration() {
	const emailInputref = useRef();
	const { showNotification } = useContext(NotificationContext);

	const onSubmitRegisterHandler = (event) => {
		event.preventDefault();

		const enteredEmail = emailInputref.current.value;

		const reqBody = { email: enteredEmail };

		fetch("/api/newsletter",{
            method:'POST',
            body: JSON.stringify(reqBody),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
			if(response.ok){
				return response.json();
			}
			return response.json().then((data) => {
				throw new Error(data.message || 'Something went wrong!')
			})
		})
        .then((data) => {
			showNotification({
				title: 'Success!',
				message: 'Successfully registered for newsletter!',
				status: 'success',
			  })
		})
		.catch((error) => {
			showNotification({
				title:'Error!',
				message: error.message || 'Something went wrong!',
				status:'error',
			})
		})
	};

	return (
		<div className={classes.newsletter}>
			<h2>Sign up to stay updated!</h2>
			<form onSubmit={onSubmitRegisterHandler}>
				<div className={classes.control}>
					<input type="email" name="email" id="email" ref={emailInputref} />
					<button>Register</button>
				</div>
			</form>
		</div>
	);
}
