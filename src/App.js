import Timeline from "./components/Timeline";
import MyCalender from "./components/MyCalender";
import { useState } from "react";
import "./css/app.css";
import EventsList from "./components/EventsList";
function App() {
  const [date, setDate] = useState(new Date())
  return (
    <div className="main-container">
      <MyCalender setDate={setDate} date={date}/>
      <Timeline date={date} />
      <EventsList date={date}/>
    </div>
  );
}

export default App;
