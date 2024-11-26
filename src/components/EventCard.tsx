import {useState} from "react";
import {MdArrowForwardIos} from "react-icons/md";

type EventCardProps = {
    picurl: string;
    eventName: string;
    eventDescription: string;
    bookingUrl: string;
};

export default function EventCard(props: EventCardProps) {
    const [isHovered, setIsHovered] = useState<boolean>(false)
    return (
        <div className="p-4 border border-gray-500 justify-self-center w-1/2 h-auto">
            <a  className={"linkToBooking"}
                href={props.bookingUrl}
               onMouseEnter={() => setIsHovered(true)}
               onMouseLeave={() => setIsHovered(false)}
            >
                <div className={"EventPicture  relative"}>
                    <img
                        className="border border-black w-full h-auto"
                        src={props.picurl}
                        alt={"picture of event"}
                    ></img>
                    <div
                        className={`bookingBar absolute top-0 right-0 h-full w-1/12 bg-blue-500 flex items-center justify-center transition-opacity ${
                            isHovered ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        <MdArrowForwardIos size="40" className={""}/>
                    </div>
                </div>
            </a>
            <h2 className={"justify-self-center"}>{props.eventName}</h2>
            <h5 className={"justify-self-center"}>{props.eventDescription}</h5>
        </div>
    )
        ;
}
