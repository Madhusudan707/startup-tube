export const initialState = {
    data: [],
    loading: true,
    error: "",
  };
  
  export const userReducer = (state, action) => {
    switch (action.type) {
      case "CREATE_USERS":
        return{
          loading:false,
          data:action.payload.createData,
        }
      default:
        return state;
    }
  };
  