import { Header, Footer, StyleSwitcher } from "./components/index";
import { Routes, Route } from "react-router-dom";
import routes from "./routing/routes";
import "./styles/App.css";
import { useEffect } from "react";
import { useTheme } from "./contexts/index";
import { usePathName } from "./hooks/index";
import { useUser } from "./contexts";

const App = () => {
  const { setOpacity } = useTheme();
  const { pathUrl } = usePathName();
  const { login, setLogin, image, setImage, name, setName } = useUser();
  useEffect(() => {
    pathUrl === "/player"
      ? setOpacity("opacity_light")
      : setOpacity("opacity_default");
    //Below Line remove the useEffect dependency warning
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathUrl]);

  useEffect(() => {
    (async () => {
      const login = await JSON.parse(localStorage.getItem("login"))
      const image = await  JSON.parse(localStorage.getItem("image"))
      const name = await  JSON.parse(localStorage.getItem("name"))
      if (login) {
        setLogin(login);
        setImage(image);
        setName(name);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      await localStorage.setItem("login", login);
      await localStorage.setItem("image", image);
      await localStorage.setItem("name", name);
    })();
  }, [login]);

  return (
    <div className="App">
      <Header />
      <StyleSwitcher />
      <Footer />
      <Routes>
        {routes.map((route, key) => (
          <Route path={route.path} element={<route.component />} key={key} />
        ))}
      </Routes>
    </div>
  );
};

export default App;
