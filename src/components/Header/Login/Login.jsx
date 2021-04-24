import FacebookLogin from "react-facebook-login";
import styles from "../../../styles/login.module.css";
import { Button, Timer } from "../../index";
import "../../../styles/social_logo.css";
import { useTheme } from "../../../contexts/index";
import { useSignin, useOtp, useTimer,useFacebook } from "../../../hooks/index";

export const Login = () => {
  const urlHashValue = window.location.hash;
  const {responseFacebook,login} = useFacebook()
  const { theme } = useTheme();
  const { signInHandler, mobile_no_value, mobile_no } = useSignin();
  const { otpHandler, otp } = useOtp();
  const { timeLeft } = useTimer();

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
          <fieldset>
            <legend>Login</legend>
            <br />
            <div className={styles.login_panel}>
              <input
                type="text"
                placeholder="Enter Mobile No"
                ref={mobile_no}
              />
              <span>
                {/* <label htmlFor="remember_me">
                  <input type="checkbox" id="remember_me" />
                  Remember Me
                </label> */}

                <a href="#!">Forget Password</a>
              </span>
              <a href="#otpModal" className={styles.otpBtn}>
                <Button btnText="GET OTP" func={signInHandler} />
              </a>
              <h2> OR</h2>
              <span>
                {!login && (
                <a href="#!">  <FacebookLogin
                    appId="452382379375107"
                    // autoLoad={true}
                    fields="name,email,picture"
                    callback={responseFacebook}
                    icon="fa-facebook"
                  /></a>
                )}
              </span>
              {/* <a href="#registerModal">Not registered? Create an account</a> */}
            </div>
          </fieldset>
        </div>
      </div>
      <div id="otpModal" className={styles.modal} autoFocus={false}>
        <a
          href="#close"
          title="Close"
          style={{ color: "red" }}
          className={styles.modal_otp_close}
        >
          X
        </a>

        <div className={`${styles.modal_content_otp} ${theme}`}>
          <fieldset>
            <legend>OTP</legend>
            <div className={styles.otpInput}>
              <h4>OTP Sent to : {mobile_no_value} </h4>
              <input type="number" ref={otp} placeholder="Enter OTP here" />
            </div>
            {/* {urlHashValue==="#otpModal"?<Timer/>:null} */}
            <div className={styles.otp_actions}>
             <a href='#close'> <Button
                btnText="SUBMIT"
                func={() => {
                  otpHandler(mobile_no_value);
                }}
              /></a>
              <Button
                btnText={
                  timeLeft === 0 ? (
                    "RESEND OTP"
                  ) : urlHashValue === "#otpModal" ? (
                    <Timer />
                  ) : null
                }
              />
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};
