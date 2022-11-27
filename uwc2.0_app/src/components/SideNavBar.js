import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/global.css';
import './SideNavBar.css';
import Tabs from './Tabs';
import logo from '../img/logo.png';

function SideNavBar() {
    return (
		<div className='SideNavBar'>
			<div className='AppName'>
				<img src={logo} alt='logo'/>
				<div>UWC 2.0</div>
			</div>

			<Link to="/CreateTask">
				<button>Tạo công việc</button>
			</Link>

			<Tabs>
				<div label="Trang chủ" path="/Home"/>
				<div label="Quản lí nhân viên" path="/PersonnelManage"/>
				<div label="Quản lí điểm thu gom" path="/MCPManage"/>
				<div label="Quản lí phương tiện" path="/VehicleManage"/>
				<div label='_separator' />
				<div label="Quản lí tài khoản" path="/AccountManage" />
			</Tabs>
			<Link to="/">Dang xuat</Link>
		</div>
    );
}

export default SideNavBar;