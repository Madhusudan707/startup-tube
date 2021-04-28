import React from 'react'
import styles from '../../styles/message.module.css'
export const Message = ({msg}) => {
    return (
        <div className={styles.message}>
            <h1>{msg}</h1>
        </div>
        
    )
}
