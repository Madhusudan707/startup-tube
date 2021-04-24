export const initialState = {
  data: [],
  loading: true,
  error: "",
};

export const videoReducer = (state, action) => {
  switch (action.type) {
    case "ON_SUCCESS":
      return {
        loading: false,
        data: action.payload.initialData,
        error: "",
      };
    case "ON_SEARCH":
      return{
        loading:false,
        data:action.payload.searchData,
      }
    case "IS_MENU_OPEN":
      return {
        loading: false,
        data: action.payload.isMenuOpen,
        error: "",
      };

    case "FILTER_VIDEO_BY_CATEGORY":
      return {
        loading: false,
        data: action.payload.filterCategory,
        error: "",
      };
    case "ON_FAILURE":
      return {
        loading: false,
        data: [],
        error: "Unable to Load Products, Try after sometime",
      };
    case "RESET":
      return{loading: false,
        data: action.payload.resetData,
        error: "",
      }
    default:
      return state;
  }
};
