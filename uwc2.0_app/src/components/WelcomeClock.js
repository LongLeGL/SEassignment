import React from 'react';
import { useState, useEffect } from 'react';
import './WelcomeClock.css'
import '../pages/global.css'

function WelcomeClock(props) {
    // state = {  };
    var [DateTime, setDateTime] = useState(new Date());
	var date = DateTime.getDate() + '/' + (DateTime.getMonth()+1) + '/' + DateTime.getFullYear();
	var time = DateTime.toLocaleTimeString('fr-FR');
    var hour = DateTime.getHours()

    var welcomemsg;
    if (hour < 12)
        welcomemsg = "Chào buổi sáng";
    else if (hour < 18)
        welcomemsg = "Chào buổi chiều";
    else welcomemsg = "Chào buổi tối";

    function updateClock(){
        DateTime = setDateTime(new Date());
    }

    useEffect(() => {
        const timerId = setInterval(updateClock, 1000);
        return function cleanup() {
          clearInterval(timerId);
        };
      });
    
    return (
        <div>
            <div className='UpbarWelcome'>{welcomemsg}, {props.userName}!</div>
            <div className='UpbarClock'>{date} | {time}</div>
        </div>
    );

}
 
export default WelcomeClock;