import "./global.css";
import "./MCPManage.css";
import React from "react";
import { Grid as GridJS } from "gridjs-react";
import{h} from "gridjs";
import Grid from "@mui/material/Grid";
import{useState,useRef,useEffect} from 'react';
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
function MCPManage() {
	const table = 
	<GridJS
	data={[
	  ["M01342", "Đầy","3.6 tấn","25, Lê Văn Sỹ"],
	  ["M01344", "Chưa đầy","3.7 tấn","12, Trần Văn Đang"],
	  ["M01345", "Chưa Đầy","3.8 tấn","2, Tô Hiến Thành"],
	  ["M01346", "Chưa Đầy","3.9 tấn","28, Nguyễn Siêu"],
	  ["M01347", "Chưa Đầy","3.1 tấn","35, Lý Thường Kiệt"],
	  ["M01348", "Chưa Đầy","3.6 tấn","23, Lê Văn Việt"],
	  ["M01349", "Chưa Đầy","3.7 tấn","9, Thái Phiên"],
	  ["M01350", "Chưa Đầy","3.2 tấn","75, Thành Thái"],
	  ["M01351", "Chưa Đầy","3.6 tấn","15, Nguyễn Du"],
	  ["M01352", "Chưa Đầy","3.5 tấn","9, An Bình"],
	]
}
	columns={[
		"Mã số MCP", "Trạng thái", "Khối lượng tối đa", "Địa chỉ",
		{ 
			name: 'Hành động',
			formatter: (cell, row) => {
			  return h('button', {
				className: 'py-2 mb-4 px-4 border rounded-md text-white bg-blue-600',
				onClick: () => {setId(row.cells[0].data) ; }
			  }, 'Xem');
			}
		},
	]}
	search={true}
	pagination={{
	  enabled: true,
	  limit: 10,
	  prevButton: true,
	  nextButton: true,
	  
	}}
	sort = {true}
	height= '350px'
	style={{
	  container: {
		margin: "5px"
	  },
	  table: {
		border: "3px solid #ccc",
	  },
	  th: {
		"background-color": "rgba(0, 0, 0, 0.1)",
		color: "#000",
		"border-bottom": "3px solid #ccc",
		"text-align": "center",
		"width": "100%",
		"padding": "0.5em 0.5em",
		"font-weight": "600",
		"font-size": "15px"
	  },
	  td: {
		  "text-align": "center",
		  "border-bottom": "1px solid #D1D1D1",
		  "padding":"0.7em 0.6em",
		  "font-size": "15px"
	  },
	}}
  />;

const [id, setId] = useState("")
	const data = [
		{
			ID: "M01342",
			url: "",
			address: "25, Lê Văn Sỹ",
			state: "Đầy",
			employee: "J0001"
		},
		{
			ID: "M01344",
			url: "",
			address: "12, Trần Văn Đang",
			state: "Chưa đầy",
			employee: "J0002"
		},
		{
			ID: "M01345",
			url: "",
			address: "2, Tô Hiến Thành",
			state: "Chưa đầy",
			employee: "J0002"
		},
		{
			ID: "M01346",
			url: "",
			address: "28, Nguyễn Siêu",
			state: "Chưa đầy",
			employee: "J0002"
		},
		{
			ID: "M01347",
			url: "",
			address: "35, Lý Thường Kiệt",
			state: "Chưa đầy",
			employee: "J0002"
		},
		{
			ID: "M01348",
			url: "",
			address: "23, Lê Văn Việt",
			state: "Chưa đầy",
			employee: "J0002"
		},
		{
			ID: "M01349",
			url: "",
			address: "9, Thái Phiên",
			state: "Chưa đầy",
			employee: "J0002"
		},
		{
			ID: "M01350",
			url: "",
			address: "75, Thành Thái",
			state: "Chưa đầy",
			employee: "J0002"
		},
		{
			ID: "M01351",
			url: "",
			address: "15, Nguyễn Du",
			state: "Chưa đầy",
			employee: "J0002"
		},
		{
			ID: "M01352",
			url: "",
			address: "9, An Bình",
			state: "Chưa đầy",
			employee: "J0002"
		}
	]
	const foundaddress = function () {
		return data.find(obj => obj.ID === id)?.address;
	}
	const foundurl = function () {
		return data.find(obj => obj.ID === id)?.url;
	}
	const foundstate = function () {
		return data.find(obj => obj.ID === id)?.state;
	}
	const foundemployee = function () {
		return data.find(obj => obj.ID === id)?.employee;
	}
	return (
		<div className='MCPManage'>
			<Grid container spacing={0}>
          <Grid item xs={9}>
          
			<div className = 'MCPtable'>
				<div className = 'header1'>
			<div>Quản lý điểm thu gom</div>
			</div>
			<div>
        <Grid container spacing={3}>
          <Grid item xs={12}>
		   {table}
       

          </Grid>
		  
        </Grid>
      </div>
	  </div>
	  </Grid>
		<Grid item xs ={3}>
			<div className =  "DetailinformationMCP">
			<div> {id}
				</div>
			<img src="" />
			<div>
				THÔNG TIN ĐỊA ĐIỂM

				<ul>
				<li>Địa chỉ: {foundaddress()}</li>
				<li>Ngày bắt đầu: 09/02/2016</li>
				<li>Diện tích cơ sở: 120m2</li>
				<li>Thời điểm hoạt động: 07h - 23h</li>
			</ul>
			</div>
			
			<div>
				THÔNG TIN TRẠNG THÁI
				<ul>
				<li>Trạng thái:{foundstate()}</li>
				<li>Trạng thái làm việc: Đang hoạt động</li>
				<li>Nhân viên hiện tại: {foundemployee()}</li>
			</ul>
			</div>
			
			</div>
			
		</Grid>
		
        </Grid>
		</div>
	);
}

export default MCPManage;