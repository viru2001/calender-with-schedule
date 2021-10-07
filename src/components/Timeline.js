import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useEffect } from "react";
import "../css/Timeline.css";

import { events } from "../db/events";
import Event from "./Event";
const localizer = momentLocalizer(moment);

const resourceMap = [{ resourceId: 1 }, { resourceId: 2 }, { resourceId: 3 }];

export default function Timeline(props) {
  const removeTimelineHeader = () => {
    const removeElements = (elms) => elms.forEach((el) => el.remove());
    removeElements(document.querySelectorAll(".rbc-time-header"));
  };
  useEffect(() => {
    removeTimelineHeader();
  }, []);
  return (
    <div className="section">
      <h1>
        {moment(props.date).format("dddd") +
          " " +
          moment(props.date).format("LL")}
      </h1>
      <Calendar
        events={events}
        components={{
          event: Event,
        }}
        eventPropGetter={(event) => {
          let backgroundColor;
          if (event.type === "due-date") {
            backgroundColor = "#fce883";
          } else if (event.type === "content-publish") {
            backgroundColor = "#ff9185";
          } else {
            backgroundColor = "#70db7b";
          }
          let border = "none";
          return { style: { backgroundColor, border } };
        }}
        localizer={localizer}
        defaultView={["day"]}
        views={["day"]}
        step={30}
        startAccessor="start"
        endAccessor="end"
        defaultDate={new Date(2021, 9, 7)}
        resources={resourceMap}
        resourceIdAccessor="resourceId"
        style={{ height: "75vh", width: 850 }}
        toolbar={false}
        getNow={() => props.date}
        date={props.date}
      />
      <div className="events-info">
        <div class="foo yellow"></div>
        <p>DUE DATE</p>
        <div class="foo red"></div>
        <p>CONTENT PUBLISH</p>
        <div class="foo green"></div>
        <p>RELEASE</p>
      </div>
    </div>
  );
}
