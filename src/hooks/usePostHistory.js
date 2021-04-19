import axios from 'axios'
import {useVideoId} from '../contexts/index'


export const usePostHistory = ()=>{
    const {setVid} = useVideoId()
    const postHistory = async (videoId)=>{
      setVid(videoId)
      try{
        console.log(videoId)
        await axios.post("http://localhost:5000/histories",{ uid:1, vid:videoId})
        
    } catch (err) {
       console.log(err,"Unable to Save History, Try Again")
      }
    }

    return {postHistory}
}