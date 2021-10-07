import "../css/event.css"
const Event = ({ event }) => (
  <div className="event-card">
    {(event.type === "due-date" || event.type==="content-publish")?<p className="event-info"><strong>Entry</strong>: {event.entry}</p> : null}
    {(event.type === "due-date" ? (<p className="event-info"><strong>Move To</strong>: {event.moveTo}</p>) : null)}
    {(event.type === "due-date" ? (<p className="event-info"><strong>Assigned By</strong>: {event.assignedBy}</p>) : null)}
    {(event.type === "content-publish"  ? (<p className="event-info"><strong>Environment</strong>: {event.environment}</p>) : null)}
    {(event.type === "release"  ? (<p className="event-info"><strong>Release</strong>: {event.release}</p>) : null)}
    {(event.type === "content-publish" || event.type === "release" ? (<p className="event-info"><strong>Status</strong>: {event.status}</p>) : null)}
  </div>
);

export default Event;