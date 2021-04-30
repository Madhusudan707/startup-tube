import { useContext, createContext, useState } from "react";

export const ThemeContext = createContext({});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("theme_default");
  const [opacity,setOpacity] = useState("opacity_default")

  return (
    <ThemeContext.Provider value={{ theme,setTheme,opacity,setOpacity }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
