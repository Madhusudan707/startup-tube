import React from "react";
import styles from "../../../styles/filter.module.css";
// import {Search} from '../Search/Search'
import {useCategoryHandler} from '../../../hooks/index'
export const Filter = () => {
  const categories = ["ALL", "PITCH", "GROWTH", "SAFE", "LAUNCH", "EQUITY"];
  const {categoryHandler} = useCategoryHandler()
  return (
    <div className={styles.filter}>
        <select className={styles.filter_select} onClick={(e) => {
          categoryHandler(e.target.value);
        }}>
            <option value=''>SELECT CATEGORIES</option>
      {categories.map((category, index) => {
          return <option key={index} value={category} >{category}</option>
      })}
      </select>
    </div>
  );
};


