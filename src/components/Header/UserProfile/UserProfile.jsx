import styles from "../../../styles/userProfile.module.css";

export const UserProfile = () => {
  const name = localStorage.getItem("username");
  return (
    <div className={styles.user_profile}>
      <h1>Welcome User {name}</h1>\
      <p></p>
    </div>
  );
};
