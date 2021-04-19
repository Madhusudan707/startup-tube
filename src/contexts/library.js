import {useContext,createContext,useReducer} from 'react'
import {libraryReducer,initialState} from '../reducers/library'
export const LibraryContext = createContext()

export const LibraryProvider = ({children})=>{
    const[state,dispatch]=useReducer(libraryReducer,initialState)

    return(
        <LibraryContext.Provider value={{libraryState:state,libraryDispatch:dispatch}}>
            {children}
        </LibraryContext.Provider>
    )
}

export const useLibrary = ()=> useContext(LibraryContext)