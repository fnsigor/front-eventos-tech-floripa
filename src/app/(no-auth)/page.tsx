import { Suspense } from "react";
import { EventList } from "./EventList";


const Home = () => {
    return (
        <main>
            <Suspense fallback={<EventList.Fallback/>}>
                <EventList/>
            </Suspense>
        </main>
    );
};

export default Home;
