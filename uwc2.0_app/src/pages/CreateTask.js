import './global.css'
import './CreateTask.css'
import React from 'react';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
	padding: theme.spacing(1),
	textAlign: 'center',
}));



function CreateTask() {

	const [value, setValue] = React.useState(dayjs('2022-12-1T21:11:54'));

	const handleChange = (newValue) => {
		setValue(newValue);
	};


	const [id, setid] = React.useState('');

	const handleChange2 = (event) => {
		setid(event.target.value);
	};

	const [age, setAge] = React.useState('');

	const handleChange3 = (event) => {
		setAge(event.target.value);
	};

	const data = [
		{
			ID: "J0001",
			Name: "Long Le Hoang",
			mail: "longle69@uwc.com",

		},
		{
			ID: "J0002",
			Name: "Nguyen Ngo Quang",
			mail: "longle69@uwc.com",
		},
		{
			ID: "J0003",
			Name: "Khoi Le Quang",
			mail: "longle69@uwc.com",
		},
		{
			ID: "J0004",
			Name: "Thien Luu Trinh",
			mail: "longle69@uwc.com",
		},
		{
			ID: "J0005",
			Name: "Phuc Nguyen Nho Gia",
			mail: "longle69@uwc.com",
		},
		{
			ID: "C0001",
			Name: "Nguyen Bao Tran",
			mail: "longle69@uwc.com",
		},
		{
			ID: "C0002",
			Name: "Nguyen Van A",
			mail: "longle69@uwc.com",
		},
		{
			ID: "C0003",
			Name: "Le Quang B",
			mail: "longle69@uwc.com",
		},
		{
			ID: "C0004",
			Name: "Dao Phuc C",
			mail: "longle69@uwc.com",
		},
		{
			ID: "C0005",
			Name: "Do Ngoc Bao D",
			mail: "longle69@uwc.com",
		}
	]

	const listNhanVien = data.map((item) =>
		<MenuItem key={item.ID} value={item.ID}>{item.ID}</MenuItem>
	)

	const [nhanVien, setNhanVien] = React.useState('');

	const handleNhanVien = (event) => {
		setNhanVien(event.target.value);
	};

	console.log({ nhanVien })

	return (
		<div className='CreateTask'>
			<Box sx={{ flexGrow: 1 }}>
				<Grid container spacing={3} >
					<Grid item xs={6} md={5}>
						<LocalizationProvider dateAdapter={AdapterDayjs}>
							<Stack spacing={3}>
								<DesktopDatePicker
									label="Date desktop"
									inputFormat="MM/DD/YYYY"
									value={value}
									onChange={handleChange}
									renderInput={(params) => <TextField {...params} />}
								/>
								<MobileDatePicker
									label="Date mobile"
									inputFormat="MM/DD/YYYY"
									value={value}
									onChange={handleChange}
									renderInput={(params) => <TextField {...params} />}
								/>
								<TimePicker
									label="Time"
									value={value}
									onChange={handleChange}
									renderInput={(params) => <TextField {...params} />}
								/>
								<DateTimePicker
									label="Date&Time picker"
									value={value}
									onChange={handleChange}
									renderInput={(params) => <TextField {...params} />}
								/>
							</Stack>
						</LocalizationProvider>
					</Grid>
					<Grid item xs={6} md={7}>
						{/* <Item>xs=6 md=4</Item> */}
						<Item>Chọn phương tiện
							<Box sx={{ minWidth: 120 }}>
								<FormControl fullWidth>
									<InputLabel id="demo-simple-select-label">ID</InputLabel>
									<Select
										labelId="demo-simple-select-label"
										id="demo-simple-select"
										value={age}
										label="Age"
										onChange={handleChange3}
									>
										<MenuItem value={'T012'}>T012</MenuItem>
										<MenuItem value={'T013'}>T013</MenuItem>
										<MenuItem value={'T014'}>T014</MenuItem>
									</Select>
								</FormControl>
							</Box>
							<div style={{ height: "40px" }}>

							</div>
							Chọn nhân viên
							<Box sx={{ minWidth: 120 }}>
								<FormControl fullWidth>
									<InputLabel id="demo-simple-select-label">ID</InputLabel>
									<Select
										labelId="demo-simple-select-label"
										id="demo-simple-select"
										value={id}
										label="id"
										onChange={handleNhanVien}
									>
										{/* <MenuItem value={'C132451'}>C132451</MenuItem>
										<MenuItem value={'C132452'}>C132452</MenuItem>
										<MenuItem value={'C132453'}>C132453</MenuItem> */}
										{listNhanVien}

									</Select>
								</FormControl>
							</Box>

						</Item>
					</Grid>
					<Grid item xs={6} md={12}>
						<Item>
							<Button>
								Xác nhận
							</Button>
						</Item>
					</Grid>
				</Grid>
			</Box>
		</div >
	);
}

export default CreateTask;