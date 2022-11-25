import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './pages/Login';
import App from './pages/App';
import PersonnelManage from './pages/PersonnelManage';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import SideNavBar from './components/SideNavBar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} exact='True' />
        <Route path="/*" element={<App/>} exact='True' />
      </Routes>
    </Router>
  </React.Fragment>
);

