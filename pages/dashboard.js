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
        firstname: "Hamzah",
        lastname: "Sadeeq",
        service: "Budget Setting and Monitoring",
        date: "5/9/23",
        message: [
          "Order Number:\n1",
          "Invoice fee:\n£400",
          "Method of payment:\nBank Transfer ****7697"
        ]
      },
      {
        firstname: "Ali",
        lastname: "Sherva",
        service: "Data Entry",
        date: "6/12/23",
        message: [
          "Order Number:\n2",
          "Invoice fee:\n£150",
          "Method of payment:\nBank Transfer ****7697"
        ]
      },
      {
        firstname: "Sherry",
        lastname: "Sadeeq",
        service: "Creating Invoices",
        date: "7/5/23",
        message: [
          "Order Number:\n3",
          "Invoice fee:\n£300",
          "Method of payment:\nCash"
        ]
      },
      {
        firstname: "Ali",
        lastname: "Affe",
        service: "Budget Setting and Monitoring",
        date: "8/18/23",
        message: [
          "Order Number:\n4",
          "Invoice fee:\n£80",
          "Method of payment:\nCash"
        ]
      },
      {
        firstname: "Sabira",
        lastname: "Umtaz",
        service: "Data Entry",
        date: "6/12/23",
        message: [
          "Order Number:\n5",
          "Invoice fee:\n£200",
          "Method of payment:\nBank Transfer ****7697"
        ]
      }
    ];
    
    
    const pendingList = [
      
      {
        firstname: "Isaq",
        lastname: "Ahmed",
        service: "Data Entry",
        date: "5/9/23",
        message: [
          "Name: Isaq Ahmed",
          "Phone: 07958931921",
          "Email: isaqahmed@gmail.com"
        ]
      },
      {
        firstname: "Karam",
        lastname: "Fagan",
        service: "Budget Setting and Monitoring",
        date: "5/9/23",
        message: [
          "Name: Karam Fagan",
          "Phone: 07958563921",
          "Email: karamfagan@hotmail.co.uk"
        ]
      },
      {
        firstname: "Joe",
        lastname: "Gogarty",
        service: "Budget Setting and Monitoring",
        date: "5/9/23",
        message: [
          "Name: Joe Gogarty",
          "Phone: 07458531921",
          "Email: joegogarty@gmail.com"
        ]
      }
      
    ];
    
    
    // Now, completedList and pendingList contain the desired data.
    
  return (
    <>
      {password && password.toLowerCase() === "alnaif123" ? (
        <div className={styles.dashboard}>
          <Nav></Nav>
          <div className={styles.heading}><h1>Appointment Dashboard</h1></div>
          <div className={styles.nav}>
            <p onClick={() => {
              setCompletedMode(false);
            }} className={completedMode ? styles.Untriggered : styles.triggered}>Pending</p>
            <p onClick={() => {
              setCompletedMode(true);
            }} className={completedMode ? styles.triggered : styles.Untriggered}>Completed</p>
          </div>
          <div className={styles.container}>
            <div className={viewMore === -1 ? styles.viewLess : styles.viewMore}>
              <div onClick={() => setViewMore(-1)} className={styles.closeIcon}><MdClose size={"4rem"} />Additional Details</div>
              {completedMode && viewMore > -1 ? (
                <ul>
                  {completedList[viewMore].message.map((value, index) => (
                    <li key={index}>{value}</li>
                  ))}
                </ul>
              ) : viewMore > -1 ? (
                <ul>
                  {pendingList[viewMore].message.map((value, index) => (
                    <li key={index}>{value}</li>
                  ))}
                </ul>
              ) : null}
            </div>
            {completedMode ? completedList.map((app, index) => (
              <div key={index} className={styles.appointment}>
                <div className={styles.app_left}>
                  <p><span className={styles.name}>{app.firstname + " " + app.lastname}</span><br />{app.service}</p>
                </div>
                <div className={styles.app_right}>
                <button className={styles.button} onClick={()=>{
                    setViewMore(index)
                  }}>View Details</button>
                </div>
              </div>
            )) : pendingList.map((app, index) => (
              <div key={index} className={styles.appointment}>
                <div className={styles.app_left}>
                  <p><span className={styles.name}>{app.firstname + " " + app.lastname}</span><br />{app.service}</p>
                </div>
                <div className={styles.app_right}>
                  <button className={styles.button} onClick={()=>{
                    setViewMore(index)
                  }}>View Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className={styles.passwordScreen}>
          <Nav />
          <div className={styles.heading}><h1>Enter Password To Access Dashboard</h1></div>
          <label id='password'></label>
          <input className={styles.input} htmlFor="password" type='password' onChange={({ target }) => {
            setEntry(target.value);
          }}></input>
          <button className={styles.button} onClick={() => {
            setPassword(entry);
          }}>Confirm</button>
        </div>
      )}
    </>
  );
};

export default Dashboard