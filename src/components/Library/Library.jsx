import { useFilter } from "../../contexts";
import { AllThumbnail,FilterThumbnail, FilterSearch} from "./index";
import styles from "../../styles/library.module.css";
export const Library = () => {
  const { filterState } = useFilter();
  return (
    <div className={styles.library}>
       
      <FilterSearch />
      {!filterState.data.length ? <AllThumbnail /> : <FilterThumbnail />}
    </div>
  );
};
