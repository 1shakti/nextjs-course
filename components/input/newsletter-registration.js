import React, { useRef } from "react";
import classes from "./newsletter-registration.module.css";

export default function NewsletterRegistration() {
	const emailInputref = useRef();

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
        .then((response) => response.json())
        .then((data) => console.log(data))
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
