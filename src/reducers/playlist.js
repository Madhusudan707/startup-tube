export const initialState = {
  data: [],
  loading: true,
  error: "",
};

export const playlistReducer = (state, action) => {
  switch (action.type) {
    case "ON_SUCCESS":
      return {
        loading: false,
        data: action.payload.initialData,
        error: "",
      };
    case "ON_SEARCH":
      return {
        loading: false,
        data: action.payload.searchData,
      };
    case "ON_FAILURE":
      return {
        loading: false,
        data: [],
        error: "Unable to Load Products, Try after sometime",
      };
    case "WATCH_LATER":
      return {
        loading: false,
        data: action.payload.watchLater,
      };
    case "PLAYLIST_BY_NAME":
      return{
        loading:false,
        data:action.payload.byName
      }
    case "RESET":
      return {
        loading: false,
        data: action.payload.resetData,
        error: "",
      };
    default:
      return state;
  }
};
