import React from "react";
import Button from "./Button";
import { Link } from "react-router";


export default function EventCard({cardKey, img, title, descrtion, linkTo}) {
  return (
    <div key={cardKey} className="card bg-base-100 w-80 shadow-sm m-auto">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{descrtion}</p>
        <div className="card-actions justify-end">
    <Link to={linkTo}>

          <Button text='details' />
          </Link>
        </div>
      </div>
    </div>
  );
}
