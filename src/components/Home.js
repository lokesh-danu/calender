import React,{ useState } from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

const Home = () => {
    const [date, setDate] = useState(new Date());
    return ( 
        <>
        <Calendar
            value={date}
            onChange = {e=>{setDate(e)}}
            defaultView ="year"
            />
            <br /><br /><hr />
        
            
        </>
     );
}
 
export default Home;