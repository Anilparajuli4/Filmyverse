import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import AddMovie from "./AddMovie";
function Header() {
  return (
    <div className="sticky z-10 header bg-black top-0 text-lg flex justify-between text-red-500 font-bold p-3 border-b-2 border-gray-500">
      <Link to={"/"}>
        <span>
          Filmy<span className="text-white">Verse</span>
        </span>
      </Link>
      <Link to={"/add-movie"}>
        <h1 className="text-lg text-white flex items-center cursor-pointer">
          <Button>
            <AddIcon className="mr-1" color="secondary" />
            <span className="text-white">Add new</span>
          </Button>
        </h1>
      </Link>
    </div>
  );
}

export default Header;
