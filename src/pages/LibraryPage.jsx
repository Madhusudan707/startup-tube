import React from 'react'
import {Library,Message} from '../components/index'
import {useUser} from '../contexts'
// import styles from '../styles/page.module.css'
export const LibraryPage = () => {
    const {login} = useUser()
    return (
        <div className="">
            
            {login?<Library/>:<Message msg="Login to View The Content"/>}
        </div>
    )
}
