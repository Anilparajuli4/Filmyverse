import AddMovie from "./Component/AddMovie";
import Card from "./Component/Card";
import Detail from "./Component/Detail";
import Header from "./Component/Header";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App relative">
      <Header />
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/add-movie" element={<AddMovie />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
