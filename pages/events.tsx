import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import EventsScreen from '../src/Screens/EventsScreen';
import { Event, getEvents } from '../src/Services/ContentfulService';

interface AppProps {
  events: Array<Event>;
}

function App({
  events = []
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
      <EventsScreen events={events} />
  );
}

export const getServerSideProps: GetServerSideProps<AppProps> = async () => {
  const events = (await getEvents()) as any;

  return {
    props: {
      events,
    },
  };
};

export default App;
