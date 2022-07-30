import React, { useState, useEffect, useCallback } from "react";
import ReactDOM from "react-dom/client";

// 컴포넌트 import
import AddApointments from "./Components/AddApointment";
import AddInfo from "./Components/AddInfo";
import Search from "./Components/Search";

// 목업
// import appointData from "./data.json";

// 소스파일
import "./index.css";
import { BiCalendarPlus } from "react-icons/bi";

function App() {
  // state

  // list
  const [appointList, setAppointList] = useState([]);
  // serch

  // callBack
  const fetchData = useCallback(() => {
    fetch("./data.json")
      .then(Response => Response.json())
      .then(data => setAppointList(data));
  }, []);

  // useEffect
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <article>
      <h3>
        <BiCalendarPlus />
        예약시스템
      </h3>
      <AddApointments />
      <Search />
      <div id="list">
        <ul>
          {appointList.map((appointment) => (
            <AddInfo 
            key={appointment.id} 
            appoint={appointment} 
            onDeleteAppoint= {
              appointmentId => setAppointList(appointList.filter(appointment => appointment.id !== appointmentId))
            }/>
          ))}
        </ul>
      </div>
    </article>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
