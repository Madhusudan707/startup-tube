import { useFilter } from "../../contexts";
import { AllThumbnail,FilterThumbnail, FilterSearch} from "./index";
import styles from "../../styles/library.module.css";
import {useUser} from '../../contexts'
export const Library = () => {
  const { filterState } = useFilter();
  const {login} = useUser()
  console.log("log",login)
  return (
    <div className={styles.library}>
       
     <FilterSearch />
    {filterState.data.length ? <AllThumbnail /> : <FilterThumbnail />}
    </div>
  );
};
