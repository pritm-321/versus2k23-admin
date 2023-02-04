import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Login />} />
            <Route path="home" element={<Home />} />
            <Route path="users">
              <Route index element={<List users/>} />
            </Route>
            <Route path="bgmi-registrations">
              <Route index element={<List bgmi/>} />
            </Route>
            <Route path="valorant-registrations">
              <Route index element={<List valorant/>} />
            </Route>
            <Route path="cs-registrations">
              <Route index element={<List cs/>} />
            </Route>
            <Route path="ballpool-registrations">
              <Route index element={<List ballpool/>} />
            </Route>
            <Route path="nfs-registrations">
              <Route index element={<List nfs/>} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
