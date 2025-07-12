import React, { useState } from "react";
import EventCard from "../components/EventCard";

export default function Home() {
  const [TagsArray, setTagsArray] = useState([2, 2, 2, 2, 22, 2, 2, 2, 2]);
  const [eventsArray, setEventsArray] = useState([1, 1, 1, 1, 1, 1, 1]);
  return (
    <div className="h-fit bg-gray-200 w-screen pb-28 px-4">
      <div className="fixed top-16 right-0 px-2 py-2 w-screen z-40 bg-gray-200">
        <div className=" flex justify-between">
          <h1 className="font-bold text-xl">Upcomming Events</h1>
          <p className="text-blue-800 text-xl">Filter</p>
        </div>

        <div className="carousel carousel-center rounded-box max-w-md space-x-2 py-4">
          {TagsArray.map((i) => (
            <div className="carousel-item">
              <div className="badge badge-neutral badge-outline">Outline</div>
            </div>
          ))}
        </div>

        <label className="select">
          <span className="label">Sort</span>
          <select>
            <option>Event Date (Earliest)</option>
            <option>Updated (Newest)</option>

            <option>Distance</option>
          </select>
        </label>
      </div>
      <div className="flex flex-col pt-52 gap-2 bg-gray-200 h-full">
        {eventsArray.map((i) => (
          <EventCard
            title={"Event title"}
            img={
              "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            }
            descrtion={"event dexcription"}
          />
        ))}
        <div className="badge badge-neutral badge-outline mt-2">
          Load More Events
        </div>
      </div>
    </div>
  );
}
