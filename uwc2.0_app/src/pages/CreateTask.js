import "./global.css";
import "./CreateTask.css";
import React from "react";
import {Link} from "react-router-dom";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

// imports for Leaflet and React-Leaflet

import L from 'leaflet';
import 'leaflet-routing-machine';
import Map from '../components/Map';
const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
}));


function CreateTask() {
  const [value, setValue] = React.useState(dayjs('2022-12-9T14:11:54'));

	const handleChange = (newValue) => {
		setValue(newValue);
	};

	const [timeEnd, setTimeEnd] = React.useState(dayjs('2022-12-9T14:11:54'));

	const handleTimeEnd = (newValue) => {
		setTimeEnd(newValue);
	};


	const data = [
		{
			ID: "J0001",
			Name: "Long Le Hoang",
			ava: "chen.jpg"
		},
		{
			ID: "J0002",
			Name: "Nguyen Ngo Quang",
			ava: "seungri.jpg"
		},
		{
			ID: "J0003",
			Name: "Khoi Le Quang",
			ava: "suho.jpg"
		},
		{
			ID: "J0004",
			Name: "Thien Luu Trinh",
			ava: "gdragon.jpg"
		},
		{
			ID: "J0005",
			Name: "Phuc Nguyen Nho Gia",
			ava: "sehun.jpg"
		},
		{
			ID: "C0001",
			Name: "Nguyen Bao Tran",
			ava: "irene.jpg"
		},
		{
			ID: "C0002",
			Name: "Nguyen Van A",
			ava: "momo.jpg"
		},
		{
			ID: "C0003",
			Name: "Le Quang B",
			ava: "nayeon.jpg"
		},
		{
			ID: "C0004",
			Name: "Dao Phuc C",
			ava: "top.jpg"
		},
		{
			ID: "C0005",
			Name: "Do Ngoc Bao D",
			ava: "v.jpg"
		}
	]

	const phuongTienData = [
		{
			ID: "T0112",
			Type: "Xe chở rác",
			photo: "xeChoRac.png"
		},
		{
			ID: "T0123",
			Type: "Xe chở rác",
			photo: "xeChoRac.png"
		},
		{
			ID: "T0824",
			Type: "Xe chở rác",
			photo: "xeChoRac.png"
		},
		{
			ID: "T1235",
			Type: "Xe chở rác",
			photo: "xeChoRac.png"
		},
		{
			ID: "S02931",
			Type: "Xe Đẩy",
			photo: "troller1.png"
		},
		{
			ID: "S01242",
			Type: "Xe Đẩy",
			photo: "troller2.png"
		},
		{
			ID: "S08853",
			Type: "Xe Đẩy",
			photo: "troller1.png"
		},
	]
	// const [destination, setDestination] = React.useState([])
	const listNhanVien = data.map((item) =>
		<MenuItem key={item.ID} value={item.ID}>{item.ID}</MenuItem>
	)

	const [nhanVien, setNhanVien] = React.useState('');

	const handleNhanVien = (event) => {
		setNhanVien(event.target.value);
	};

	const [phuongTien, setPhuongTien] = React.useState('');

	const handlePhuongTien = (event) => {
		setPhuongTien(event.target.value);
	};

	const listPhuongTien = phuongTienData.filter(phuongTien => phuongTien.Type === (nhanVien[0] === 'C' ? 'Xe chở rác' : 'Xe Đẩy')).map((item) =>
		<MenuItem key={item.ID} value={item.ID}>{item.ID}</MenuItem>
	)

	const foundAva = function () {
		return data.find(obj => obj.ID === nhanVien)?.ava;
	}

	const foundName = function () {
		return data.find(obj => obj.ID === nhanVien)?.Name;
	}

	const foundImg = function () {
		return phuongTienData.find(obj => obj.ID === phuongTien)?.photo;
	}

	const foundType = function () {
		return phuongTienData.find(obj => obj.ID === phuongTien)?.Type;
	}

	React.useEffect(() => {
		setPhuongTien('');
	}, [nhanVien])

	console.log(Array.from(nhanVien)[0])

	console.log(L)

	React.useEffect(() => {
		setPhuongTien('');
	}, [nhanVien])
	
  return (
    <>
	<script src="https://unpkg.com/leaflet@1.8.0/dist/leaflet.js"></script>
	<script src="https://unpkg.com/leaflet-routing-machine@latest/dist/leaflet-routing-machine.js"></script>
      <div className="CreateTask">
	  <Box sx={{ flexGrow: 1 }}>
				<Grid container spacing={3} >
					<Grid item xs={6} md={5}>
						<LocalizationProvider dateAdapter={AdapterDayjs}>
							<Stack spacing={3}>

								<DateTimePicker
									label="Ngày, giờ bắt đầu"
									value={value}
									onChange={handleChange}
									renderInput={(params) => <TextField {...params} />}
								/>
								<DateTimePicker
									label="Ngày, giờ kết thúc"
									value={timeEnd}
									onChange={handleTimeEnd}
									renderInput={(params) => <TextField {...params} />}
								/>
							</Stack>
						</LocalizationProvider>
					</Grid>
					<Grid item xs={6} md={7}>
						<Grid container spacing={3} >
							<Grid item xs={6}>
								{/* <Item> */}
								<Box sx={{ minWidth: 120 }} style={{ paddingTop: "1px" }}>
									<FormControl fullWidth>
										<InputLabel id="demo-simple-select-label">ID nhân viên</InputLabel>
										<Select
											labelId="demo-simple-select-label"
											id="demo-simple-select"
											value={nhanVien}
											label="Nhan vien ID"
											onChange={handleNhanVien}
										>
											{listNhanVien}

										</Select>
									</FormControl>
								</Box>
								<Grid container spacing={0} >
									<Grid item xs={12} md={12}>
										{nhanVien && <img style={{ height: "8em", padding: "20px" }} src={`image/avatar/${foundAva()}`} alt='imageAva'></img>}
									</Grid>
									<Grid item xs={12} md={12}>
										<Grid container spacing={3} style={{ padding: "10px" }}>
											<Grid item xs={12} md={12}>
												{nhanVien ? `ID: ${nhanVien}` : ''}
											</Grid>
											<Grid item xs={12} md={12}>
												{nhanVien ? `Tên: ${foundName()}` : ''}
											</Grid>
										</Grid>
									</Grid>
								</Grid>
							</Grid>
							<Grid item xs={6}>
								<Box sx={{ minWidth: 120 }} style={{ paddingTop: "1px" }} s>
									<FormControl fullWidth>
										<InputLabel id="demo-simple-select-label">ID phương tiện</InputLabel>
										<Select
											labelId="demo-simple-select-label"
											id="demo-simple-select"
											value={phuongTien}
											label="phuongTien"
											onChange={handlePhuongTien}
										>
											{nhanVien && listPhuongTien}
										</Select>
									</FormControl>
								</Box>
								<Grid container spacing={0} >
									<Grid item xs={12} md={12}>
										{phuongTien && <img style={{ height: "8em", padding: "20px" }} src={`image/trash/${foundImg()}`} alt='imageAva'></img>}
									</Grid>
									<Grid item xs={12} md={12}>
										<Grid container spacing={3} style={{ padding: "10px" }}>
											<Grid item xs={12} md={12}>
												{phuongTien ? `Loại: ${foundType()}` : ''}
											</Grid>
											<Grid item xs={12} md={12}>
												{phuongTien ? `ID: ${phuongTien}` : ''}
											</Grid>
										</Grid>
									</Grid>
								</Grid>
							</Grid>
							{/* </Item> */}
						</Grid>
					</Grid>
				</Grid>

		</Box >
		<Grid container spacing={3}>
          <Grid item xs={8}>
			  	<Map/>
          </Grid>
        </Grid>
		<Grid item xs={6} md={12}>
			<Link to="/Home">
				<Item>
          <button 
            style={{
              'background-color':"white",
              'color':'black',
              "font-size": "1.5em",
              'font-weight': '600'	
					  }}
            onClick= {() => alert('Đã tạo công việc mới !')}
          >
            Xác nhận
          </button>	
				</Item>
			</Link>
		</Grid>

      </div>
    </>
  );
}

export default CreateTask;
