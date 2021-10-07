import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'


export default function MyCalender(props) {

  const changeDate = (e) => {
    props.setDate(e)
  }
  return (
    <div className="section">
      <Calendar 
      value={props.date}
      onChange={changeDate}
      />
    </div>
  )
}

