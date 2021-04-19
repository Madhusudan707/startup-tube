import React from 'react'
import styles from '../../../styles/search.module.css'
import {useSearchHandler} from '../../../hooks/index'
export const Search = () => {
    const { searchHandler } = useSearchHandler();
    return (
        <div className={styles.search}>
            <input type='search' placeholder="Search"  onChange={(e) => {
              searchHandler(e.target.value);
            }}/>
        </div>
    )
}

