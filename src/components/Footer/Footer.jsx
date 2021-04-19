import React from 'react'
import styles from '../../styles/footer.module.css'
import {useTheme} from '../../contexts/index'
export const Footer = () => {
    const {theme} = useTheme()
    return (
        <div className={`${styles.footer} ${theme}`}>
           <h3> &#127279; CopyLeft 2021@Xdev200. No rights reserved.</h3>
        </div>
    )
}
