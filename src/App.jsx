import AddMovie from "./Component/AddMovie";
import Card from "./Component/Card";
import Detail from "./Component/Detail";
import Header from "./Component/Header";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import LogIn from "./Component/LogIn";
import SignUp from "./Component/SignUp";
import { UserContextProvider } from "./Component/ContextApi";
import ProtectedRoute from "./Component/ProtectedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <UserContextProvider>
      <div className="App relative">
        <Header />
        <Routes>
          <Route path="/" element={<Card />} />
          <Route
            path="/add-movie"
            element={
              <ProtectedRoute>
                <AddMovie />
              </ProtectedRoute>
            }
          />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </UserContextProvider>
  );
}

export default App;
