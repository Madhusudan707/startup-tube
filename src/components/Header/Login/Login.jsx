import React from "react";
import styles from "../../../styles/login.module.css";
import { Button } from "../../Button/Button";
import '../../../styles/social_logo.css'
import {useTheme} from '../../../contexts/index'
import {useSignin} from '../../../hooks/index'
export const Login = () => {
  const{theme} = useTheme()
  const {signInHandler,username,password} = useSignin()
  return (
    <div className={styles.login}>
      <a href="#loginModal">
        <Button btnText="LOGIN" />
      </a>
      <div id="loginModal" className={styles.modal} autoFocus={false}>
        <div className={`${styles.modal_content} ${theme}`}>
          <a href="#close" title="Close" className={styles.modal_close}>
            X
          </a>
          <div className={styles.login_panel}>
              {/* <span><i className="fas fa-lock fa-3x"></i></span> */}
            <input type="text" placeholder="Enter Username" ref={username} />
            <input type="password" placeholder="Enter Password" ref={password} />
            <Button btnText="SUBMIT" func={signInHandler}/>
            <span>
              <label htmlFor="remember_me">
               <input type="checkbox" id="remember_me" />
                Remember Me
              </label>
            
              <a href="#!">Forget Password</a>
            </span>

            <div className={styles.social_login}>
              <h2>Social Login</h2>
              <span>
               <a href="#!"> <i
                  className="fas fa-mobile-alt fa-3x"
                  title="Login With Mobile"
                ></i></a>
                <a href="#!"> <i className="fab fa-facebook-square fa-3x fb"></i></a>
                <a href="#!"> <i className="fab fa-twitter-square fa-3x twitter"></i></a>
                <a href="#!"><i className="fab fa-google fa-3x google"></i></a>
              </span>
              <a href='#registerModal'>Not registered? Create an account</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
