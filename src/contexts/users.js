import {createContext,useContext,useReducer,useState} from 'react'
import {userReducer,initialState} from '../reducers/users'

export const userContext = createContext({})

export const UserProvider = ({children})=>{
    const [state,dispatch] = useReducer(userReducer,initialState)
    const [login, setLogin] = useState(false);
    const [image, setImage] = useState(null);
    const [name,setName] = useState(null)
    const [fbid,setFbid] = useState(null)
    const [userId,setUserId] = useState(null)

   

    return (

        <userContext.Provider value={{userState:state,userDispatch:dispatch,login,setLogin,image,setImage,name,setName,fbid,setFbid,userId,setUserId}}>
            {children}
        </userContext.Provider>
    )
}

export const useUser = ()=>useContext(userContext)