import {createContext,useContext,useReducer} from 'react'
import {historyReducer,initialState} from '../reducers/history'

export const HistoryContext = createContext({})

export const HistoryProvider = ({children})=>{
    const [state,dispatch] = useReducer(historyReducer,initialState)

    return (

        <HistoryContext.Provider value={{historyState:state,historyDispatch:dispatch}}>
            {children}
        </HistoryContext.Provider>
    )
}

export const useHistory = ()=>useContext(HistoryContext)