import MeetupList from "../component/meetups/MeetupList";
import allMeetupData from "../constant/allmeetups.json";

const AllMeetupsPage = () => {
    return (
        <div>
            <h1>All Meetups</h1>
            <MeetupList meetups={allMeetupData} />
        </div>
    )
}

export default AllMeetupsPage;