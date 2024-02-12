import EventContent from "@/components/event-detail/event-content";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventSummary from "@/components/event-detail/event-summary";
import Comments from "@/components/input/comments";
import { getEventById, getFeaturedEvents } from "@/helpers/api-utils";
import { Fragment } from "react";

const EventDetailPage = (props) => {
	const event = props.selectedEvent;

	if (!event) {
		return <p>No Event Found.</p>;
	}

	return (
		<Fragment>
			<EventSummary title={event.title} />
			<EventLogistics
				date={event.date}
				address={event.location}
				image={event.image}
				imageAlt={event.title}
			/>
			<EventContent>
				<p>{event?.description}</p>
			</EventContent>
			<Comments eventId={event.id} />
		</Fragment>
	);
};

export async function getStaticProps(context) {
	const eventId = context.params.eventId;
	const event = await getEventById(eventId);

    if (!event) {
        return {
          notFound: true,
        };
      }
    

	return {
		props: {
			selectedEvent: event,
            revalidate: 30,
		},
	};
}

export async function getStaticPaths() {
	const events = await getFeaturedEvents();
    const paths = events?.map((event) => ({ params: { eventId: event.id } }));

    // fallback: 'blocking' it will give fully loaded data,
    // fallback: true will go to page and can show loading spinner,

	return {
		paths: paths,
		fallback: 'blocking',
	};
}

export default EventDetailPage;
