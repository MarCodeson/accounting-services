import styles from '../styles/Footer.module.css'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={styles.footerbar}>
        <div className={styles.navbar}>
          <p><Link className='remove-hyperlink white' href={'/#Home'}>Home</Link></p>
          <p><Link className='remove-hyperlink white'  href={'/#Services'}>Services</Link></p>
          <p><Link className='remove-hyperlink white' href={'/#About'}>About</Link></p>
          <p><Link className='remove-hyperlink white' href={'/#Testimonials'}>Testimonials</Link></p><p><Link className='remove-hyperlink white' href={'/#Contact'}>Contact</Link></p></div>
        <div className='divider-center'></div>
        <div className={styles.companybar}><p><Link href={'/#'}></Link>© 2023 Alnaif Accounting All rights reserved.</p></div>
    </footer>
  )
}

export default Footer