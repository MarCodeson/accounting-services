import Head from 'next/head'


import styles from '@/styles/Home.module.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import {MdArrowForward, MdStar, MdArrowBack,MdOutlineMailOutline,MdOutlinePhoneIphone, MdMenu} from 'react-icons/md'


import {useState} from 'react'
import ContactForm from '@/components/Contact'
export default function Home() {

  const [slideNum, setSlideNum] = useState(0)


  const testimonials = [
    {
      name: "Ali sherva",
      comment: "Ahmad is very easy to work with. He was recommended to us by a family member. He dealt with our budgeting and was able to save us an abundance of money, our previous Accountant had missed some obvious things which Ahmad picked up on immediately, amended and resubmitted our budget, saving us a lot of money. He thinks of the little things which others may miss as you have his complete attention and professional service.",
      img: "/kenny.jpg"
    },
    {
      name: "Hamzah sadeeq",
      comment: "Ahmad has been a vital help in getting my first restaurant off the ground. He's great under pressure and always finds good solutions for any problems we face. I can rely to call him at anytime to solve a problem.",
      img: "/emil.jpg"
    },
  
  ];


  
  return (
    <>
      <Head>
        <title>Alnaif Accounting Services</title>
        <meta name="description" content="Accounting services by Alnaif" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      
      <Nav/>
      <main className={`${styles.main} `}>
        <section id='Home' className={styles.hero}>
      <div className={styles.heroImage}><Image className='image' src='/hero-image.jpeg' width={1300} height={700}
      alt='accountant dashboard'
      /></div>
      <div className={styles.heroTitle}>
      <h1>Delivering Clarity With Finance Solutions <br/>for Individuals and Small Businesses.</h1>
      <Link className={`${styles.cta} remove-hyperlink`} href={'/booking'}>Book Now</Link>
      </div>
      
        </section>
        <section id='Services' className={styles.services}>
          <div className={styles.container}>
            <div className={styles.subTitle}><h2>Main Services</h2></div>
            <div className={styles.serviceIcons}>
              <div className={styles.iconContainer}>
                <p>Budget Setting & Monitoring</p>
                <div><Image 
                
                className='image'
                alt='service 1' width={200} height={200} src={'/1.png'}/></div>
              </div>
              <div className={styles.iconContainer} >
                <p>Creating Invoices</p>
                <div><Image 
                alt='service 2'
                className='image' width={200} height={200} src={'/2.png'}/></div>
              </div>
              <div className={styles.iconContainer}>
                <p>Data Entry</p>
                <div><Image 
                alt='service 3'
                className='image' width={200} height={200} src={'/3.png'}/></div>
              </div>
            </div>

            <div><Link href={'/booking'} className={`remove-hyperlink ${styles.hireMe}`}>Hire Me <MdArrowForward/></Link></div>
          </div>
        </section>
        <section id='About' className={styles.about}>
          <div className={styles.aboutMe}>
            <h2>About Me</h2>
            <p>My name is Ahmad al naif, and I hold a First-Class Honours degree in Accounting and Finance from the University of Essex. </p>
            <ul>
              <li>With a year of experience, I specialise in helping individuals and small businesses optimise their financial operations. My areas of expertise include automating data entry, reconciling bank statements, generating invoices, and setting up as well as monitoring budgets. </li>
              <li>I firmly believe that every business, regardless of size, deserves high-quality financial management.</li>
              <li>What sets my services apart is the personalised attention I provide. Unlike larger accountancy firms that juggle hundreds of clients, my smaller scale allows me to focus on quality over quantity.</li>
              <li> I offer immediate and direct communication, so if you have a question or require assistance at any time of the day, I am just a phone call away. My primary objective is to contribute positively to your business; I don&apos;t engage in activities that don&apos;t serve this purpose.</li>
              <li>Choose to work with me, and you&apos;ll not only receive exceptional and dedicated financial services but also enjoy the benefit of immediate, personalised customer support.</li>
            </ul>
              <button className={`${styles.aboutCta}`}><Link className='remove-hyperlink' href={"/#Contact"}>Contact Me</Link></button>
          </div>
        </section>
        <section id='Testimonials' className={styles.testimonials}>
          <h2>
            Testimonials
          </h2>
          
          <div className={styles.testimonialsContainer}>
            <div className={styles.stars}><MdStar color='gold'/><MdStar color='gold'/><MdStar color='gold'/><MdStar color='gold'/><MdStar color='gold'/></div>
            <p>
            Client Success Stories: My Financial Expertise, Your Peace of Mind.
          </p>
            <div className={styles.testimonies}>
           {
            testimonials.map((testimony,index)=><div className={slideNum===index?"slidein":"slideout"} key={index}>
              <div className={styles.testimony}>
              
                <div >
                 <p className={styles.name}>{testimony.name}</p>
                 <p className={styles.comment}>{testimony.comment}</p>
                </div>
              </div>
            </div>)
           }
      
      
      
      
   
              
            </div>
            <div  className={styles.arrowsContainer}>
              <div id='back-arrow' onClick={()=>{
               slideNum>0? setSlideNum(slideNum-1): setSlideNum(testimonials.length-1)
              }}><MdArrowBack/></div> <div id='forward-arrow' onClick={()=>{
                slideNum<testimonials.length-1? setSlideNum(slideNum+1): setSlideNum(0)
              }}><MdArrowForward/></div>
            </div>
          </div>
        </section>
        <section id='Contact' className={styles.contactForm}>
          <h2>Contact Me</h2>
          <div className={styles.formAndDetails}>
          <div className={styles.verticalDetails} >
            <div><MdOutlineMailOutline/><p><strong>Email</strong></p><p>jamalkgt@hotmail.com </p></div>
          <div><MdOutlinePhoneIphone/><p><strong>Phone</strong></p><p>07788691767
</p></div>
          </div>
          <ContactForm/>
          </div>
        </section>

       
      </main>
      <Footer/>
    </>
  )
}
