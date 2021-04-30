import styles from "../../../styles/profileIcon.module.css";
import { Link } from "react-router-dom";
import { USER_PROFILE } from "../../../routing/paths";
import {useUser} from "../../../contexts"

export const ProfileIcon = () => {
const {image} = useUser()
  return (
    <>
      {image ? (
        <Link to={USER_PROFILE}>
          <img className={styles.profile_image} src={image} alt="profile" />
        </Link>
      ) : (
        <Link to={USER_PROFILE}>
          <img
            className={styles.profile_image}
            src="/images/user-circle-solid.svg"
            alt="profile"
          />
        </Link>
      )}
    </>
  );
};
