import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState ,useCallback,useMemo,useEffect,useRef } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";
import { Bottom } from "./components/Bottom";
import Navbar from "./components/Navbar";
const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const events = [
    {
        title: "Makar Sankranti Festive Offer",
        allDay: true,
        start: new Date(2022, 2, 28),
        end: new Date(2022, 2, 28),
        state: "inactive"
    },
    {
        title: "20% of on ICICI Debit Cards",
        start: new Date(2022, 2, 25),
        end: new Date(2022, 2, 25),
        state : "active-high"
    },
    {
        title: "Holi Festive Offer",
        start: new Date(2022, 2, 28),
        end: new Date(2022, 2, 28),
        state: "active-low"
    },
    {
      title: "20 % off on HDFC Net Banking",
      start: new Date(2022, 2, 28),
      end: new Date(2022, 2, 28),
      state: "active-low"
  },
  {
    title: "sales at D-Mart Store",
    start: new Date(2022, 2, 28),
    end: new Date(2022, 2, 28),
    state : "active-high"
},
{
  title: "Navratri Festive Offer",
  start: new Date(2022, 3, 25),
  end: new Date(2022, 3, 25),
  state : "active-high"
},
];

function OnSelectEvent() {
  const clickRef = useRef(null)

  useEffect(() => {
    /**
     * What Is This?
     * This is to prevent a memory leak, in the off chance that you
     * teardown your interface prior to the timed method being called.
     */
    return () => {
      window.clearTimeout(clickRef?.current)
    }
  }, [])

  const onSelectEvent = useCallback((calEvent) => {
    /**
     * Here we are waiting 250 milliseconds (use what you want) prior to firing
     * our method. Why? Because both 'click' and 'doubleClick'
     * would fire, in the event of a 'doubleClick'. By doing
     * this, the 'click' handler is overridden by the 'doubleClick'
     * action.
     */
    // window.clearTimeout(clickRef?.current)
    // clickRef.current = window.setTimeout(() => {
    //   window.alert(buildMessage(calEvent, 'onSelectEvent'))
    // }, 250)
    alert(`event has been clicked`)
  }, [])

  const onDoubleClickEvent = useCallback((calEvent) => {
    /**
     * Notice our use of the same ref as above.
     */
    // window.clearTimeout(clickRef?.current)
    // clickRef.current = window.setTimeout(() => {
    //   window.alert(buildMessage(calEvent, 'onDoubleClickEvent'))
    // }, 250)
  }, [])

  const defaultDate = useMemo(() => new Date(2015, 3, 1), [])
}
function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
       <Calendar
       defaultDate={ new Date(2022,2,25)}
       defaultView={"agenda"} 
       localizer={localizer} 
       events={events} 
       startAccessor="start" 
       endAccessor="end"
       onDoubleClickEvent={onDoubleClickEvent}
       onSelectEvent={onSelectEvent}
       style={{ height: 500, margin: "50px" }} />
      <h1>i am app</h1>
      <Bottom></Bottom> 
    </div>
  );
}

export default App;
