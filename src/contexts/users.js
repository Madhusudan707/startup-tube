import {createContext,useContext,useReducer} from 'react'
import {userReducer,initialState} from '../reducers/users'

export const userContext = createContext({})

export const UserProvider = ({children})=>{
    const [state,dispatch] = useReducer(userReducer,initialState)

    return (

        <userContext.Provider value={{userState:state,userDispatch:dispatch}}>
            {children}
        </userContext.Provider>
    )
}

export const useUser = ()=>useContext(userContext)