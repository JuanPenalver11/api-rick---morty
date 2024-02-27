// En App.js

import React from "react";
import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Favorites from "./pages/Favorites";
import Details from "./pages/Details";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppContextProvider from "./context/AppContext";

//In App we set up the routes of our app. For that we'll use Routes and Route that are connected
// whit BrowserRouter, being BrowserRouter the parent. 

// AppContextProvider is used to pass data between componenents without having to explicitly pass props through
// every level of the component tree.

//Routes is required to render the Route. 

//Route is required to specify an individual route within the application.
//Route should follow the structure below stablish. path establish the pages the app will have. 
//Route can also have childrens.

function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <Navbar />
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
