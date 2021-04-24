
import styles from '../../../styles/profileIcon.module.css'
import {Link} from 'react-router-dom'
import {USER_PROFILE} from '../../../routing/paths'
export const ProfileIcon = () => {
    const picture= localStorage.getItem("picture")
    return (
        <>
            {picture?<Link to={USER_PROFILE}><img className={styles.profile_image} src={picture} alt='profile'/></Link>:<Link to={USER_PROFILE}><img className={styles.profile_image} src={picture} alt='profile'/></Link>}
        </>
       
    )
}
