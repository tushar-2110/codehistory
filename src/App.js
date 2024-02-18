import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="h-screen w-full  bg-gray-50 ">
      <div className="sticky top-0 w-full">
        <Navbar />
      </div>
      <div className="h-full w-full ">
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </div>
      <div className="sticky bottom-0 w-full ">
        <Footer />
      </div>
    </div>
  );
}

export default App;
