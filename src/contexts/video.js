import {createContext,useContext,useReducer} from 'react'
import {videoReducer,initialState} from '../reducers/video'

export const VideoContext = createContext({})

export const VideoProvider = ({children})=>{
    const [state,dispatch] = useReducer(videoReducer,initialState)

    return (

        <VideoContext.Provider value={{videoState:state,videoDispatch:dispatch}}>
            {children}
        </VideoContext.Provider>
    )
}

export const useVideo = ()=>useContext(VideoContext)