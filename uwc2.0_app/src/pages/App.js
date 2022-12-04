import './global.css'
import './App.css'
import React, {useState} from 'react';
import {Routes, Route} from "react-router-dom";
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

	const showNoti = () => toggleNoti(!notiOpen);
  const showChat = () => toggleChatBox(!chatBoxOpen);

  const [officerUserName, changeUserName] = useState("Sys admin");
  const [officerEmail, changeEmail] = useState("sysAdmin@uwc.com");
  const [officerPhone, changePhone] = useState("911420069");
  const [officerAddress, changeAddress] = useState("268 Lý Thường Kiệt, Q10, HCM");
  var storedOfficerInfos = [officerUserName, officerEmail, officerPhone, officerAddress];
  const officerInfoModifiers = [changeUserName, changeEmail, changePhone, changeAddress];

  return (
    <React.Fragment>
      <div className='HomeContainer'>
        <SideNavBar/>
        <div className='MainContent'>
          <UpperBar userName = {officerUserName} />
          <Routes>
            <Route path="/Home" element={<HomePage/>} exact='True' />
            <Route path="/PersonnelManage" element={<PersonnelManage/>} exact='True' />
            <Route path="/MCPManage" element={<MCPManage/>} exact='True' />
            <Route path="/VehicleManage" element={<VehicleManage/>} exact='True' />
            <Route path="/AccountManage" 
              element={<AccountManage officerInfos = {storedOfficerInfos} officerInfoModifiers = {officerInfoModifiers} />} 
              exact='True' 
            />
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
          <div className={chatBoxOpen ? 'ChatBoxPannel active' : 'ChatBoxPannel'}>
            <ChatBox />
          </div>
        </div>
      </div>
    </React.Fragment>  
  );
}

export default App;
