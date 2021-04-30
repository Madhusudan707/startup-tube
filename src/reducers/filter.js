export const initialState = {
  data: [],
  loading: true,
  error: "",
};

export const filterReducer = (state, action) => {
  switch (action.type) {
    case "FILTER_VIDEO_BY_CATEGORY":
      return {
        loading: false,
        data: action.payload.filterCategory,
        error: "",
      };
    case "IS_MENU_OPEN":
      return {
        loading: false,
        data: action.payload.isMenuOpen,
        error: "",
      };
    case "RESET_FILTER":
      return {
        loading: true,
        data: [],
        error: ",",
      };

    default:
      return state;
  }
};
