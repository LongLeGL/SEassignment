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
  const [value, setValue] = React.useState(dayjs("2022-12-1T21:11:54"));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const [id, setid] = React.useState("");

  const handleChange2 = (event) => {
    setid(event.target.value);
  };

  const [age, setAge] = React.useState("");

  const handleChange3 = (event) => {
    setAge(event.target.value);
  };

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

  return (
    <>
      <div className="PageHeader">
        <h2>Tạo công việc mới</h2>
      </div>
      <div className="CreateTask">
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
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
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
              <Item>
                Chọn phương tiện
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
                      <MenuItem value={"T012"}>T012</MenuItem>
                      <MenuItem value={"T013"}>T013</MenuItem>
                      <MenuItem value={"T014"}>T014</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                {/* </Item> */}
                {/* </Grid> */}
                {/* <Grid item xs={6} md={5}> */}
                {/* <Item>xs=6 md=8</Item> */}
                {/* <Item>Chọn nhân viên */}
                <div style={{ height: "40px" }}></div>
                Chọn nhân viên
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">ID</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={id}
                      label="id"
                      onChange={handleChange2}
                    >
                      <MenuItem value={"C132451"}>C132451</MenuItem>
                      <MenuItem value={"C132452"}>C132452</MenuItem>
                      <MenuItem value={"C132453"}>C132453</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={6} md={12}>
              <Item>
                <Button>Xác nhận</Button>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}

export default CreateTask;
