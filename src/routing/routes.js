import { HOME,LIBRARY,PLAYER,PLAYLIST,HISTORY,PLAYLIST_THUMBNAILS,USER_PROFILE} from "./paths";
import {HomePage,LibraryPage,PlayerPage,PlaylistPage,HistoryPage,PlaylistThumbnailPage} from '../pages/index'
import {UserProfile} from '../components/index'




const HOME_ONE = {
  component: HomePage,
  path: HOME,
};
const LIBRARY_TWO = {
  component: LibraryPage,
  path: LIBRARY,
};
const PLAYLIST_THREE = {
  component: PlaylistPage,
  path: PLAYLIST,
};
const PLAYLIST_THUMBNAILS_FOUR={
  component: PlaylistThumbnailPage,
  path: PLAYLIST_THUMBNAILS,
};
const HISTORY_FIVE = {
  component:HistoryPage,
  path:HISTORY
};
// const WATCH_LATER_FOUR={
//   component:WatchLaterPage,
//   path:WATCH_LATER
// }

// const LIKE_VIDEOS_FIVE={
//   component:LikePage,
//   path:LIKE_VIDEOS
// }
// const CONTACT_SIX = {
//   component:  Contact,
//   path: CONTACT,
// }
const PLAYER_SEVEN = {
  component: PlayerPage,
  path: PLAYER,
};

const USER_PROFILE_EIGHT = {
  component: UserProfile,
  path: USER_PROFILE
}

const routes = [HOME_ONE,LIBRARY_TWO,PLAYLIST_THREE,PLAYLIST_THUMBNAILS_FOUR,HISTORY_FIVE,PLAYER_SEVEN,USER_PROFILE_EIGHT];

export default routes;
