import React from 'react'
import styles from '../../styles/button.module.css'

export const Button = ({btnText,func}) => {
    return (
        <>
            <button className={`${styles.btn} ${styles.btn_primary}`} onClick={func}>{btnText}</button>
        </>
    )
}
