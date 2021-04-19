export const initialState = {
    data: [],
    loading: true,
    error: "",
  };
  
  export const playlistReducer = (state, action) => {
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
      case "ON-FAILURE":
        return {
          loading: false,
          data: [],
          error: "Unable to Load Products, Try after sometime",
        };
      case "WATCH-LATER":
        return{
          loading:false,
          data:action.payload.watchLater
        }
      case "RESET":
        return{loading: false,
          data: action.payload.resetData,
          error: "",
        }
      default:
        return state;
    }
  };
  