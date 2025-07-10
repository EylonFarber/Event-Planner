import axios from "axios";
import React from "react";
import { useNavigate } from "react-router";

export default function EventForm() {
  const navigate = useNavigate();

  function createEventHandler(e) {
    const titleInput = e.target.eventTitle.value;
    const descriptionInput = e.target.description.value;
    const dateInput = e.target.date.value;
    const locationInput = e.target.location.value;

    e.preventDefault();
    axios
      .post("http://localhost:3001/api/events", 
        {
        title: "Event Title",
        description: "Some Description for the Event",
        date: "2025-07-10T19:18:13.625Z",
        location: "Schloßbezirk 10, 76131 Karlsruhe",
        latitude: 8.404746955649602,
        longitude: 49.01438194665317,
      })
      .then((x) => {
        if (x.data) {
          console.log(x.data);
        }
      }).catch((e) => {
        console.log("Error ");
        console.log(e);
      });;
  }

  return (
    <form onSubmit={createEventHandler}>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mt-18 mx-auto">
        <legend className="fieldset-legend">Create New Event </legend>

        <label className="label">Event Title</label>
        <input
          name="eventTitle"
          type="text"
          className="input"
          placeholder="Enter event title"
        />

        <lable className="lable">Description</lable>
        <textarea
          name="description"
          className="textarea h-24"
          placeholder="Describe your event"
        ></textarea>

        <label className="label">Date</label>
        <input
          name="date"
          type="date"
          className="input"
          placeholder="Select date"
        />

        <label className="label">Time</label>
        <input
          name="time"
          type="time"
          className="input"
          placeholder="Select time"
        />

        <label className="label">Location</label>
        <input
          name="location"
          type="text"
          className="input"
          placeholder="Enter location"
        />

        <button className="btn btn-neutral mt-4" type="submit">
          Create Event
        </button>
      </fieldset>
    </form>
  );
}
