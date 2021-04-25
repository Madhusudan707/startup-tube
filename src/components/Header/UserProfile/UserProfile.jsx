import styles from "../../../styles/userProfile.module.css";
import {useUser} from '../../../contexts/'
export const UserProfile = () => {
  const {fbid,name} = useUser()
  return (
    <div className={styles.user_profile}>
      <h1>Welcome User {fbid} {name}</h1>
      <p></p>
    </div>
  );
};
