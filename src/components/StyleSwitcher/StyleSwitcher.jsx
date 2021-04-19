import React from "react";
import styles from "../../styles/styles_switcher.module.css";
import {useTheme} from '../../contexts/index'
export const StyleSwitcher = () => {
  
  const {setTheme,opacity} = useTheme()
  const themeHandler=(themeParam)=>{
      setTheme(themeParam)
  }
  return (
    <div className={`${styles.style_switcher} ${opacity}`}>
      {/* <div className={styles.header}>
        <span><i className="fas fa-times-circle"></i></span>
      </div> */}
       <div className={`${styles.color_palette} ${styles.golden} `} onClick={()=>{themeHandler("theme_default")}}></div>
         <div className={`${styles.color_palette} ${styles.red} `} onClick={()=>{themeHandler("theme_red")}}></div>
         <div className={`${styles.color_palette} ${styles.aqua} `} onClick={()=>{themeHandler("theme_aqua")}}></div>
         {/* <div className={`${styles.color_palette} ${styles.purple} `} onClick={()=>{themeHandler("theme_purple")}}></div> */}
         <div className={`${styles.color_palette} ${styles.green} `} onClick={()=>{themeHandler("theme_green")}}></div>
         <div className={`${styles.color_palette} ${styles.green2} `} onClick={()=>{themeHandler("theme_green2")}}></div>
    </div>
  );
};
