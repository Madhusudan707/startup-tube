import React,{useState,useEffect} from 'react'
import styles from '../../../styles/userProfile.module.css'
export const UserProfile = () => {
    const name= localStorage.getItem("username")
//    useEffect(()=>{},[name])
    return (
        <div className={styles.user_profile}>
            <h1>Welcome User {name}</h1>
           
            <p></p>
        </div>
    )
}
