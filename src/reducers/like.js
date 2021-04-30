export const initialState = {
    data: [],
    loading: true,
    error: "",
  };
  
  export const likeReducer = (state, action) => {
    switch (action.type) {
      case "ADDED_LIKE_VIDEO":
        return {
          loading: false,
          data: action.payload.likeVideo,
        };
      case "FILTER_LIKE_VIDEOS":
        return {
          loading: false,
          data: action.payload.likeVideos,
        };
        case "REMOVED_LIKE_VIDEO":
            return {
              loading: false,
              data: action.payload.unlikeVideo,
            };
      case "RESET":
        return { loading: false, data: action.payload.resetData, error: "" };
      default:
        return state;
    }
  };
  