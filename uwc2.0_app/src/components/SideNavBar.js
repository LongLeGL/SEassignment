import React from 'react';
import { Link } from 'react-router-dom';
import './SideNavBar.css'

function SideNavBar() {
    return (
      <React.Fragment>
				<div className='SideNavBar'>
					<Link to="/Home">
						Trang chu
					</Link>
					<Link to="/PersonnelManage">
						Nhan vien
					</Link>
					<Link to="/MCPManage">
						Diem thu gom
					</Link>
					<Link to="/VehicleManage">
						Phuong tien
					</Link>
					<Link to="/AccountManage">
						<button>Tai khoan</button>
					</Link>
					<Link to="/">
						<button>Dang xuat</button>
					</Link>
				</div>
			</React.Fragment>
    );
}

export default SideNavBar;