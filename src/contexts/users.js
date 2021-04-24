import {createContext,useContext,useReducer,useState} from 'react'
import {userReducer,initialState} from '../reducers/users'

export const userContext = createContext({})

export const UserProvider = ({children})=>{
    const [state,dispatch] = useReducer(userReducer,initialState)
    const [login, setLogin] = useState(false);

   

    return (

        <userContext.Provider value={{userState:state,userDispatch:dispatch,login,setLogin}}>
            {children}
        </userContext.Provider>
    )
}

export const useUser = ()=>useContext(userContext)