import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import  {useUser} from '../contexts/index'


export const  useFacebook=()=>{
    const navigate = useNavigate()
    const {login,setLogin,setImage,setName,setFbid,image,name,id} = useUser()
    const responseFacebook = async (response) => {
        console.log("response",response);
        console.log("name",response.name)
        console.log("fb_id",response.id)
        console.log("img",response.picture.data.url)
       
        if (response.accessToken) {
            try{
                localStorage.setItem("login",true)
                localStorage.setItem("fbid",response.id)
                localStorage.setItem("name",response.name)
                localStorage.setItem("image",response.picture.data.url)
                setLogin(true);
                setImage(response.picture.data.url);
                setName(response.name)
                setFbid(response.id)
                await axios.post("https://startup-tube-backend.herokuapp.com/users",{name:response.name,fb_id:response.id,image:response.picture.data.url})
                navigate("user_profile")
            }catch(err){
                console.log(`${err}:Unable to login with Facebook`)
            }
         
        } else {
          setLogin(false);
          navigate("/")
        }
      };

      return {responseFacebook,login,image,name,id}
}