import { useEvents } from './hooks/useEvents';
import EventCard from './components/EventCard';

const App = () => {

  const { events, isLoading, error } = useEvents()

  return (
    <section className="h-screen max-w-3xl mx-auto p-6 flex flex-col gap-6">

      <ul className="flex flex-col justify-center  items-center gap-6">
        {
          events.map(e =>
            <EventCard
              _id={e._id}
              key={e._id}
              title={e.title}
              date={e.date}
              description={e.description}
              isUserRsvped={e.isUserRsvped} />)
        }
      </ul>

      {isLoading && <div className='text-center'>Loading...</div>}
      {
        error && <div className="text-destructive">{error}</div>
      }
    </section>

  );
};

export default App;

