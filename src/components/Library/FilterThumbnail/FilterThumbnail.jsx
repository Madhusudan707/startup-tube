import {Thumbnail,ThumbnailFooter} from '../Thumbnail'
import {Link} from "react-router-dom"
import {PLAYER} from '../../../routing/paths'
import styles from '../../../styles/all_thumbnail.module.css'
import { useUrlTitleHandler,useVideoIdHandler} from "../../../hooks";
import { useFilter } from "../../../contexts";

export const FilterThumbnail = () => {
  const { urlTitleHandler} = useUrlTitleHandler();
  const {videoIdHandler} = useVideoIdHandler()
  const { filterState } = useFilter();
  return (
    <div className={styles.all_thumbnail}>
      {filterState.data.map(({id,title,url,thumbnail,views,timestamp}) => {
        return (
          <Link to={PLAYER}  key={id}  onClick={() => {
            urlTitleHandler(title, url);
          }}>
            <Thumbnail image={thumbnail} func={()=>{videoIdHandler(id)}} />
            <ThumbnailFooter  
            title={title}
            views={views}
            timestamp={timestamp}
            isHide="hide"/>
          </Link>
        );
      })}
    </div>
  );
};

