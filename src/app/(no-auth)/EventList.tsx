/* eslint-disable @next/next/no-img-element */
import { getEvents } from "@/services/events";
import { Skeleton } from "@/components/ui/skeleton";
import { ClockIcon, CalendarIcon } from "@radix-ui/react-icons";

import Image from "next/image";

const FallbackCard = () => {
    return (
        <li>
            <Skeleton className="h-32 rounded-xl mb-4 w-full" />
            <div className="space-y-2">
                <Skeleton className="h-4" />
                <Skeleton className="h-4 w-[70%]" />
            </div>
        </li>
    );
};

const Fallback = () => {
    return (
        <ul className="grid gap-y-16 grid-cols-[100%] auto-rows-[minmax(15rem,fit-content)] 600:grid-cols-2 600:gap-x-16 600:auto-rows-min 950:grid-cols-3 xl:grid-cols-5">
            <FallbackCard />
            <FallbackCard />
            <FallbackCard />
            <FallbackCard />
            <FallbackCard />
            <FallbackCard />
            <FallbackCard />
        </ul>
    );
};

const EventList = async () => {
    const response = await getEvents();

    return (
        <ul className="grid gap-y-16 grid-cols-[100%] auto-rows-[minmax(15rem,fit-content)] 600:grid-cols-2 600:gap-x-16 600:auto-rows-min 950:grid-cols-3 xl:grid-cols-5">
            {response.events?.map((event, i) => (
                <li
                    key={event.subscriptionUrl}
                    className="bg-gray-dark rounded flex flex-col"
                >
                    <img
                        src={event.imageUrl}
                        alt={event.name}
                        className="rounded-tl rounded-tr w-full object-cover h-36"
                    />
                    <main className="p-4 flex flex-col flex-grow">
                        <div className="flex gap-2 mb-4 600:mb-2 justify-between flex-wrap">
                            <div className="flex gap-1 items-center">
                                <CalendarIcon color="white" />
                                <span className="text-sm">
                                    {event.formatedFirstDate}
                                </span>
                            </div>
                            <div className="flex gap-1 items-center">
                                <ClockIcon color="white" />
                                <span className="text-sm">
                                    {event.startTime}
                                </span>
                            </div>
                        </div>
                        <div className="flex-grow overflow-hidden line-clamp-4">
                            <h5 className="text-base mb-1 line-clamp-2 600:text-xl 600:mb-2">
                                {event.name}
                            </h5>
                            <p className="hidden 600:block 600:text-base">
                                {event.description}
                            </p>
                        </div>
                    </main>
                </li>
            ))}
        </ul>
    );
};

EventList.Fallback = Fallback;

export { EventList };
