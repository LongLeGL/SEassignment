import React, { useState } from 'react';
import './UpperBar.css'
import '../pages/global.css'
import WelcomeClock from './WelcomeClock';
import ChatIcon from '../img/comment.svg';
import NotiIcon from '../img/bell.svg';

function UpperBar () {
	return (
		<div className='UpperBar'>
			<WelcomeClock />
		</div>
	);
}

export default UpperBar;