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
        type: "FILTER_VIDEO_BY_CATEGORY",
        payload: { filterCategory: filterCategoryArray },
      });
    } else {
      filterDispatch({ type: "RESET_FILTER" });
    }
  };

  return { categoryHandler};
};
