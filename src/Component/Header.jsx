import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
function Header() {
  return (
    <div className="text-lg flex justify-between text-red-500 font-bold p-3 border-b-2 border-gray-500">
      <span>
        Filmy<span className="text-white">Verse</span>
      </span>
      <h1 className="text-lg text-white flex items-center cursor-pointer">
        <Button>
          <AddIcon className="mr-1" color="secondary" />
          <span className="text-white">Add new</span>
        </Button>
      </h1>
    </div>
  );
}

export default Header;
