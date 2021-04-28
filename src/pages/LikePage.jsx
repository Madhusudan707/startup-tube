import React from 'react'
import {Like,Message} from '../components/index'
import { useNavigate } from 'react-router-dom';
// import styles from '../styles/page.module.css'
import {useUser} from '../contexts'
export const LikePage = () => {
    const {login} = useUser()
    let navigate = useNavigate()
    return (
        <div className="">
         {login?<Like/>:<Message msg="Login to View The Content"/>}
        </div>
    )
}
