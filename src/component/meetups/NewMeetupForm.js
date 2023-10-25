import { useRef } from "react";
import Card from "../ui/Card"
import classes from "./NewMeetupForm.module.css";

const NewMeetup = (props) => {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionputRef = useRef();

    const submitHandler = (e) =>  {
        e.preventDefault();
        const meetupFormData = {
            title: titleInputRef.current.value,
            image: imageInputRef.current.value,
            address: addressInputRef.current.value,
            description: descriptionputRef.current.value
        }

        props.onAddMeetup(meetupFormData);
    }

    return (
        <Card>
            <form onSubmit={submitHandler} className={classes.form} >
                <div className={classes.control}>
                    <label htmlFor="title">Meetup title</label>
                    <input type="text" id="title" required ref={titleInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Meetup Image</label>
                    <input type="url" id="image" required ref={imageInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="address">Meetup Address</label>
                    <input type="text" id="address" required ref={addressInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Meetup Description</label>
                    <textarea id="description" rows="5" required ref={descriptionputRef} />
                </div>    
                <div className={classes.actions}>
                    {props.isLoading ? <p>Submitting...</p> : <button>Add Meetup</button>}
                </div>            
            </form>
        </Card>
    )
}

export default NewMeetup;