import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../firebase/Firebase";
import { toast } from "react-toastify";
function LogIn() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { email, password } = form;

  const [loading, setLoading] = useState(false);

  async function login(e) {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredentail = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredentail.user) {
        setForm({
          email: "",
          password: "",
        });
        navigate("/");
        toast.success("Login successfully");
      }
    } catch (error) {
      toast.error("something went wrong");
    }
  }
  return (
    <div className="w-full mt-24 flex flex-col justify-center items-center">
      <h1 className="text-xl font bold">Login</h1>
      <div className="p-2 w-full md:w-1/3">
        <div className="relative">
          <label htmlFor="message" className="leading-7 text-sm text-gray-300">
            Email
          </label>
          <input
            type="email"
            id="message"
            name="message"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>
      <div className="p-2 w-full md:w-1/3">
        <div className="relative">
          <label htmlFor="message" className="leading-7 text-sm text-gray-300">
            Password
          </label>
          <input
            id="message"
            name="message"
            value={form.password}
            type="password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>
      <button
        onClick={login}
        className="flex mt-2 mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg"
      >
        {loading ? <TailSpin height={25} color="white" /> : "Login"}
      </button>
      <div className="mt-4">
        <p>
          Do not have account?{" "}
          <Link to={"/sign-up"}>
            <span className="text-blue-500">Sign Up</span>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LogIn;
