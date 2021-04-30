import { useContext, createContext, useState } from "react";


export const HideContext = createContext({});

export const HideProvider = ({ children }) => {
  const [hide, setHide] = useState("theme_default");

  return (
    <HideContext.Provider
      value={{ hide: hide, setHide: setHide }}
    >
      {children}
    </HideContext.Provider>
  );
};

export const useHide = () => useContext(HideContext);
