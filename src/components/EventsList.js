import { events } from "../db/events";
import moment from "moment";
import EventCard from "./EventCard";

export default function EventsList(props) {
    const todayEvents =  events.filter((event)=>{
        return(moment(event.start).format("DD-MM-YYYY") === moment(props.date).format("DD-MM-YYYY") );
    });
    return (
        <div className="section">
            <h4 style={{marginLeft:"1rem"}}>All Day Event(s)</h4>
            {todayEvents.map((event,index)=>{
                 let backgroundColor;
                 if (event.type === "due-date") {
                   backgroundColor = "#fce883";
                 } else if (event.type === "content-publish") {
                   backgroundColor = "#ff9185";
                 } else {
                   backgroundColor = "#70db7b";
                 }
                return <EventCard key={index} event={event} bgColor={backgroundColor}/>
            })}
        </div>
    )
}
