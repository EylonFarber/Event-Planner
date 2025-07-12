import React from "react";
import Button from "./Button";

export default function EventCard({ img, title, descrtion}) {
  return (
    <div className="card bg-base-100 w-80 shadow-sm">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{descrtion}</p>
        <div className="card-actions justify-end">
          <Button text='details' />
        </div>
      </div>
    </div>
  );
}
