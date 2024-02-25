// En App.js

import React, { useState } from "react";
import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Favorites from "./pages/Favorites";
import Details from "./pages/Details";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppContextProvider from "./context/AppContext";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AppContextProvider>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </AppContextProvider>
      <Footer />
    </div>
  );
}

export default App;
