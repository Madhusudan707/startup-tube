import { useState } from "react";
export const useLogin = () => {
  const [login, setLogin] = useState(false);

  return { login, setLogin };
};
