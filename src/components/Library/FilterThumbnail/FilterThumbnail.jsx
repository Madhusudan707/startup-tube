import React from "react";
import {Thumbnail,ThumbnailFooter} from '../Thumbnail/index'
import {Link} from "react-router-dom"
import {PLAYER} from '../../../routing/paths'
import styles from '../../../styles/all_thumbnail.module.css'
import { useUrlTitleHandler,useVideoIdHandler} from "../../../hooks/index";
import { useFilter } from "../../../contexts/index";

export const FilterThumbnail = () => {
  const { urlTitleHandler} = useUrlTitleHandler();
  const {videoIdHandler} = useVideoIdHandler()
  const { filterState } = useFilter();
  return (
    <div className={styles.all_thumbnail}>
      {filterState.data.map((video,index) => {
        return (
          <Link to={PLAYER}  key={index}  onClick={() => {
            urlTitleHandler(video.title, video.url);
          }}>
            <Thumbnail vThumbnail={video.thumbnail} func={()=>{videoIdHandler(video.id)}} />
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

