import Searchbar from "../components/Searchbar.tsx";
import Titlebar from "../components/Titlebar.tsx";
import EventCard from "../components/EventCard.tsx";

export default function Home() {
    return (
        <div>
            <Searchbar/>
            <Titlebar text="Our Events"/>
            <div className="">
                <EventCard
                    picurl={"https://cdn.apollo.audio/one/media/5d8e/06c9/4a30/99fa/7124/31db/tom-walker.jpg?quality=80&format=jpg"}
                    eventName={"event"}
                    eventDescription={"Event description"}
                />
                <EventCard
                    picurl={"https://cdn.apollo.audio/one/media/5d8e/06c9/4a30/99fa/7124/31db/tom-walker.jpg?quality=80&format=jpg"}
                    eventName={"event"}
                    eventDescription={"Event description223"}
                />
            </div>
        </div>
    )
}