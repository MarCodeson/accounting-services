import ContactForm from '@/components/Contact'
import Nav from '@/components/Nav'
import styles from '../styles/booking.module.css'

const Booking = () => {
  return (
    <div className={styles.page}>
    <Nav></Nav>
    <main className={styles.booking}>
        <header className={styles.header}>
        <h1>Schedule a Consultation</h1>
        </header>
        <section className={styles.form}>
            <h2 className={styles.subheader}>Explore Your Financial Solutions -  Reserve Your Spot Today!</h2>
            <ContactForm consultation={true}/>
        </section>
    </main>
    </div>
  )
}

export default Booking