import React, { useState } from "react";

export default function Home() {
  const [TagsArray, setTagsArray] = useState([2,2,2,2,22,2,2,2,2,])
  const [eventsArray, setEventsArray] = useState([1, 1, 1, 1, 1, 1, 1]);
  return (
    <div className="h-fit bg-gray-200 w-screen pb-28 px-4">
      <div className="fixed top-16 right-0 px-2 py-2 w-screen z-40 bg-gray-200">
        <div className=" flex justify-between">
          <h1 className="font-bold text-xl">Upcomming Events</h1>
          <p className="text-blue-800 text-xl">Filter</p>
        </div>

        <div className="carousel carousel-center rounded-box max-w-md space-x-2 py-4">
        
          {TagsArray.map(i => (<div className="carousel-item">
            <div className="badge badge-neutral badge-outline">Outline</div>
          </div>))}

        </div>

        <label className="select">
          <span className="label">Type</span>
          <select>
            <option>Date (Newes)</option>
            <option>Distance</option>
          </select>
        </label>
      </div>
      <div className="flex flex-col pt-52 gap-2 bg-gray-200 h-full">
        {eventsArray.map(i => (
          <div className="card bg-base-100 w-80 shadow-sm">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Card Title</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
              <div className="badge badge-neutral badge-outline mt-2">Load More Events</div>

      </div>
    </div>
  );
}
