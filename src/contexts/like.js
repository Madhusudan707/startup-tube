import {createContext,useContext,useReducer} from 'react'
import {likeReducer,initialState} from '../reducers/like'

export const LikeContext = createContext({})

export const LikeProvider = ({children})=>{
    const [state,dispatch] = useReducer(likeReducer,initialState)

    return (

        <LikeContext.Provider value={{likeState:state,likeDispatch:dispatch}}>
            {children}
        </LikeContext.Provider>
    )
}

export const useLike = ()=>useContext(LikeContext)