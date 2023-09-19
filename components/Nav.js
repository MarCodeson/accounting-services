import styles from '../styles/Nav.module.css'
import Link from 'next/link'
import {MdMenu,MdClose} from 'react-icons/md'
import {useState} from 'react'
const Nav = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <header className={styles.navbar}>
        <div className={styles.logoSection}>
            <p><Link className={`remove-hyperlink ${styles.link}` }href={'/dashboard'}>Alnaif</Link></p>
        </div>
        <div className={styles.navSection}>
            <p><Link className={`remove-hyperlink ${styles.link}` }href={'/#Home'}>Home</Link></p>
            <p><Link className={`remove-hyperlink ${styles.link}` }href={'/#Services'}>Services</Link></p>
            <p><Link className={`remove-hyperlink ${styles.link}`} href={'/#About'}>About</Link></p>
            <p><Link className={`remove-hyperlink ${styles.link}` }href={'/#Testimonials'}>Testimonials</Link></p>
            <p><Link className={`remove-hyperlink ${styles.link}`} href={'/#Contact'}>Contact</Link></p>
        </div>
        <div className={styles.ctaSection}>
            <button><Link className='remove-hyperlink white' href={"/booking"}>Book Now</Link></button>
            <div className={styles.menu} onClick={()=>{
              setToggle(!toggle)
            }}>{toggle?<MdClose size={"2rem"}/>:<MdMenu size={"2rem"}/>}
            <div className={toggle?styles.dropdown:styles.hidden}>
              <div><Link href={'/#Home'} className={`remove-hyperlink ${styles.link}`}>Home</Link></div>
              <div><Link className={`remove-hyperlink ${styles.link}`} href={"/#Services"}>Services</Link></div>
              <div><Link href={'/#About'} className={`remove-hyperlink ${styles.link}`}>About</Link></div>
              <div><Link className={`remove-hyperlink ${styles.link}`} href={"/#Testimonials"}>Testimonials</Link></div>
              <div><Link className={`remove-hyperlink ${styles.link}`} href={"/#Contact"}>Contact</Link></div>
            </div>
            </div>
        </div>
    </header>
  )
}

export default Nav