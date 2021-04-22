import React from 'react'
import styles from '../../../styles/navbar.module.css'
import { Link } from "react-router-dom";
import {HOME,LIBRARY,PLAYLIST,HISTORY} from '../../../routing/paths'
import {Contact} from '../../index'
import {usePathName} from '../../../hooks/index'
export const NavBar = () => {
    const {pathUrl} = usePathName()
    return (
        <div className={styles.navbar}>
            <ul className={styles.nav_ul}>
                <li><Link to={HOME} className={pathUrl==="/"?styles.active:null}>HOME</Link></li>
                <li><Link  to={LIBRARY} className={pathUrl==="/library"?styles.active:null}>LIBRARY</Link></li>
                <li><Link  to={PLAYLIST} className={pathUrl==="/playlist"?styles.active:null}>PLAYLIST</Link></li>
                <li><Link  to={HISTORY} className={pathUrl==="/history"?styles.active:null}>HISTORY</Link></li>
                <li><a href="#!">LIKE VIDEOS</a></li>
                {/* <li><a href="#!">WATCH LATER</a></li> */}
                <li><a href="#contactModal">CONTACT</a></li>
                {/* <li><a href="#!">BLOG</a></li> */}
               
            </ul>
            <Contact/>
        </div>
    )
}


