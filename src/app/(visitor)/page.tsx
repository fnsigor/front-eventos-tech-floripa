import EventList from "./components/EventList";
import styles from "./home.module.css";

const Home = () => {
    return (
        <main className={styles.home}>
            <EventList />
        </main>
    );
};

export default Home;
