import React from 'react'
import {Playlist,Message} from '../components/index'
import {useUser} from '../contexts'
import styles from '../styles/playlist_page.module.css'
export const PlaylistPage = () => {
    const {login} = useUser()
    return (
        <div className={styles.playlist_page}>
           {login?<Playlist/>:<Message msg="Login to View The Content"/>} 
        </div>
    )
}
