import React from 'react'
import {UserProfile} from '../components/index'
import styles from '../styles/userProfilepage.module.css'
export const UserProfilePage = () => {
    return (
        <div className={styles.profile_page}>
            <UserProfile/>
        </div>
    )
}
