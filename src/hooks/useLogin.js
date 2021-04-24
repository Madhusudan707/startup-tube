import { useEffect, useState } from "react";
export const useLogin = () => {

  const [loginOtp, setLoginOtp] = useState(false);

 

  return { loginOtp, setLoginOtp };
};
