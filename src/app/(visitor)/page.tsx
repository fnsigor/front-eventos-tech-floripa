import React from 'react'
import EventList from './components/EventList'
import styles from './home.module.css'

const Home = () => {
  return (
    <main className={styles.home}>
        <section>
            <header className="section-header">
                <h2>Últimos eventos</h2>
            </header>
            <main>
                <EventList/>
            </main>
        </section>
    </main>
  )
}

export default Home