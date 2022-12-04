import './global.css'
import './HomePage.css'
import React from 'react';

function HomePage() {
	return (
		<div className='HomePage'>
			<div className='WeeklyReportSection'>
				<span>Tóm tắt công việc trong tuần</span>
				<span>Đã xong: 569</span>
			</div>

			<div className='ActivitiesTable'>
				Các hoạt động mới nhất
			</div>
		</div>
	);
}

export default HomePage;