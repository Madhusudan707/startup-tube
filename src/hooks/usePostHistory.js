import axios from 'axios'
import {useVideoId} from '../contexts/index'


export const usePostHistory = ()=>{
    const {setVid} = useVideoId()
    const postHistory = async (videoId)=>{
      const userId = localStorage.getItem("_id")
      setVid(videoId)
      try{
        console.log(videoId)
        await axios.post("https://startup-tube-backend.herokuapp.com/histories",{ uid:userId, vid:videoId})
        
    } catch (err) {
       console.log(err,"Unable to Save History, Try Again")
      }
    }

    return {postHistory}
}