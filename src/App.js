import {Header,Footer,StyleSwitcher} from './components/index'
import { Routes, Route } from "react-router-dom";
import routes from "./routing/routes";
import './styles/App.css';
import { useEffect } from 'react';
import {useTheme} from './contexts/index'
import {useLogin, usePathName} from './hooks/index'
import {useUser} from './contexts'


const App=()=> {
  const {setOpacity} = useTheme()
  const {pathUrl} = usePathName()
  const {loginOtp,setLoginOtp} = useUser()
  useLogin()
  useEffect(()=>{
      pathUrl==="/player"?setOpacity("opacity_light"):setOpacity("opacity_default")
       //Below Line remove the useEffect dependency warning
    //eslint-disable-next-line react-hooks/exhaustive-deps
  },[pathUrl])

  useEffect(() => {
    (async () => {
      const loginOtp = await JSON.parse(localStorage.getItem("loginOtp"));
      if (loginOtp) {
        setLoginOtp(loginOtp);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
    //   setLoginOtp(loginOtp);
      await localStorage.setItem("loginOtp", loginOtp);
    })();
  }, [loginOtp]);

  return (
    <div className="App">
      
      <Header/>
      <StyleSwitcher/>
      <Footer/>
      <Routes>
        {routes.map((route, key) => (
          <Route path={route.path} element={<route.component />} key={key} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
