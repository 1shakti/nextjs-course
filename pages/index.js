import EventList from '@/components/events/event-list';
import { getFeaturedEvents } from '@/helpers/api-utils';

export default function Home(props) {
  const { events:featuredEvents } = props;
  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  )
}

export async function getStaticProps(){
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
      revalidate: 1800
    }
  }
}