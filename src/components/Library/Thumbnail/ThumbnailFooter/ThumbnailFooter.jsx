import React from 'react'
import styles from '../../../../styles/thumbnailFooter.module.css'
import {useTheme} from '../../../../contexts/index'

export const ThumbnailFooter = ({func,title,views,timestamp,isHide}) => {
    const {theme} = useTheme()
    return (
        <div className={`${styles.video_footer} ${theme}`}>
            <span className={styles.video_profile}>
                <img src='/images/user-circle-solid.svg' alt='profile' loading='lazy'/>
            </span>
            <span className={styles.video_texts}>
                <p className={styles.video_title}>{title} </p>
                <p className={styles.video_info}>
                    <span className={styles.video_views}>{views} views</span>&nbsp;
                    <span className={styles.video_timestamp}>{timestamp}</span>
                </p>
            </span>
            {/* <span className={styles.video_options} style={{display: isHide==="hide"?"none":"inline"}}>
               <img src='/images/ellipsis-v-solid.svg' alt='ellipsis' onClick={func} />
            </span> */}
        </div>
    )
}


