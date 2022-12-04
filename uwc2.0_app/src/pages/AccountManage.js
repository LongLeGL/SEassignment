import './global.css'
import './AccountManage.css';
import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

function AccountManage(props) {
	var currentInfos = props.officerInfos;
	var officerInfoModifiers = props.officerInfoModifiers;

	const [curr_officerUserName, update_currUserName] = useState("Sys admin");
	const [curr_officerEmail, update_currEmail] = useState("sysAdmin@uwc.com");
	const [curr_officerPhone, update_currPhone] = useState("911420069");
	const [curr_officerAddress, update_currAddress] = useState("268 Lý Thường Kiệt, Q10, HCM");

	const handleNameChange  = (e) => {
		update_currUserName(e.target.value);
	};
	const handleEmailChange  = (e) => {
		update_currEmail(e.target.value);
	};
	const handlePhoneChange  = (e) => {
		update_currPhone(e.target.value)
	};
	const handleAddressChange  = (e) => {
		update_currAddress(e.target.value);
	};
	
	return (
		<div className='AccountManage'>
			<TextField 
				id="standard-start-adornment" label="Tên" variant="outlined" defaultValue={currentInfos[0]}
				sx={{ m: 1, width: '55vw', margin: 'auto' }} color="secondary"
				onChange = {handleNameChange}
			/>
			<TextField 
				id="outlined-basic" label="Email" variant="outlined"  defaultValue={currentInfos[1]}
				sx={{ m: 1, width: '55vw', margin: 'auto' }}
				onChange = {handleEmailChange}
			/>
			<TextField 
				id="standard-start-adornment" label="Số điện thoại" variant="outlined" defaultValue={currentInfos[2]}
				sx={{ m: 1, width: '55vw', margin: 'auto' }}
				InputProps={{
					startAdornment: <InputAdornment position="start">(+84)</InputAdornment>,
				}}
				onChange = {handlePhoneChange}
			/>
			<TextField 
				id="outlined-basic" label="Địa chỉ" variant="outlined" defaultValue={currentInfos[3]}
				sx={{ m: 1, width: '55vw', margin: 'auto' }}
				onChange={handleAddressChange}
			/>
			<button className='ModifyOfficerInfo'
				onClick={() => {
					officerInfoModifiers[0](curr_officerUserName);
					officerInfoModifiers[1](curr_officerEmail);
					officerInfoModifiers[2](curr_officerPhone);
					officerInfoModifiers[3](curr_officerAddress);
				}}
			>
				Chỉnh sửa
			</button>
		</div>
	);
}

export default AccountManage;