import {useState} from 'react'
import {axios} from 'axios'
import { useNavigate } from 'react-router-dom';


export const  useFacebook=()=>{
    const navigate = useNavigate()
    const [login, setLogin] = useState(false);
    const [data, setData] = useState({});
    const [picture, setPicture] = useState("");

    const responseFacebook = async (response) => {
        console.log(response);
        console.log("name",typeof(response.name))
        console.log("fb_id",typeof(response.id))
        console.log("img",typeof(response.picture.data.url))
        setData(response);
        setPicture(response.picture.data.url);
        if (response.accessToken) {
            try{
              
                await axios.post("http://startup-tube-backend.herokuapp.com/users",{name:response.name,fb_id:response.id})
                setLogin(true);
                navigate("user_profile")
                localStorage.setItem("login",true)
                localStorage.setItem("username",response.name)
                localStorage.setItem("image",response.picture.data.url)
            }catch(err){
                console.log(`${err}:Unable to login with Facebook`)
            }
         
        } else {
          setLogin(false);
          navigate("")
        }
      };

      return {responseFacebook,login,data,picture}
}