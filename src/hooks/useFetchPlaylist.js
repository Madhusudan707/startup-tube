import {useEffect} from 'react'
import axios from 'axios'
import {usePlaylist} from "../contexts/index"

export const useFetchPlaylist = ()=>{
    const {playlistState,playlistDispatch} = usePlaylist()

    useEffect(()=>{
        fetchPlaylist()
        //Below Line remove the useEffect dependency warning
    //eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const fetchPlaylist = async()=>{
        try{
            const response = await axios.get("https://startup-tube-backend.herokuapp.com/playlists")
            playlistDispatch({type:"ON_SUCCESS",payload:{initialData:response.data.data}})
        } catch (err) {
            playlistDispatch({ type: "ON_FAILURE", payload: "" });
          }
        
    }

    return {playlistState,playlistDispatch}
}