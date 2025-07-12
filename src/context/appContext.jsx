import axios from "axios";
import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // states and functions go here and in Value attribute

  const [allEvents, setAllEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function getAllEvents() {
    axios.get("http://localhost:3001/api/events?limit=1000").then((x) => {
      setAllEvents(x.data.results);
      setLoading(false);
    });
  }

  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        allEvents,
        setAllEvents,
        getAllEvents,
        loading,
        setLoading,
        error,
        setError,
        errorMessage,
        setErrorMessage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
