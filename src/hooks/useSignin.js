import {useRef} from  'react'
import axios from 'axios'

export const useSignin=()=>{
    const username=useRef(null);
    const password = useRef(null);
    const signInHandler = async()=>{
        try{
            await axios.post("http://localhost:5000/users",{ username:username.current.value,password:password.current.value})
            console.log("Login Success")
        }catch(err){
            console.log(`${err}:Unable to Login`)
        }
      }

      return {signInHandler,username,password}
}