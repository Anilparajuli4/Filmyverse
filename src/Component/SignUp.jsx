import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import { TailSpin } from "react-loader-spinner";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { db } from "../firebase/Firebase";
function LogIn() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
  });

  const navigate = useNavigate();
  const { email, password, name } = form;
  const [loading, setLoading] = useState(false);
  async function signup(e) {
    e.preventDefault();
    const auth = getAuth();
    console.log(auth);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
        name
      );

      updateProfile(auth.currentUser, { displayName: name });
      const user = userCredential.user;
      const formatDataCopy = { ...form };
      delete formatDataCopy.password;
      formatDataCopy.timestamp = serverTimestamp();

      const docRef = await setDoc(doc(db, "users", user.uid), formatDataCopy);
      console.log(docRef);
      setForm("");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="w-full mt-8 flex flex-col justify-center items-center">
      <h1 className="text-xl font bold">Create an account</h1>
      <div className="p-2 w-full md:w-1/3">
        <div className="relative">
          <label htmlFor="message" className="leading-7 text-sm text-gray-300">
            Name
          </label>
          <input
            type="text"
            id="message"
            name="message"
            value={name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative">
          <label htmlFor="message" className="leading-7 text-sm text-gray-300">
            Email
          </label>
          <input
            type="email"
            id="message"
            name="message"
            value={email}
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
            value={password}
            type="password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>
      <button
        onClick={signup}
        className="flex mt-2 mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg"
      >
        {loading ? <TailSpin height={25} color="white" /> : "signup"}
      </button>
      <div className="mt-4">
        <p>
          Do you have account?
          <Link to={"/login"}>
            <span className="text-blue-500">Sign In</span>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LogIn;
