import styles from "../../styles/playerFooter.module.css";
import SaveToPlaylist from '../SaveToPlaylist/SaveToPlaylist'
import { useLikeHandler } from "../../hooks";
export const PlayerFooter = () => {
  const { likeHandler, isLike,dislikeHandler,isDisLike } = useLikeHandler();

  return (
    <div className={styles.player_footer_main}>
      <div className={styles.tags}>
        <span>#Startup #pitch</span>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. Why do we use it? It is a long
          established fact that a reader will be distracted by the readable
          content of a page when looking at its layout. The point of using Lorem
          Ipsum is that it has a more-or-less normal distribution of letters, as
          opposed to using 'Content here, content here', making it look like
          readable English. Many desktop publishing packages and web page
          editors now use Lorem Ipsum as their default model text, and a search
          for 'lorem ipsum' will uncover many web sites still in their infancy.
          Various versions have evolved over the years, sometimes by accident,
          sometimes on purpose (injected humour and the like).
        </p>
      </div>
      <div className={styles.description}>
        <span>Kevin Hale - How to Pitch Your Startup</span>
      </div>
      <div className={styles.view_time}>
        <span>124,770 views • 13 Sept 2019</span>
      </div>
      <div className={styles.footer_bar}>
        <ul className={styles.footer_bar_ul}>
          <li>
            <a href="#!" onClick={likeHandler}>
              <span className={styles.nav_items}>
                <img
                  src={
                    isLike
                      ? "/images/thumb_up_red.svg"
                      : "/images/thumb_up_black_24dp.svg"
                  }
                  alt="home"
                />
                <span className="caption">2K</span>
              </span>
            </a>
          </li>
          <li>
            <a href="#!" onClick={dislikeHandler}>
              <span className={styles.nav_items}>
                <img src={isDisLike?"/images/thumb_down_red.svg":"/images/thumb_down_black_24dp.svg"} alt="explore" />
                <span className="caption">21</span>
              </span>
            </a>
          </li>
          <li>
            <a href="#!">
              <span className={styles.nav_items}>
                <img src="/images/share-option.svg" alt="add video" />
                <span className="caption">Share</span>
              </span>
            </a>
          </li>
          <li>
            <a href="#!">
              <span className={styles.nav_items}>
                <img src="/images/download_black_24dp.svg" alt="subscription" />
                <span className="caption">Download</span>
              </span>
            </a>
          </li>
          <li>
            <span className={styles.nav_items}>
              <img src="/images/turned_in_not_black_24dp.svg" alt="library" />
              <span className="caption">
                <a href="#saveToPlaylistModal">Save</a>
              </span>
            </span>
          </li>
        </ul>
      </div>
      <SaveToPlaylist/>
      {/* <div className={styles.channel_bar}>
        <img src="/images/user-circle-solid.svg" alt="subscriber_logo" />
        <p>
          Y Combinator
          <br />
          <span>327K subscribers</span>
        </p>
        <a href="#!">SUBSCRIBE</a>
      </div> */}
    </div>
  );
};
