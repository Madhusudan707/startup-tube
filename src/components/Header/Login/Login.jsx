import React,{useState} from "react";
import FacebookLogin from 'react-facebook-login';
import styles from "../../../styles/login.module.css";
import { Button } from "../../Button/Button";
import '../../../styles/social_logo.css'
import {useTheme} from '../../../contexts/index'
import {useSignin,useOtp} from '../../../hooks/index'
export const Login = () => {

  const [login, setLogin] = useState(false);
  const [data, setData] = useState({});
  const [picture, setPicture] = useState('');

  const responseFacebook = (response) => {
    console.log(response);
    setData(response);
    setPicture(response.picture.data.url);
    if (response.accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }


  const{theme} = useTheme()
  const {signInHandler,username,password} = useSignin()
  const {otpHandler,otp} = useOtp()
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
            <a href='#otpModal'><Button btnText="SUBMIT" func={signInHandler}/></a>
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
               {/* <a href="#!"> <i
                  className="fas fa-mobile-alt fa-3x"
                  title="Login With Mobile"
                ></i></a> */}
                { !login && 
            <FacebookLogin
              appId="562118384400275"
              autoLoad={true}
              fields="name,email,picture"
              scope="public_profile,user_friends"
              callback={responseFacebook}
              icon="fa-facebook" />
          }
                {/* <a href="#!"> <i className="fab fa-twitter-square fa-3x twitter"></i></a>
                <a href="#!"><i className="fab fa-google fa-3x google"></i></a> */}
              </span>
              <a href='#registerModal'>Not registered? Create an account</a>
            </div>
          </div>
        </div>
      </div>
      <div id="otpModal" className={styles.modal} autoFocus={false}>
      <div className={`${styles.modal_content_otp} ${theme}`}>
          <div className={styles.otpInput}>
            <input type='number' ref={otp} placeholder="Enter OTP here"/>
          </div>
          <div className={styles.otp_actions}>
          <Button btnText='SUBMIT' func={otpHandler}/>
          <Button btnText='RESEND OTP'/>
           
           
          </div>
          </div>
      </div>
    </div>
  );
};
