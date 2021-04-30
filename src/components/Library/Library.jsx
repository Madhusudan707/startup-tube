import { useFilter } from "../../contexts";
import { AllThumbnail,FilterThumbnail, FilterSearch} from "./index";
import styles from "../../styles/library.module.css";
import {useUser} from '../../contexts'
export const Library = () => {
  const { filterState } = useFilter();
  const {login} = useUser()
  return (
    <div className={styles.library}>
       
     <FilterSearch />
    {filterState.data.length ?  <FilterThumbnail /> : <AllThumbnail />}
    </div>
  );
};
