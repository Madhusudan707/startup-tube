import React from "react";
import {Thumbnail,ThumbnailFooter} from '../Thumbnail/index'
import {Link} from "react-router-dom"
import {PLAYER} from '../../../routing/paths'
import styles from '../../../styles/all_thumbnail.module.css'
import { useFetchVideos,useUrlTitleHandler,usePostHistory} from "../../../hooks/index";



export const AllThumbnail = () => {

  const { videoState} = useFetchVideos();
  const { urlTitleHandler} = useUrlTitleHandler();
  const {postHistory} = usePostHistory()

  return (
    <div className={styles.all_thumbnail}>
        {videoState.data.map((video, index) => {
          return (
            <Link to={PLAYER}  key={index}  onClick={() => {
              urlTitleHandler(video.title, video.url);
            }}>
              <Thumbnail vThumbnail={video.thumbnail} func={()=>{postHistory(video.id)}} />
              <ThumbnailFooter  
              title={video.title}
              views={video.views}
              timestamp={video.timestamp}
              isHide="hide"/>
            </Link>
            
          );
        })}
       
     
    </div>
  );
};
