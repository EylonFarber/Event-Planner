import { useState } from "react";
import { Routes, Route, Link } from "react-router";
import EventDetails from "./routes/EventDetails";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import Home from "./routes/Home";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import CreateEvent from "./routes/CreateEvent";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="eventdetails" element={<EventDetails />} />
        <Route path="createevent" element={<CreateEvent />} />
      </Routes>
      {/* <Link to={"/eventdetails"}>link</Link> */}
      <Footer />
    </>
  );
}

export default App;
