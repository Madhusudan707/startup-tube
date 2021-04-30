import { useRef } from "react";
import axios from "axios";

export const useSignup = () => {
  const username = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const cpassword = useRef(null);
  const signUpHandler = async () => {
    try {
      await axios.post("https://startup-tube-backend.herokuapp.com/users", {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      });
    } catch (err) {
      console.log(`${err}:Unable to Register`);
    }
  };

  return { signUpHandler, username, email, password, cpassword };
};
