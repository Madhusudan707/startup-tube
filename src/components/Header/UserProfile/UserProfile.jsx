import styles from "../../../styles/userProfile.module.css";
import {useUser} from '../../../contexts/'
export const UserProfile = () => {
  const {name} = useUser()
  return (
    <div className={styles.user_profile}>
      <h1>Welcome {name}</h1>
      <p></p>
    </div>
  );
};
