import {useVideo,useFilter} from '../contexts/index'

export const useCategoryHandler = () => {
  const { videoState } = useVideo();
  const { filterDispatch } = useFilter();
  const categoryHandler = (category) => {
    if (category !== "ALL") {
      const filterCategoryArray = videoState.data.filter((video) => {
        return category.toLowerCase() === video.category ? video : null;
      });
      filterDispatch({
        type: "FILTER-VIDEO-BY-CATEGORY",
        payload: { filterCategory: filterCategoryArray },
      });
    } else {
      filterDispatch({ type: "RESET-FILTER" });
    }
  };

  return { categoryHandler};
};
