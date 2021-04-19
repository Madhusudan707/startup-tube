import {createContext,useContext,useReducer} from 'react'
import {playlistReducer,initialState} from '../reducers/playlist'

export const PlaylistContext = createContext({})

export const PlaylistProvider = ({children})=>{
    const [state,dispatch] = useReducer(playlistReducer,initialState)

    return (

        <PlaylistContext.Provider value={{playlistState:state,playlistDispatch:dispatch}}>
            {children}
        </PlaylistContext.Provider>
    )
}

export const usePlaylist = ()=>useContext(PlaylistContext)