import React from "react";
import { Routes, Route, Link } from "react-router";

import SignIn from "../routes/SignIn";
import SignUp from "../routes/SignUp";
import CreateEvent from "../routes/CreateEvent";
import Error from "../routes/Error";
import Home from "../routes/Home";
import EventDetails from "../routes/EventDetails";
import FooterIcon from "../components/FooterIcon";
import { FaAmilia } from "react-icons/fa6";

export default function Footer() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/eventdetails/:id" element={<EventDetails />} />
        <Route path="/createevent" element={<CreateEvent />} />
        <Route path="/*" element={<Error />} />
      </Routes>

      <ul className="flex justify-around items-center menu menu-horizontal bg-gray-300 rounded-box mt-6 h-24 w-full fixed left-0 bottom-0 md:hidden">
        <FooterIcon
          linkTo={"/"}
          itemKey={"profile"}
          content={"Profile"}
          icon={<FaAmilia />}
       />          

        <FooterIcon linkTo={"/"} itemKey={"explore"} content={"Explore"}    icon={<FaAmilia />}
       /> 
        <FooterIcon
          linkTo={"/CreateEvent"}
          itemKey={"createEvent"}
          xmlns={"http://www.w3.org/2000/svg"}
          content={"Create Event"}
            icon={<FaAmilia />}
       /> 
        <FooterIcon linkTo={"/signin"} itemKey={"signIn"} content={"Sign In"}    icon={<FaAmilia />}
       /> 
        <FooterIcon linkTo={"/signup"} itemKey={"signUp"} content={"Sign Up"}    icon={<FaAmilia />}
       /> 
      </ul>
    </div>
  );
}
