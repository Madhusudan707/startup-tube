import React from 'react'
import styles from '../../styles/header.module.css'
import {Brand,NavBar,Login,Register} from './index'
import {useTheme} from '../../contexts/index'

export const Header = () => {
    const {theme} = useTheme()
    return (
        <div className={`${styles.header} ${theme}`}>
            <Brand/>
            <NavBar/>
            <Login/>
            <Register/>
        </div>
    )
}
