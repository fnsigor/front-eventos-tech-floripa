import style from "./eventlist.module.css";
import Image from "next/image";
import { IEvent } from "@/types/IEvent";

const EventList = () => {
    const events: IEvent[] = [
        {
            name: "30 python meetup",
            imageUrl:
                "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores architecto sint, perspiciatis recusandae fugit molestias repudiandae non deleniti mollitia obcaecati voluptatem perferendis possimus excepturi neque asperiores libero, a voluptatibus? Inventore!",
            firstDay: "07/07/2024",
            lastDay: "07/07/2024",
            local: "Neoway, rua patricio farias 452, 3 andar",
            startTime: "19:00",
            subscriptionUrl: "meetup.com",
        },
        {
            name: "30 python meetup",
            imageUrl:
                "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores architecto sint, perspiciatis recusandae fugit molestias repudiandae non deleniti mollitia obcaecati voluptatem perferendis possimus excepturi neque asperiores libero, a voluptatibus? Inventore!",
            firstDay: "07/07/2024",
            lastDay: "07/07/2024",
            local: "Neoway, rua patricio farias 452, 3 andar",
            startTime: "19:00",
            subscriptionUrl: "meetup.com",
        },
        {
            name: "30 python meetup",
            imageUrl:
                "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores architecto sint, perspiciatis recusandae fugit molestias repudiandae non deleniti mollitia obcaecati voluptatem perferendis possimus excepturi neque asperiores libero, a voluptatibus? Inventore!",
            firstDay: "07/07/2024",
            lastDay: "07/07/2024",
            local: "Neoway, rua patricio farias 452, 3 andar",
            startTime: "19:00",
            subscriptionUrl: "meetup.com",
        },
        {
            name: "30 python meetup",
            imageUrl:
                "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores architecto sint, perspiciatis recusandae fugit molestias repudiandae non deleniti mollitia obcaecati voluptatem perferendis possimus excepturi neque asperiores libero, a voluptatibus? Inventore!",
            firstDay: "07/07/2024",
            lastDay: "07/07/2024",
            local: "Neoway, rua patricio farias 452, 3 andar",
            startTime: "19:00",
            subscriptionUrl: "meetup.com",
        },
        {
            name: "30 python meetup",
            imageUrl:
                "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores architecto sint, perspiciatis recusandae fugit molestias repudiandae non deleniti mollitia obcaecati voluptatem perferendis possimus excepturi neque asperiores libero, a voluptatibus? Inventore!",
            firstDay: "07/07/2024",
            lastDay: "07/07/2024",
            local: "Neoway, rua patricio farias 452, 3 andar",
            startTime: "19:00",
            subscriptionUrl: "meetup.com",
        },
    ];

    return (
        <ul className={style.eventList}>
            {events.map((event, i) => (
                <li className={style.eventCard}>
                    <Image
                        src={event.imageUrl}
                        alt={event.name}
                        width={150}
                        height={150}
                    />
                    <main className={style.eventCardMainContent}>
                        <div className="horario">
                            <span>{event.firstDay}</span>-
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
