import {useState} from 'react'
import { useNavigate } from 'react-router-dom';


export const  useFacebook=()=>{
    const navigate = useNavigate()
    const [login, setLogin] = useState(false);
    const [data, setData] = useState({});
    const [picture, setPicture] = useState("");

    const responseFacebook = async (response) => {
        console.log(response);
        setData(response);
        setPicture(response.picture.data.url);
        if (response.accessToken) {
            try{
                setLogin(true);
                // await axios.post("https://startup-tube-backend.herokuapp.com/users",{ name:})
                navigate("user_profile")
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