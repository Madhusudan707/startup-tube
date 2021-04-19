export const initialState = {
    data: [],
    loading: true,
    error: "",
  };
  
  export const historyReducer = (state, action) => {
    switch (action.type) {
      case "ON-SUCCESS":
        return {
          loading: false,
          data: action.payload.initialData,
          error: "",
        };
      case "ON-SEARCH":
        return{
          loading:false,
          data:action.payload.searchData,
        }
      case "FILTER-HISTORY-VIDEOS":
        return{
          loading:false,
          data:action.payload.historyVideos
        }
      case "ON-FAILURE":
        return {
          loading: false,
          data: [],
          error: "Unable to Load History, Try after sometime",
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
  