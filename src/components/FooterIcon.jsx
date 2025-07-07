import React, { Children } from "react";
import { Routes, Route, Link } from "react-router";
import { FaAmilia } from "react-icons/fa6";

export default function FooterIcon({ linkTo, itemKey, content, icon }) {
  return (
    <Link to={linkTo} key={itemKey}>
      {" "}
      <li>
        <p>{icon}</p>
        <p className="text-[10px] self-center">{content}</p>
      </li>
    </Link>
  );
}
