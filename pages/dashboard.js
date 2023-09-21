import Nav from '@/components/Nav'
import {useState} from 'react'
import styles from '../styles/dashboard.module.css'
import {MdClose} from 'react-icons/md'
import { fetchPendingList, fetchOrderList } from '../sanity/sanityApi';
import { useEffect } from 'react';

const Dashboard = ({meetingList,orderList}) => {
    const [password,setPassword] = useState('')
    const [entry, setEntry] = useState("")
    const [completedMode, setCompletedMode] = useState(false)
    const [viewMore, setViewMore] = useState(-1)
    const [completedList,setCompletedList]= useState([])
    const [pendingList, setPendingList] = useState([])

    useEffect(()=>{
      orderList&&setCompletedList(orderList)
      meetingList&&setPendingList(meetingList)
      
    },[meetingList,orderList])
    
    
    
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



export async function getServerSideProps() {
  const pendingList = await fetchPendingList();
  const orderList = await fetchOrderList();

  return {
    props: {
      meetingList:pendingList,
      orderList,
    },
  };
}






export default Dashboard