import Nav from '@/components/Nav'
import {useState} from 'react'
import styles from '../styles/dashboard.module.css'
import {MdClose} from 'react-icons/md'

const Dashboard = () => {
    const [password,setPassword] = useState('')
    const [entry, setEntry] = useState("")
    const [completedMode, setCompletedMode] = useState(false)
    const [viewMore, setViewMore] = useState(-1)

    const completedList = [
        { 
            firstname: "Sarah", 
            lastname: "J.", 
            service: "Budget Setting and Monitoring", 
            date: "5/9/23", 
            message: "I would also appreciate your help in preparing invoices for my clients."
          },
          { 
            firstname: "Omar", 
            lastname: "Ali", 
            service: "Data Entry", 
            date: "6/12/23", 
            message: "Regarding the data entry task, can we get started ASAP?"
          },
          { 
            firstname: "Emil", 
            lastname: "Schmidt", 
            service: "Creating Invoices", 
            date: "7/5/23", 
            message: "Can you assist me with creating invoices for our upcoming projects?"
          },
          { 
            firstname: "K", 
            lastname: "Grant", 
            service: "Budget Setting and Monitoring", 
            date: "8/18/23", 
            message: "I need assistance with budget monitoring for our quarterly report."
          },
          { 
            firstname: "Jessica", 
            lastname: "Okurrafor", 
            service: "Data Entry", 
            date: "6/12/23", 
            message: "Regarding the data entry task, when can we get started?"
          }]
    const pendingList = [{ 
        firstname: "Abdulla", 
        lastname: "Muhammad", 
        service: "Budget Setting and Monitoring", 
        date: "5/10/23", 
        message: "I would also appreciate your help in preparing invoices for my clients."
      },
      ,]
  return (
    <>
    {
        password&&password.toLowerCase()==="alnaif123"?<div className={styles.dashboard}>
            <Nav></Nav>
            <div className={styles.heading}><h1>Appointment Dashboard</h1></div>
            <div className={styles.nav}>
                <p onClick={()=>{
                    setCompletedMode(false)
                }} className={completedMode?styles.Untriggered:styles.triggered}>Pending</p><p onClick={()=>{
                    setCompletedMode(true)
                }} className={completedMode?styles.triggered:styles.Untriggered}>Completed</p>
                </div>
                <div className={styles.container}>
                    <div className={viewMore===-1?styles.viewLess:styles.viewMore}>
                       <div onClick={()=>setViewMore(-1)} className={styles.closeIcon}><MdClose size={"4rem"}/>Additional Details</div>
                            {completedMode&&viewMore>-1?Object.values(completedList[viewMore]).map((value,index)=><li key={index}>{value}</li>):viewMore>-1&&Object.values(pendingList[viewMore]).map((value,index)=><li key={index}>{value}</li>)}
                       
                    </div>
                    {
                        completedMode?completedList.map((app,index)=>(
                        <div key={index} className={styles.appointment}>
                            <div className={styles.app_left}><p><span className={styles.name}>{app.firstname+" "+app.lastname}</span><br/>{app.service}</p></div>
                            <div className={styles.app_right}>
                                <button onClick={()=>{
                                    setViewMore(index)
                                }} className={styles.button}> View Details</button>
                            </div>
                        </div>
                        )):pendingList.map((app,index)=>( <div key={index} className={styles.appointment}>
                            <div className={styles.app_left}><p><span className={styles.name}>{app.firstname+" "+app.lastname}</span><br/>{app.service}</p></div>
                            <div className={styles.app_right}>
                                <button className={styles.button} onClick={()=>{
                                    setViewMore(index)
                                }}> View Details</button>
                            </div>
                        </div>))
                    }
                </div>
        </div>:<div className={styles.passwordScreen}>
            <Nav/>
            <div className={styles.heading}><h1>Enter Password To Access Dashboard</h1></div>
            <label id='password'></label>
            <input className={styles.input} htmlFor="password" type='password' onChange={({target})=>{
                setEntry(target.value)
            }}></input>
            <button className={styles.button} onClick={()=>{
                setPassword(entry)
            }}>Confirm</button>
        </div>
    }
    </>
  )
}

export default Dashboard