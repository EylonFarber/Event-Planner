import React from "react";
import { Routes, Route, Link } from "react-router";

import Home from "/routes/Home";
import SignIn from "/routes/SignIn";
import SignUp from "./routes/SignUp";
import CreateEvent from "/routes/CreateEvent";
import Error from "/routes/Error";

export default function Footer() {
  return (
    <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="eventdetails" element={<EventDetails />} />
            <Route path="createevent" element={<CreateEvent />} />
            <Route path="*" element={<Error/>}/>
          </Routes>
    <ul className="flex justify-around items-center menu menu-horizontal bg-gray-300 rounded-box mt-6 h-24 w-full fixed left-0 bottom-0 md:hidden">
     <Link to={"/Home"} key = 'home'> <li> 
        <a className="tooltip" data-tip="Home">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </a>
        <p className="text-[10px] self-center">Home</p>
      </li>
            </Link>
<Link to={"/Home"} key = 'explore'>
      <li>
        <a className="tooltip" data-tip="Explore">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </a>
        <p className="text-[10px] self-center">Explore</p>
      </li>
                  </Link>
<Link to={"/routes/CreateEvent"} key = 'createEvent'>
      <li>
        <a className="tooltip" data-tip="create">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
        </a>
        <p className="text-[10px] self-center">Create</p>
      </li>
      
                  </Link>
<Link to={"/routes/Home"} key = 'notifications'>
      <li>
        <a className="tooltip" data-tip="Notifications">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </a>
        <p className="text-[10px] self-center">Notifications</p>
      </li>
                  </Link>
<Link to={"/routes/Home"} key = 'profile'>
      <li>
        <a className="tooltip" data-tip="Profile">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </a>
        <p className="text-[10px] self-center">Profile</p>
      </li>
      </Link>
    </ul>
    </div>
  );
}

        // <Route path="/" element={<Home />} />
        // <Route path="signin" element={<SignIn />} />
        // <Route path="signup" element={<SignUp />} />
        // <Route path="eventdetails" element={<EventDetails />} />
        // <Route path="createevent" element={<CreateEvent />} />
