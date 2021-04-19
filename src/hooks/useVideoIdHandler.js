import {useVideoId} from '../contexts/index'

export const useVideoIdHandler = ()=>{
    const {setVid} = useVideoId()
    const videoIdHandler=(videoId)=>{
        setVid(videoId)
    }
   
    return {videoIdHandler}
}