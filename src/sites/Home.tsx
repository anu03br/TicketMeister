import Searchbar from "../components/Searchbar.tsx";
import Titlebar from "../components/Titlebar.tsx";
import EventCard from "../components/EventCard.tsx";
import { Event } from "../components/Event";
import { useState } from "react";

export default function Home() {
  const [events, setEvents] = useState<Event[]>([]);
  const [searchExecuted, setSearchExecuted] = useState(false);

  const handleSearchResults = (data: Event[]) => {
    setSearchExecuted(true);
    setEvents(data);
  };

  return (
    <div className={"flex-grow"}>
      <Searchbar onSearch={handleSearchResults} />
      <Titlebar text="Find events near you" />
      <div className="">
        {searchExecuted && events.length === 0 && (
          <p className={"text-xl justify-self-center"}>No events found</p>
        )}
        {events.length > 0 &&
          events.map((event, index) => (
            <EventCard
              key={index} // Ensure a unique key for each element
              picurl={event.images[0]?.url || "https://via.placeholder.com/150"}
              eventName={event.name || "No event name available"}
              eventDescription={
                  event._embedded?.venues?.[0]
                      ? event._embedded.venues[0].name
                          ? `${event._embedded.venues[0].name}, ${event._embedded.venues[0].city?.name || "Unknown City"}`
                          : event._embedded.venues[0].city?.name || "Unknown City"
                      : "No venue available"
              }
            />
          ))}
      </div>
    </div>
  );
}
