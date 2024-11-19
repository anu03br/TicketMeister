
type EventCardProps = {picurl: string, eventName: string, eventDescription: string };

export default function EventCard (props: EventCardProps) {
    return (
        <div className="p-4 border border-gray-500 justify-self-center w-1/2 h-auto">
            <div className={"EventPicture"}>
                <img
                    className="border border-black w-full h-auto"
                    src={props.picurl}
                    alt={"picture of event"}
                ></img>
            </div>
            <h2 className={"justify-self-center"}>{props.eventName}</h2>
            <h5 className={"justify-self-center"}>{props.eventDescription}</h5>
        </div>
    );
}