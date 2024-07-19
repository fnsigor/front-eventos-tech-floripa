import EventList from "./components/EventList";
import styles from "./home.module.css";
import { getEvents } from "./services";



const Home = async () => {

    const response = await getEvents();

    return (
        <main className={styles.home}>
            <EventList events={response.events} />
        </main>
    );
};

export default Home;
