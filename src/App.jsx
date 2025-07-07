import { useState } from "react";
import { Routes, Route, Link } from "react-router";
import EventDetails from "./routes/EventDetails";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import Home from "./routes/Home";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import CreateEvent from "./routes/CreateEvent";
import Error from "./routes/Error";

function App() {
  return (
    <div className= 'relative'>
          <Header />

      <Footer />
    </div>
  );
}

export default App;
