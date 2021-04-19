import React from 'react'
import styles from '../../styles/button.module.css'

export const Button = ({btnText}) => {
    return (
        <>
            <button className={`${styles.btn} ${styles.btn_primary}`}>{btnText}</button>
        </>
    )
}
