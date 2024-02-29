import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { Event, getEvents } from '../src/Services/ContentfulService';
import MainScreen from '../src/Screens/MainScreen';

interface AppProps {
  events: Array<Event>;
}

function App({
  events = []
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
      <MainScreen events={events} />
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
