export const initialState = {
  data: [],
  loading: true,
  error: "",
};

export const filterReducer = (state, action) => {
  switch (action.type) {
    case "FILTER-VIDEO-BY-CATEGORY":
      return {
        loading: false,
        data: action.payload.filterCategory,
        error: "",
      };
    case "IS-MENU-OPEN":
      return {
        loading: false,
        data: action.payload.isMenuOpen,
        error: "",
      };
    case "RESET-FILTER":
      return {
        loading: true,
        data: [],
        error: ",",
      };

    default:
      return state;
  }
};
