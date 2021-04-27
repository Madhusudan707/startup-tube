import { Header, Footer, StyleSwitcher } from "./components/index";
import { Routes, Route } from "react-router-dom";
import routes from "./routing/routes";
import "./styles/App.css";
import { useEffect } from "react";
import { useTheme } from "./contexts/index";
import { usePathName } from "./hooks/index";
import { useUser } from "./contexts";
import { useNavigate } from "react-router-dom";

const App = () => {
  const { setOpacity } = useTheme();
  const { pathUrl } = usePathName();
  const navigate = useNavigate();
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
      const image = await  localStorage.getItem("image")
      const name = await  localStorage.getItem("name")
      if (login) {
        setLogin(login);
        setImage(image);
        setName(name);
        navigate("user_profile");
      }else{
        navigate("/");
      }
    })();
  }, []);

  // useEffect(() => {
  //   (async () => {
  //     await JSON.stringify(localStorage.setItem("login", login));
  //     await JSON.stringify(localStorage.setItem("image", image));
  //     await JSON.stringify(localStorage.setItem("name", name));
  //   })();
  // }, [login]);

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
