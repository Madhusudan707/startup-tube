import { HOME,LIBRARY,PLAYER,PLAYLIST,HISTORY} from "./paths";
import {HomePage,LibraryPage,PlayerPage,PlaylistPage,HistoryPage} from '../pages/index'
// import {Contact} from '../components/index'




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
const HISTORY_FOUR = {
  component:HistoryPage,
  path:HISTORY
}
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

const routes = [HOME_ONE,LIBRARY_TWO,PLAYLIST_THREE,HISTORY_FOUR,PLAYER_SEVEN];

export default routes;
