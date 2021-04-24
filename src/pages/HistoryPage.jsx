import React from 'react'
import {History} from '../components/index'
import { useNavigate } from 'react-router-dom';
// import styles from '../styles/page.module.css'
import {useUser} from '../contexts'
export const HistoryPage = () => {
    const {login} = useUser()
    let navigate = useNavigate()
    return (
        <div className="">
         {login?<History/>:navigate("/loginModal")}
        </div>
    )
}
