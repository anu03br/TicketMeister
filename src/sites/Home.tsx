import Searchbar from "../components/Searchbar.tsx";
import Titlebar from "../components/Titlebar.tsx";
import EventCard from "../components/EventCard.tsx";
import {Event} from "../components/Event";
import SplitURL from "../components/SplitURL.tsx";
import {useState} from "react";

export default function Home() {
    const [events, setEvents] = useState<Event[]>([]);

    const handleSearchResults = (data: Event[]) => {
        setEvents(data);
    };

    return (
        <div>
            <Searchbar onSearch={handleSearchResults}/>
            <Titlebar text="Our Events"/>
            <div className="">
                {events.length > 0 ? (
                    events.map((event, index) => (
                        <EventCard
                            key={index} // Ensure a unique key for each element
                            picurl={event.images[0]?.url || "https://via.placeholder.com/150"}
                            eventName={event.name || "No event name available"}
                            eventDescription={
                                SplitURL(event._embedded.venues[0]?.url) || "No venue available"
                            }
                        />
                    ))
                ) : (
                    <p>Nothing found</p>
                )}

                <EventCard
                    picurl={
                        "https://cdn.apollo.audio/one/media/5d8e/06c9/4a30/99fa/7124/31db/tom-walker.jpg?quality=80&format=jpg"
                    }
                    eventName={"event"}
                    eventDescription={"Event description223"}
                />
            </div>
        </div>
    );
}
