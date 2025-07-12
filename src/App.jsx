import { useState } from "react";
import { Routes, Route } from "react-router";

import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import { useAppContext } from "./context/appContext";
import Loading from "./components/Loading";
import Home from "./routes/Home";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import EventDetails from "./routes/EventDetails";
import CreateEvent from "./routes/CreateEvent";
import Error from "./routes/Error";
import ErrorComponent from "./components/ErrorComponent";

function App() {
  const { loading, error, errorMessage } = useAppContext();

  return (
    <div className="relative">
      <Header />
      {loading && <Loading />}
      {error && <ErrorComponent content = {errorMessage} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/eventdetails/:id" element={<EventDetails />} />
        <Route path="/createevent" element={<CreateEvent />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
