import EventList from "@/components/events/event-list";
import EventsSearch from "@/components/events/event-search";
import { getAllEvents } from "@/dummy-data";
import { useRouter } from "next/router";
import { Fragment } from "react";

const AllEventsPage = () => {
    const router = useRouter();    
    const events =  getAllEvents();

    const searchHandler = (year, month) => {
        const path = `/events/${year}/${month}`
        router.push(path);
    }

    return (
        <Fragment>
            <EventsSearch onSearch={searchHandler} />
            <EventList items={events} />
        </Fragment>
    )
} 

export default AllEventsPage;