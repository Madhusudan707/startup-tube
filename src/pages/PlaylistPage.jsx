import React from 'react'
import {Playlist} from '../components/index'
import styles from '../styles/playlist_page.module.css'
export const PlaylistPage = () => {
    return (
        <div className={styles.playlist_page}>
            <Playlist/>
        </div>
    )
}
