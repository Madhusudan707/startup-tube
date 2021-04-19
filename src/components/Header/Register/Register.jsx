import React from 'react'
import styles from '../../../styles/register.module.css'
import {Button} from '../../Button/Button'
import {useTheme} from '../../../contexts/index'
export const Register = () => {
  const{theme} = useTheme()
    return (
        <div className={styles.register}>
          <a href="#registerModal"> <Button btnText="REGISTER"/></a> 
          <div id="registerModal" className={styles.modal} autoFocus={false}>
        <div className={`${styles.modal_content} ${theme}`}>
          <a href="#close" title="Close" className={styles.modal_close}>
            X
          </a>
          <div className={styles.login_panel}>
              {/* <span><i className="fas fa-lock fa-3x"></i></span> */}
            <input type="text" placeholder="Enter Username" />
            <input type="text" placeholder="Enter Email" />
            <input type="password" placeholder="Enter Password" />
            <input type="password" placeholder="Confirm Password" />
            <Button btnText="SUBMIT"/>
            <span>
             
            </span>
            </div>
            <div className={styles.social_login}>
              <h2>Social Sign-Up</h2>
              <span>
               <a href="#!"> <i
                  className="fas fa-mobile-alt fa-3x"
                  title="Login With Mobile"
                ></i></a>
                <a href="#!"> <i className="fab fa-facebook-square fa-3x fb"></i></a>
                <a href="#!"> <i className="fab fa-twitter-square fa-3x twitter"></i></a>
                <a href="#!"><i className="fab fa-google fa-3x google"></i></a>
              </span>
              <a href='#loginModal'>Already registered? Login Here</a>
            </div>
         
        </div>
      </div>
        </div>
    )
}
