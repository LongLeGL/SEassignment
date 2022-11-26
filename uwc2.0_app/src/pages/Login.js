import './Login.css';
import './global.css'
import React from 'react';
import {Link} from "react-router-dom";
import logo from '../img/logo.png';

function Login() {
  return (
    <React.Fragment>
      <div className='LoginPage'>
        <div className='AppName'>
          <img src={logo} alt='logo'/>
          <div>UWC 2.0</div>
		    </div>
        <form>
          <div className='InputContainer'>
            <label>Tài khoản</label>
            <input type="text" name="name"/>
          </div>
          <div className='InputContainer'>
            <label>Mật khẩu</label>
            <input type="password" name="passwork"/>
          </div>
        </form>
        <div  className='LoginButton'>
          <Link to="/Home">
            <button>Đăng nhập</button>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Login;
