import axios from 'axios'
import styles from "../../../styles/userProfile.module.css";
import {useUser} from '../../../contexts/'
import { useEffect } from "react";
export const UserProfile = () => {
  const {name} = useUser()

  // useEffect(()=>{
    
    
  //   (async()=>{
  //     const mobile=localStorage.getItem("mobile_no")
  //     const fbid = localStorage.getItem("fbid")
  //     if(fbid){
       
  //       try{
  //         const response= await axios.get(`https://startup-tube-backend.herokuapp.com/users/fb/${fbid}`)
  //         console.log(response.data.data._id)
  //         localStorage.setItem("_id",response.data.data._id)
  //       }catch(err){
  //         console.log(`${err}:Unable to fetch data using fbid`)
  //       }
      
  //      }else{
  //         try{
  //           const response= await axios.get(`https://startup-tube-backend.herokuapp.com/users/mobile/${mobile}`)
  //           console.log(response.data.data._id)
  //           localStorage.setItem("_id",response.data.data._id)
  //         }catch(err){
  //           console.log(`${err}:Unable to fetch data using mobile`)
  //         }
        
  //      }
  //   })()
    
   
  // })
  return (
    <div className={styles.user_profile}>
      <h1>Welcome {name}</h1>
      <p></p>
    </div>
  );
};
