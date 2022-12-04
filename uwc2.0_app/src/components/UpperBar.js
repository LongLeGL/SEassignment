import React from 'react';
import './UpperBar.css'
import '../pages/global.css'
import WelcomeClock from './WelcomeClock';

function UpperBar (props) {
	return (
		<div className='UpperBar'>
			<WelcomeClock userName = {props.userName}/>
		</div>
	);
}

export default UpperBar;