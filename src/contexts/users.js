import {createContext,useContext,useReducer,useState,useEffect} from 'react'
import {userReducer,initialState} from '../reducers/users'

export const userContext = createContext({})

export const UserProvider = ({children})=>{
    const [state,dispatch] = useReducer(userReducer,initialState)
    const [loginOtp, setLoginOtp] = useState(false);

   

    return (

        <userContext.Provider value={{userState:state,userDispatch:dispatch,loginOtp,setLoginOtp}}>
            {children}
        </userContext.Provider>
    )
}

export const useUser = ()=>useContext(userContext)