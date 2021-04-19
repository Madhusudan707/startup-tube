export const initialState = {
  data: [],
  loading: true,
  error: "",
};

export const videoReducer = (state, action) => {
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
    case "IS-MENU-OPEN":
      return {
        loading: false,
        data: action.payload.isMenuOpen,
        error: "",
      };

    case "FILTER-VIDEO-BY-CATEGORY":
      return {
        loading: false,
        data: action.payload.filterCategory,
        error: "",
      };
    case "ON-FAILURE":
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
