import { Filter, Search } from "../index";
import Styles from "../../../styles/filter_search.module.css";

export const FilterSearch = () => {
  return (
    <div className={Styles.filter_search}>
      <Filter />
      <Search />
    </div>
  );
};
