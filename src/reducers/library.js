export const initialState = {
  data: [],
};

export const libraryReducer = (state, action) => {
  switch (action.type) {
    case "INITIAL":
      return {
        data: action.payload.initial,
      };
    case "SAVE-TO-WATCH-LATER":
      return {
        data: action.payload.watchLater,
      };

    case "SAVE-TO-PLAYLIST":
      return {
        data:action.payload.playlist
      };

      case "SAVE-TO-NEW-PLAYLIST":
        
        return {
          data:action.payload.newPlaylist
        };
    default:
      return state;
  }
};
