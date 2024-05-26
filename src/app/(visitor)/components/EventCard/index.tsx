import React from "react";
import style from "./eventcard.module.css";
import Image from "next/image";

interface IEventCardProps {
    name: string,
    imageUrl: string,
    description: string,
}

const EventCard = ({
    description,
    imageUrl,
    name,
}: IEventCardProps) => {
    return <aside className={style.eventCard}>
        <Image src={imageUrl} alt={name} width={150} height={150}/>
        <div className="div">
            <h5>{name}</h5>
            <p>{description}</p>
        </div>
    </aside>;
};

export default EventCard;
