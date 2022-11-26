import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/global.css';
import './SideNavBar.css';
import logo from '../img/logo.png';

function SideNavBar() {
    return (
			<div className='SideNavBar'>
				<div className='UpperSideNav'>
					<div className='AppName'>
						<img src={logo} alt='logo'/>
						<div>UWC 2.0</div>
					</div>

					<Link to="/CreateTask">
						<button>Tạo công việc</button>
					</Link>

					<Link to="/Home">
						Trang chủ
					</Link>
					<Link to="/PersonnelManage">
						Quản lí nhân viên
					</Link>
					<Link to="/MCPManage">
						Quản lí điểm thu gom
					</Link>
					<Link to="/VehicleManage">
						Quản lí phương tiện
					</Link>
				</div>

				<div className='LowerSideNav'>
					<Link to="/AccountManage">
						<button>Quản lí tài khoản</button>
					</Link>
					<Link to="/">
						<button>Đăng xuất</button>
					</Link>
				</div>
			</div>
    );
}

export default SideNavBar;