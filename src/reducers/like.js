export const initialState = {
    data: [],
    loading: true,
    error: "",
  };
  
  export const likeReducer = (state, action) => {
    switch (action.type) {
      case "ADDED-LIKE-VIDEO":
        return {
          loading: false,
          data: action.payload.likeVideo,
        };
        case "REMOVED-LIKE-VIDEO":
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
  