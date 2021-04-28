import React from 'react'
import {Like} from '../components/index'
import { useNavigate } from 'react-router-dom';
// import styles from '../styles/page.module.css'
import {useUser} from '../contexts'
export const LikePage = () => {
    const {login} = useUser()
    let navigate = useNavigate()
    return (
        <div className="">
         {login?<Like/>:navigate("/loginModal")}
        </div>
    )
}
