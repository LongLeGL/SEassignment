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
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button, requirePropFactory } from "@mui/material";
import "leaflet/dist/leaflet.css";
// imports for Leaflet and React-Leaflet
import marker from "../img/marker.png";
import L from "leaflet";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
}));

const bachKhoaLat = 10.77351;
const bachKhoaLong = 106.66;

const markerIcon = new L.icon({
  iconUrl: require("../img/marker.png"),
  iconSize: [40, 40],
  iconAnchor: [17, 46], //[left/right, top/bottom]
  popupAnchor: [0, -46], //[left/right, top/bottom]
});

function CreateTask() {
  const [legend, setLegend] = React.useState("");

  const handleChangeMapLegend = (event) => {
    setLegend(event.target.value);
  };

  const mapLegendData = [
    {
      ID: "MCP001",
      mcpName: "MCP Bách Khoa",
      latitude: 10.77351,
      longitude: 106.66,
    },
    {
      ID: "MCP002",
      mcpName: "MCP Phú Nhuận",
      latitude: 10.79328,
      longitude: 106.68536,
    },
    {
      ID: "MCP003",
      mcpName: "MCP Tân Phú",
      latitude: 10.80911,
      longitude: 106.63355,
    },
    {
      ID: "MCP004",
      mcpName: "MCP quận 1",
      latitude: 10.77338,
      longitude: 106.694,
    },
    {
      ID: "MCP005",
      mcpName: "MCP Bình Thạnh",
      latitude: 10.804235,
      longitude: 106.71847,
    },
    {
      ID: "MCP006",
      mcpName: "MCP quận 3",
      latitude: 10.78254,
      longitude: 106.69592,
    },
  ];
  const [value, setValue] = React.useState(dayjs("2022-12-9T14:11:54"));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const [timeEnd, setTimeEnd] = React.useState(dayjs("2022-12-9T14:11:54"));

  const handleTimeEnd = (newValue) => {
    setTimeEnd(newValue);
  };

  const data = [
    {
      ID: "J0001",
      Name: "Long Le Hoang",
      ava: "chen.jpg",
    },
    {
      ID: "J0002",
      Name: "Nguyen Ngo Quang",
      ava: "seungri.jpg",
    },
    {
      ID: "J0003",
      Name: "Khoi Le Quang",
      ava: "suho.jpg",
    },
    {
      ID: "J0004",
      Name: "Thien Luu Trinh",
      ava: "gdragon.jpg",
    },
    {
      ID: "J0005",
      Name: "Phuc Nguyen Nho Gia",
      ava: "sehun.jpg",
    },
    {
      ID: "C0001",
      Name: "Nguyen Bao Tran",
      ava: "irene.jpg",
    },
    {
      ID: "C0002",
      Name: "Nguyen Van A",
      ava: "momo.jpg",
    },
    {
      ID: "C0003",
      Name: "Le Quang B",
      ava: "nayeon.jpg",
    },
    {
      ID: "C0004",
      Name: "Dao Phuc C",
      ava: "top.jpg",
    },
    {
      ID: "C0005",
      Name: "Do Ngoc Bao D",
      ava: "v.jpg",
    },
  ];

  const phuongTienData = [
    {
      ID: "T0112",
      Type: "Xe chở rác",
      photo: "xeChoRac.png",
    },
    {
      ID: "T0123",
      Type: "Xe chở rác",
      photo: "xeChoRac.png",
    },
    {
      ID: "T0824",
      Type: "Xe chở rác",
      photo: "xeChoRac.png",
    },
    {
      ID: "T1235",
      Type: "Xe chở rác",
      photo: "xeChoRac.png",
    },
    {
      ID: "S02931",
      Type: "Xe Đẩy",
      photo: "troller1.png",
    },
    {
      ID: "S01242",
      Type: "Xe Đẩy",
      photo: "troller2.png",
    },
    {
      ID: "S08853",
      Type: "Xe Đẩy",
      photo: "troller1.png",
    },
  ];

  const listNhanVien = data.map((item) => (
    <MenuItem key={item.ID} value={item.ID}>
      {item.ID}
    </MenuItem>
  ));

  const [nhanVien, setNhanVien] = React.useState("");

  const handleNhanVien = (event) => {
    setNhanVien(event.target.value);
  };

  const [phuongTien, setPhuongTien] = React.useState("");

  const handlePhuongTien = (event) => {
    setPhuongTien(event.target.value);
  };

  const listPhuongTien = phuongTienData
    .filter(
      (phuongTien) =>
        phuongTien.Type === (nhanVien[0] === "C" ? "Xe chở rác" : "Xe Đẩy")
    )
    .map((item) => (
      <MenuItem key={item.ID} value={item.ID}>
        {item.ID}
      </MenuItem>
    ));

  const foundAva = function () {
    return data.find((obj) => obj.ID === nhanVien)?.ava;
  };

  const foundName = function () {
    return data.find((obj) => obj.ID === nhanVien)?.Name;
  };

  const foundImg = function () {
    return phuongTienData.find((obj) => obj.ID === phuongTien)?.photo;
  };

  const foundType = function () {
    return phuongTienData.find((obj) => obj.ID === phuongTien)?.Type;
  };

  React.useEffect(() => {
    setPhuongTien("");
  }, [nhanVien]);

  console.log(Array.from(nhanVien)[0]);

  React.useEffect(() => {
    setPhuongTien("");
  }, [nhanVien]);
  return (
    <>
      <div className="CreateTask">
        <Grid container spacing={1}>
          <Grid item xs={7} md={9}>
            {/* <Item>xs=6 md=8</Item> */}
            <Grid container spacing={1}>
              {/* first quarter: used for date picking */}
              <Grid item xs={6} spacing={3}>
                <div className="TaskCreationWrap">
                  <h4 style={{ fontWeight: "bold" }}>Chọn ngày giờ</h4>
                  <div className="TaskCreationBodyWrap">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <Stack spacing={2}>
                        <h4 style={{ color: "coral", fontWeight: "bold" }}>
                          Giờ bắt đầu
                        </h4>
                        <DateTimePicker
                          label="Date&Time start task"
                          value={value}
                          onChange={handleChange}
                          renderInput={(params) => <TextField {...params} />}
                        />
                        <h4 style={{ color: "#1a1463", fontWeight: "bold" }}>
                          Giờ kết thúc
                        </h4>
                        <DateTimePicker
                          label="Date&Time end task"
                          value={timeEnd}
                          onChange={handleTimeEnd}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </Stack>
                    </LocalizationProvider>
                  </div>
                </div>
              </Grid>
              {/* second quarter: used for vehicle picking */}
              <Grid item xs={6}>
                <div className="TaskCreationWrap">
                  <h4>Choose Vehicle</h4>
                  <div className="TaskCreationBodyWrap">
                    <Grid container spacing={1}>
                      <Grid item xs={12}>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            ID
                          </InputLabel>
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
                      </Grid>
                      <Grid
                        container
                        spacing={3}
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Grid item xs={4}>
                          <div className="ItemAvatar">
                            {phuongTien && (
                              <img
                                style={{
                                  width: "100%",
                                  padding: "10px",
                                }}
                                src={`image/trash/${foundImg()}`}
                                alt="imageAva"
                              ></img>
                            )}
                          </div>
                        </Grid>
                        <Grid item xs={8}>
                          <Grid
                            container
                            spacing={2}
                            style={{ padding: "10px" }}
                          >
                            <Grid item xs={12} md={12}>
                              {phuongTien ? `Loại: ${foundType()}` : ""}
                            </Grid>
                            <Grid item xs={12} md={12}>
                              {phuongTien ? `ID: ${phuongTien}` : ""}
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </div>
                </div>
              </Grid>
            </Grid>

            <Grid container spacing={1}>
              {/* third quarter: used for employee picking */}
              <Grid item xs={6}>
                <div className="TaskCreationWrap">
                  <h4>Choose Employee</h4>
                  <div className="TaskCreationBodyWrap">
                    <Grid container spacing={1}>
                      {/* them selector */}
                      <Grid item xs={12}>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            ID
                          </InputLabel>
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
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      spacing={3}
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Grid item xs={4}>
                        <div className="ItemAvatar">
                          {/* avatar */}
                          {nhanVien && (
                            <img
                              style={{
                                width: "100%",
                                padding: "10px",
                                borderRadius: "50%",
                                objectFit: "cover",
                              }}
                              src={`image/avatar/${foundAva()}`}
                              alt="imageAva"
                            ></img>
                          )}
                        </div>
                      </Grid>
                      <Grid item xs={8} alignItems="center">
                        {/* name */}
                        <Grid container spacing={2} style={{ padding: "10px" }}>
                          <Grid item xs={12} md={12}>
                            {nhanVien ? `ID: ${nhanVien}` : ""}
                          </Grid>
                          <Grid item xs={12} md={12}>
                            {nhanVien ? `Tên: ${foundName()}` : ""}
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </div>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="TaskCreationWrap">
                  <h4>Chọn điểm tập kết</h4>
                  <div className="TaskCreationBodyWrap">
                    <div className="MyMapChoosing">
                      <MapContainer
                        center={[10.79328, 106.68536]}
                        zoom={12}
                        scrollWheelZoom={false}
                      >
                        <TileLayer
                          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        />
                        {mapLegendData.map((mcp, idx) => (
                          <Marker
                            position={[mcp.latitude, mcp.longitude]}
                            icon={markerIcon}
                            key={idx}
                            eventHandlers={{
                              click: (e) => {
                                console.log("marker clicked", e);
                              },
                            }}
                          >
                            <Popup>
                              <b>
                                {mcp.ID}, {mcp.mcpName}
                              </b>
                            </Popup>
                          </Marker>
                        ))}
                        ;
                      </MapContainer>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={5} md={3}>
            {/* Side bar for confirmation */}
            {/* <Item>xs=6 md=4</Item> */}
            <div className="TaskCreationWrap">
              <Stack spacing={3} alignItems={"stretch"}>
                <h2>Xác nhận công việc</h2>
                <Grid container spacing={1}>
                  <Grid item xs={5}>
                    <p>Img here</p>
                  </Grid>
                  <Grid item xs={7}>
                    <p>Name and ID</p>
                  </Grid>
                </Grid>
                <Grid container spacing={1}>
                  <Grid item xs={5}>
                    <p>Date</p>
                  </Grid>
                  <Grid item xs={7}>
                    <p>Time</p>
                  </Grid>
                </Grid>
                <div className="MyMapFinal">
                  <MapContainer
                    center={[10.79328, 106.68536]}
                    zoom={12}
                    scrollWheelZoom={false}
                  >
                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {mapLegendData.map((mcp, idx) => (
                      <Marker
                        position={[mcp.latitude, mcp.longitude]}
                        icon={markerIcon}
                        key={idx}
                        eventHandlers={{
                          click: (e) => {
                            console.log("marker clicked", e);
                          },
                        }}
                      >
                        <Popup>
                          <b>
                            {mcp.ID}, {mcp.mcpName}
                          </b>
                        </Popup>
                      </Marker>
                    ))}
                    ;
                  </MapContainer>
                </div>
                <Button size="medium" variant="contained" color="success">
                  Xác nhận
                </Button>
              </Stack>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default CreateTask;
