
type EventCardProps = {picurl: string, eventName: string, eventDescription: string };

export default function EventCard (props: EventCardProps) {
    return (
        <div className="p-4 border border-gray-500 justify-self-center">
            <div className={"EventPicture"}>
                <img
                    className="border border-black"
                    src={props.picurl}
                    alt={"picture of event"}
                ></img>
            </div>
            <h2 className={"justify-self-center"}>{props.eventName}</h2>
            <h5 className={"justify-self-center"}>{props.eventDescription}</h5>
        </div>
    );
}

// export default function EventCard (props: EventCardProps) {
//     return (
//         <div className="p-4 border border-gray-500 justify-self-center">
//             <div className={"EventPicture"}>
//                 <img
//                     className="border border-black"
//                     src={"https://cdn.apollo.audio/one/media/5d8e/06c9/4a30/99fa/7124/31db/tom-walker.jpg?quality=80&format=jpg"}
//                     alt={"picture of event"}
//                 ></img>
//             </div>
//             <h2 className={"justify-self-center"}>EventName</h2>
//             <h5 className={"justify-self-center"}>Event description</h5>
//         </div>
//     );
// }