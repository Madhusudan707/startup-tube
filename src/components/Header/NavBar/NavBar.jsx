import styles from "../../../styles/navbar.module.css";
import { Link } from "react-router-dom";
import { HOME, LIBRARY, PLAYLIST, HISTORY,LIKE } from "../../../routing/paths";
import { Contact } from "../../index";
import { usePathName } from "../../../hooks";

export const NavBar = () => {
  const { pathUrl } = usePathName();
  return (
    <div className={styles.navbar}>
      <ul className={styles.nav_ul}>
        <li>
          <Link to={HOME} className={pathUrl === "/" ? styles.active : null}>
            HOME
          </Link>
        </li>
        <li>
          <Link
            to={LIBRARY}
            className={pathUrl === "/library" ? styles.active : null}
          >
            LIBRARY
          </Link>
        </li>
        <li>
          <Link
            to={PLAYLIST}
            className={pathUrl === "/playlist" ? styles.active : null}
          >
            PLAYLIST
          </Link>
        </li>
        <li>
          <Link
            to={HISTORY}
            className={pathUrl === "/history" ? styles.active : null}
          >
            HISTORY
          </Link>
        </li>
        <li>
          <Link
            to={LIKE}
            className={pathUrl === "/like" ? styles.active : null}
          >
            LIKE VIDEOS
          </Link>
        </li>
        <li>
          <a href="#contactModal">CONTACT</a>
        </li>
      </ul>
      <Contact />
    </div>
  );
};
