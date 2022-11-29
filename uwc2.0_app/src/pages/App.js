import './global.css'
import './App.css'
import React, {useState} from 'react';
import {Routes, Route, Link} from "react-router-dom";
import PersonnelManage from './PersonnelManage';
import MCPManage from './MCPManage';
import VehicleManage from './VehicleManage';
import AccountManage from './AccountManage';
import SideNavBar from '../components/SideNavBar';
import UpperBar from '../components/UpperBar';
import HomePage from './HomePage';
import CreateTask from './CreateTask';
import ChatBox from '../components/ChatBox';

function App() {
  const [chatBoxOpen, toggleChatBox] = useState(false);
	const [notiOpen, toggleNoti] = useState(false);

	const showNoti = () => toggleNoti(!notiOpen)
  const showChat = () => toggleChatBox(!chatBoxOpen)

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
            <Route path="/CreateTask" element={<CreateTask/>} exact='True' />
          </Routes>
        </div>

        <div className='UpperBarWidgets'>
          <button className='OpenChatBtn' onClick={showChat} />
          <button className='OpenNotiBtn' onClick={showNoti} />
        </div>

        <div className={notiOpen ? 'NotiPannel active' : 'NotiPannel'}  >
          <em>No new notifications</em>
        </div>
        <div className={chatBoxOpen ? 'ChatBoxContainer active' : 'ChatBoxContainer'}>
          <ChatBox />
        </div>
      </div>
    </React.Fragment>  
  );
}

export default App;
