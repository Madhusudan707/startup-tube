import React from 'react'
import styles from '../../styles/header.module.css'
import {Brand,NavBar,Login,ProfileIcon} from './index'
import {useNavigate} from 'react-router-dom'
import {Button} from '../index'
import {useTheme,useUser} from '../../contexts/index'
import {useFacebook } from "../../hooks"

export const Header = () => {
    const Navigate = useNavigate()
    const {theme} = useTheme()
    const {login,setLogin}=useUser();
    
  

    const logoutHandler=()=>{
        setLogin(false);
        Navigate('/')
    }
    return (
        <div className={`${styles.header} ${theme}`}>
            <Brand/>
            <NavBar/>
            {login?<ProfileIcon/>:<Login/>}
            {/* <Register/> */}
            {console.log("login_header",login)}
           {login&&<Button btnText="LOGOUT" func={logoutHandler}/>}
        </div>
    )
}
