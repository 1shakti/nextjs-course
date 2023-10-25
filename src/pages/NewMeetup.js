import { useState } from "react";
import NewMeetup from "../component/meetups/NewMeetupForm";
import { useNavigate } from "react-router-dom";

const NewMeetupPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate(); 
    const addMeetupHandler = (arg) => {
    setIsLoading(true);
       fetch('https://react-meetup-mini-default-rtdb.firebaseio.com/meetups.json',
        {
            method: "POST",
            body: JSON.stringify(arg),
            headers:{
                'Content-Type': 'application/json'
            }
        }
        ).then((response) => {
            setIsLoading(false);
            response.json();
            navigate('/',{replace:true});
        })
    }

    return (
        <div>
            <h1>New Meetup</h1>
            <NewMeetup onAddMeetup={addMeetupHandler} isLoading={isLoading} />
        </div>
    )
}

export default NewMeetupPage;