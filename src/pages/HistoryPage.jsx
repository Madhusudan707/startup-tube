import React from 'react'
import {History,Message} from '../components/index'
import { useNavigate } from 'react-router-dom';
// import styles from '../styles/page.module.css'
import {useUser} from '../contexts'
export const HistoryPage = () => {
    const {login} = useUser()
    return (
        <div className="">
         {login?<History/>:<Message msg="Login to View The Content"/>}
        </div>
    )
}
