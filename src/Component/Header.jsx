import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import AddMovie from "./AddMovie";
import { UserAuth } from "./ContextApi";
import { getAuth, signOut } from "firebase/auth";
import { toast } from "react-toastify";

function Header() {
  const auth = getAuth();
  const { user } = UserAuth();

  function logOutHandle() {
    signOut(auth);
    toast.info("you have logout successfully");
  }
  return (
    <div className="sticky z-10 header bg-black top-0 text-lg flex justify-between text-red-500 font-bold p-3 border-b-2 border-gray-500">
      <Link to={"/"}>
        <span>
          Filmy<span className="text-white">Verse</span>
        </span>
      </Link>
      {user?.displayName ? (
        <div className="flex space-x-4">
          <Link to={"/add-movie"}>
            <h1 className="text-lg text-white flex items-center cursor-pointer">
              <Button>
                <AddIcon className="mr-1" color="secondary" />
                <span className="text-white">Add new</span>
              </Button>
            </h1>
          </Link>
          <Button onClick={logOutHandle}>Log out</Button>
        </div>
      ) : (
        <Link to={"/login"}>
          <h1 className="text-lg bg-green-500 text-white flex items-center cursor-pointer">
            <Button>
              <span className="text-white">Login</span>
            </Button>
          </h1>
        </Link>
      )}
    </div>
  );
}

export default Header;
