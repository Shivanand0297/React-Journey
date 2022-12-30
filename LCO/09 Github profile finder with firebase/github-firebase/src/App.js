import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// toastify
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

// firebase
import { initializeApp } from 'firebase/app'
import "firebase/auth";

// components
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import PageNotFound from "./pages/PageNotFound";

// context
import UserContext from "./context/UserContext";
import Footer from "./components/Footer";
import Header from "./components/Header";

// firebase config
import firebaseConfig from "./config/FirebaseConfig"

// firebase initialization as soon as the app loads
initializeApp(firebaseConfig)

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer/>
      </UserContext.Provider>
    </BrowserRouter>
  );
};

export default App;
