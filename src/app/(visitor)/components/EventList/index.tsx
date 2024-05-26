import React from "react";
import style from "./eventlist.module.css";
import EventCard from "../EventCard";

const EventList = () => {
    const events = [
        {
            name: "python meetup",
            imageUrl: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores architecto sint, perspiciatis recusandae fugit molestias repudiandae non deleniti mollitia obcaecati voluptatem perferendis possimus excepturi neque asperiores libero, a voluptatibus? Inventore!',
        },
        {
            name: "python meetup",
            imageUrl: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores architecto sint, perspiciatis recusandae fugit molestias repudiandae non deleniti mollitia obcaecati voluptatem perferendis possimus excepturi neque asperiores libero, a voluptatibus? Inventore!',
        },
        {
            name: "python meetup",
            imageUrl: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores architecto sint, perspiciatis recusandae fugit molestias repudiandae non deleniti mollitia obcaecati voluptatem perferendis possimus excepturi neque asperiores libero, a voluptatibus? Inventore!',
        },
        {
            name: "python meetup",
            imageUrl: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores architecto sint, perspiciatis recusandae fugit molestias repudiandae non deleniti mollitia obcaecati voluptatem perferendis possimus excepturi neque asperiores libero, a voluptatibus? Inventore!',
        },
        {
            name: "python meetup",
            imageUrl: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores architecto sint, perspiciatis recusandae fugit molestias repudiandae non deleniti mollitia obcaecati voluptatem perferendis possimus excepturi neque asperiores libero, a voluptatibus? Inventore!',
        },
        {
            name: "python meetup",
            imageUrl: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores architecto sint, perspiciatis recusandae fugit molestias repudiandae non deleniti mollitia obcaecati voluptatem perferendis possimus excepturi neque asperiores libero, a voluptatibus? Inventore!',
        },
    ];

    return (
        <ul className={style.eventList}>
            {events.map((event, i) => (
                <EventCard
                    key={event.name + i}
                    imageUrl={event.imageUrl}
                    name={event.name}
                    description={event.description}
                />
            ))}
        </ul>
    );
};

export default React.memo(EventList);
