import axios from "axios";
import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // states and functions go here and in Value attribute

  const [allEvents, setAllEvents] = useState([]);

  function getAllEvents() {
    axios
      .get("http://localhost:3001/api/events")
      .then((x) => {setAllEvents(x.data.results)
        console.log(x.data.results)
      });
  
    }

    return (
    <AppContext.Provider value={{ allEvents, setAllEvents, getAllEvents }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
