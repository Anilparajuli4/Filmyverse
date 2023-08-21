import AddMovie from "./Component/AddMovie";
import Card from "./Component/Card";
import Detail from "./Component/Detail";
import Header from "./Component/Header";
import { Route, Routes } from "react-router-dom";
import { createContext, useContext, useState } from "react";
import LogIn from "./Component/LogIn";
import SignUp from "./Component/SignUp";

const AppState = createContext();

function App() {
  const [login, setLogin] = useState(false);
  const [userName, setUserName] = useState("");
  return (
    <AppState.Provider value={{ login, userName, setUserName, setLogin }}>
      <div className="App relative">
        <Header />
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/add-movie" element={<AddMovie />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </div>
    </AppState.Provider>
  );
}

export { AppState };
export default App;
