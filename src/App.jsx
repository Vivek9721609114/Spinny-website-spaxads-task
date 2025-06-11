import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./helpers/Navbar";
import Home from "./pages/Home";
import Account from "./components/Account";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/youraccount" element={<Account />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
