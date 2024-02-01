import EventList from "@/components/events/event-list";
import EventsSearch from "@/components/events/event-search";
import { getAllEvents } from "@/helpers/api-utils";
import { useRouter } from "next/router";
import { Fragment } from "react";

const AllEventsPage = ({ events }) => {
	const router = useRouter();

	const searchHandler = (year, month) => {
		const path = `/events/${year}/${month}`;
		router.push(path);
	};

	return (
		<Fragment>
			<EventsSearch onSearch={searchHandler} />
			<EventList items={events} />
		</Fragment>
	);
};

export async function getStaticProps() {
	const events = await getAllEvents();

	return {
		props: {
			events: events,
            revalidate: 60
		},
	};
}

export default AllEventsPage;
