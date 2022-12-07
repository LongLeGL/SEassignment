import "./global.css";
import "./CreateTask.css";
import React from "react";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button, requirePropFactory } from "@mui/material";

// imports for Leaflet and React-Leaflet
import marker from '../img/marker.png';
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from "react-leaflet";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
}));

const bachKhoaLat = 10.773202;
const bachKhoaLong = 106.659764;

const markerIcon = new L.icon({
  iconUrl: require('../img/marker.png'),
  iconSize: [40, 40],
  iconAnchor: [17, 46], //[left/right, top/bottom]
  popupAnchor: [0, -46], //[left/right, top/bottom]
})

function CreateTask() {

  const [legend, setLegend] = React.useState("");

  const handleChangeMapLegend = (event) => {
    setLegend(event.target.value);
  };

  const mapLegendData = [
    {
      // psycho ex lives here
      ID: "MCP001",
      mcpName: "MCP Phú Nhuận",
      latitude: 10.793778,
      longitude: 106.684757,
    },
    {
      // y khoa pnt, another psycho ex studies here lel
      ID: "MCP002",
      mcpName: "MCP quận 10",
      latitude: 10.827576,
      longitude: 106.67681,
    },
    {
      // thpt gia dinh lol
      ID: "MCP003",
      mcpName: "MCP Bình Thạnh",
      latitude: 10.804235,
      longitude: 106.71847,
    },
    {
      // the another ex lives here
      ID: "MCP004",
      mcpName: "MCP Tân Phú",
      latitude: 10.792276,
      longitude: 106.619079,
    },
  ];
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


	React.useEffect(() => {
		setPhuongTien('');
	}, [nhanVien])
  return (
    <>
      <div className="CreateTask">
	  <Box sx={{ flexGrow: 1 }}>
				<Grid container spacing={3} >
					<Grid item xs={6} md={5}>
						<LocalizationProvider dateAdapter={AdapterDayjs}>
							<Stack spacing={3}>

								<DateTimePicker
									label="Date&Time start task"
									value={value}
									onChange={handleChange}
									renderInput={(params) => <TextField {...params} />}
								/>
								<DateTimePicker
									label="Date&Time end task"
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
								Chọn nhân viên
								<Box sx={{ minWidth: 120 }} style={{ paddingTop: "5px" }}>
									<FormControl fullWidth>
										<InputLabel id="demo-simple-select-label">ID</InputLabel>
										<Select
											labelId="demo-simple-select-label"
											id="demo-simple-select"
											value={nhanVien}
											label="id"
											onChange={handleNhanVien}
										>
											{listNhanVien}

										</Select>
									</FormControl>
								</Box>
								<Grid container spacing={0} >
									<Grid item xs={12} md={12}>
										{nhanVien && <img style={{ height: "10em", padding: "20px" }} src={`image/avatar/${foundAva()}`} alt='imageAva'></img>}
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
								Chọn phương tiện
								<Box sx={{ minWidth: 120 }} style={{ paddingTop: "5px" }} s>
									<FormControl fullWidth>
										<InputLabel id="demo-simple-select-label">ID</InputLabel>
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
										{phuongTien && <img style={{ height: "10em", padding: "20px" }} src={`image/trash/${foundImg()}`} alt='imageAva'></img>}
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
						<Grid item xs={6} md={12}>
							<Item>
								<Button>
									Xác nhận
								</Button>
							</Item>
						</Grid>
					</Grid>
				</Grid>

		</Box >
		<Grid container spacing={3}>
          <Grid item xs={8}>
            <MapContainer
              center={[bachKhoaLat, bachKhoaLong]}
              zoom={13}
              scrollWheelZoom={false}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker 
                position={[10.773202, 106.659764]}
                icon={markerIcon}
                eventHandlers={{
                  click: (e) => {
                    console.log('marker clicked', e)
                  },
                }}
              >
                <Popup>
                  <p>Trụ sở chính</p>
                </Popup>
              </Marker>
              {mapLegendData.map((mcp, idx) => (
                 <Marker
                 position={[mcp.latitude, mcp.longitude]}
                 icon={markerIcon}
                 key={idx}
                 eventHandlers={{
                  click: (e) => {
                    console.log('marker clicked', e)
                  },
                }}
               >
                 <Popup>
                   <b>
                     {mcp.ID}, {mcp.mcpName}
                   </b>
                 </Popup>
               </Marker>
              ))};
            </MapContainer>
          </Grid>
          <Grid item xs={4}>
            <div className="MyRouteSelectionHeader">
              <h3> Tạo tuyến đường </h3>
            </div>
            <div className="MyRouteSelection">
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-autowidth-label">
                  Điểm tập kết
                </InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  value={legend}
                  onChange={handleChangeMapLegend}
                  autoWidth
                  label="Legend"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Twenty</MenuItem>
                  <MenuItem value={21}>Twenty one</MenuItem>
                  <MenuItem value={22}>Twenty one and a half</MenuItem>
                </Select>
              </FormControl>
            </div>
          </Grid>
        </Grid>

      </div>
    </>
  );
}

export default CreateTask;
