import { db, onValue, ref } from "@/lib/firebase";

export async function getAllEvents() {
	//let snapshots = [];
	// const query = ref(db, "events");
	// onValue(query, (snapshot) => {
	//   const data = snapshot.val();
	//   if (snapshot.exists()) {
	// 	Object.values(data).map((project) => {
	// 		snapshots.push(project);
	// 	});
	//   }
	// })

	const result = await fetch('https://react-meetup-mini-default-rtdb.firebaseio.com/events.json');
	const data = await result.json()

	const events = [];
	for(const key in data) {
		events.push({
			id: key,
			...data[key],
		});
	}

	return events;
}

export async function getFeaturedEvents() {
	const allEvents = await getAllEvents();
	return allEvents.filter((event) => event.isFeatured);
}

export async function getFilteredEvents(dateFilter) {
	const { year, month } = dateFilter;
	const allEvents = await getAllEvents();

	let filteredEvents = allEvents.filter((event) => {
		const eventDate = new Date(event.date);
		return (
			eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
		);
	});

	return filteredEvents;
}

export async function getEventById(id) {
	const allEvents = await getAllEvents();
	return allEvents.find((event) => event.id === id);
}
