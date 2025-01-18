/* eslint-disable @next/next/no-img-element */
import { getEvents } from "@/services/events";
import { Suspense } from "react";

const EventList = async () => {
    const response = await getEvents();

    return (
        <ul className="grid grid-cols-1 auto-rows-[minmax(15rem,fit-content)] md:grid-cols-3 md:gap-16 md:auto-rows-[28rem] lg:grid-cols-5">
            {response.events?.map((event, i) => (
                <li
                    key={event.subscriptionUrl}
                    className="bg-gray-dark rounded flex flex-col"
                >
                    <img
                        src={event.imageUrl}
                        alt={event.name}
                        width={150}
                        height={150}
                        className="rounded-tl rounded-tr w-full object-cover"
                    />
                    <main className=" p-4 flex flex-col flex-grow">
                        <div className="flex gap-2 mb-4">
                            <span className="text-lg">
                                {event.formatedFirstDate}
                            </span>
                            -<span className="text-lg">{event.startTime}</span>
                        </div>
                        <div className="flex-grow overflow-hidden line-clamp-4">
                            <h5 className="text-xl mb-1">{event.name}</h5>
                            <p className="hidden md:block md:text-xl">
                                {event.description}
                            </p>
                        </div>
                    </main>
                </li>
            ))}
        </ul>
    );
};

const Home = async () => {
    return (
        <main>
            <Suspense fallback={<div>carregando</div>}>
                <EventList />
            </Suspense>
        </main>
    );
};

export default Home;
