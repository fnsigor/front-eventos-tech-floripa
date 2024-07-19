import style from "./eventlist.module.css";
import Image from "next/image";
import { IEvent } from "@/types/IEvent";

interface IProps {
    events: IEvent[]
}

const EventList = ({events}: IProps) => {
    

    return (
        <ul className={style.eventList}>
            {events.map((event, i) => (
                <li className={style.eventCard}>
                    <img
                        src={event.imageUrl}
                        alt={event.name}
                        width={150}
                        height={150}
                    />
                    <main className={style.eventCardMainContent}>
                        <div className="horario">
                            <span>{event.formatedFirstDate}</span>-
                            <span>{event.startTime}</span>
                        </div>
                        <div className="name-desc">
                            <h5>{event.name}</h5>
                            <p>{event.description}</p>
                        </div>
                    </main>
                </li>
            ))}
        </ul>
    );
};

export default EventList
