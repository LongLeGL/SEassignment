import './global.css'
import './App.css'
import React from 'react';
import {Routes, Route, Link} from "react-router-dom";
import PersonnelManage from './PersonnelManage';
import MCPManage from './MCPManage';
import VehicleManage from './VehicleManage';
import AccountManage from './AccountManage';
import SideNavBar from '../components/SideNavBar';
import UpperBar from '../components/UpperBar';
import HomePage from './HomePage';

function App() {
  return (
    <React.Fragment>
      <div className='HomeContainer'>
        <SideNavBar/>
        <div className='MainContent'>
          <UpperBar/>
          <Routes>
            <Route path="/Home" element={<HomePage/>} exact='True' />
            <Route path="/PersonnelManage" element={<PersonnelManage/>} exact='True' />
            <Route path="/MCPManage" element={<MCPManage/>} exact='True' />
            <Route path="/VehicleManage" element={<VehicleManage/>} exact='True' />
            <Route path="/AccountManage" element={<AccountManage/>} exact='True' />
          </Routes>
        </div>
      </div>
    </React.Fragment>  
  );
}

export default App;
