import { useEffect } from "react";
import MeetupList from "../component/meetups/MeetupList";
import { useState } from "react";

const AllMeetupsPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [meetupsData, setMeetupsData] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch(
        'https://react-meetup-mini-default-rtdb.firebaseio.com/meetups.json'
        )
        .then((response) => response.json())
        .then((data) => {
            const meetups = [];

            for(const key in data){
                const meetup = {
                    id: key,
                    ...data[key]
                }
                meetups.push(meetup);
            }
            setMeetupsData(meetups);
            setIsLoading(false);
        })
    },[])


    return (
        <div>
            <h1>All Meetups</h1>
            {isLoading ? <p>Loading...</p> : <MeetupList meetups={meetupsData} />}
        </div>
    )
}

export default AllMeetupsPage;