import AddMovie from "./Component/AddMovie";
import Card from "./Component/Card";
import Header from "./Component/Header";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/add-movie" element={<AddMovie />} />
      </Routes>
    </div>
  );
}

export default App;
