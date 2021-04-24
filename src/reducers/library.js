export const initialState = {
  data: [],
};

export const libraryReducer = (state, action) => {
  switch (action.type) {
    case "INITIAL":
      return {
        data: action.payload.initial,
      };
    case "SAVE_TO_WATCH_LATER":
      return {
        data: action.payload.watchLater,
      };

    case "SAVE_TO_PLAYLIST":
      return {
        data:action.payload.playlist
      };

      case "SAVE_TO_NEW_PLAYLIST":
        
        return {
          data:action.payload.newPlaylist
        };
    default:
      return state;
  }
};
