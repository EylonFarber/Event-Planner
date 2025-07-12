import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import EventCard from "../components/EventCard";

export default function EventDetails() {
  const { id } = useParams();
  const [chosenEvent, setChosenEvent] = useState({});

  function getChosenEvent() {
    axios.get(`http://localhost:3001/api/events/${id}`).then((x) => {
      setChosenEvent(x.data);
    });
  }
  useEffect(() => {
    getChosenEvent();
  }, []);

  return (
    <div className="mt-18">
      <EventCard
        linkTo={`/eventdetails/${chosenEvent.id}`}
        cardKey={chosenEvent.id}
        title={chosenEvent.title}
        img={
          "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        }
        descrtion={chosenEvent.description}
      />
    </div>
  );
}
