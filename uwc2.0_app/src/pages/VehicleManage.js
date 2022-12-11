import "./global.css";
import "./VehicleManage.css";
import React from "react";
import { Grid as GridJS } from "gridjs-react";
import{h} from "gridjs";
import Grid from "@mui/material/Grid";
import{useState,useRef,useEffect} from 'react';



function VehicleManage() {
  const [id, setId] = useState("");
  const data = [
    {
     
      ID: "#T011",
      type: "HUYNDAI",
      price:"570 triệu đồng",
    },
    
    {
      ID: "#T017",
      type: "ChinDoq",
      price:"550 triệu đồng",
    },
    {
      ID: "#T013",
      type: "HUYNDAI",
      price:"560 triệu đồng",
    },
    {
      ID: "#T019",
      type: "HONDA",
      price:"670 triệu đồng",
    },
    {
      ID: "#T021",
      type: "HUYNDAI",
      price:"570 triệu đồng",
    },
    {
      ID: "#T035",
      type: "HUYNDAI",
      price:"500 triệu đồng",
    },
    {
      ID: "#T077",
      type: "HUYNDAI",
      price:"570 triệu đồng",
    },
    {
      ID: "#T002",
      type: "HUYNDAI",
      price:"570 triệu đồng",
    },
    {
      ID: "#T012",
      type: "HUYNDAI",
      price:"570 triệu đồng",
    },
    {
      ID: "#T030",
      type: "HUYNDAI",
      price:"570 triệu đồng",
    },
    {
      ID: "#S02391",
      type: "HONDA",
      price:"100 triệu đồng",
    },
    {
      ID: "#S01234",
      type: "HONDA",
      price:"90 triệu đồng",
    },
    {
      ID: "#S12310",
      type: "SUZUKI",
      price:"50 triệu đồng",
    },
  ]
  const foundtype = function () {
		return data.find(obj => obj.ID === id)?.type;
	}
  const foundprice = function () {
		return data.find(obj => obj.ID === id)?.price;
	}
	return (
		<div className = 'VehicleManage'>
			<Grid container spacing ={0}>
				<Grid item xs={9}>
		<div className='VehicleManage1'>
			<div>
				<h1 className="header">
					Xe chở rác
				</h1>
			</div>
			<div>
        <Grid container spacing={2}>
          <Grid item xs={11}>
            <GridJS
              data={[
                ["#T011", "8.9","6.2 tấn","12.2L/100 KM"],
				["#T017", "8.9","6.2 tấn","12.2L/100 KM"],
				["#T013", "8.9","6.2 tấn","12.2L/100 KM"],
				["#T019", "8.9","6.2 tấn","12.2L/100 KM"],
				["#T021", "8.9","6.2 tấn","12.2L/100 KM"],
				["#T035", "9.4","6.7 tấn","13.1L/100 KM"],
				["#T077", "9.4","6.7 tấn","13.1L/100 KM"],
				["#T002", "9.4","6.7 tấn","13.1L/100 KM"],
				["#T012", "9.4","6.7 tấn","13.1L/100 KM"],
				["#T030", "9.4","6.7 tấn","13.1L/100 KM"],
              ]}
              columns={[ "Mã số xe", "Trọng lượng", "Tải trọng rác tối đa", "Mức tiêu thụ nhiên liệu",
              { 
                name: 'Hành động',
                formatter: (cell, row) => {
                  return h('button', {
                  className: 'py-2 mb-4 px-4 border rounded-md text-white bg-blue-600',
                  onClick: () => {setId(row.cells[0].data) ; }
                  }, 'Xem');
                }
              },]}
              search={true}
			  height= '400px'
              pagination={{
                enabled: true,
                limit: 10,
				nextButton: true,
				prevButton: true,
              }}
              sort = {true}
              autoWidth = {true}
              style={{
                container: {
                  margin: "5px"
                },
                table: {
                  border: "3px solid #ccc",
				  whitespace: "no wrap"
                },
                th: {
					"background-color": "rgba(0, 0, 0, 0.1)",
					color: "#000",
					"border-bottom": "3px solid #ccc",
					"text-align": "center",
					"width": "100%",
					"padding": "0.5em 0.1em",
					"font-weight": "600",
					"font-size": "15px"
                },
                td: {
                  "text-align": "center",
                },
              }}
            />
          </Grid>
          
        </Grid>
      </div>
		</div>
		</Grid>
    <Grid item xs={3}>
    <div className =  "Detailinformationphuongtien">
			<div> {id}
				</div>
			<img src="" />
			<div>
				THÔNG TIN NHẬP KHO
				<ul>
				<li>Hãng: {foundtype()}</li>
				<li>Ngày: 20/10/2016</li>
				<li>Giá thành: {foundprice()}</li>
			</ul>
			</div>
			
			<div>
				THÔNG TIN KỸ THUẬT
				<ul>
				<li>Chiều dài cơ sở: 4.28m</li>
				<li>Dung tích: 200L</li>
			</ul>
			</div>
			
			</div>
    </Grid>
    </Grid>
		<div className='VehicleManage2'>
			<div>
				<h1 className="header">
					Xe đẩy
				</h1>
			</div>
			<div>
        <Grid container spacing={2}>
          <Grid item xs={11}>
            <GridJS
              data={[
                ["#S02391", "82kg","200L"],
				["#S01234", "82kg","200L"],
				["#S12310", "82kg","200L"],
              ]}
              columns={["Mã số xe", "Trọng lượng", "Dung tích", { 
                name: 'Hành động',
                formatter: (cell, row) => {
                  return h('button', {
                  className: 'py-2 mb-4 px-4 border rounded-md text-white bg-blue-600',
                  onClick: () => {setId(row.cells[0].data) ; }
                  }, 'Xem');
                }
              },]}
              search={true}
			  height= '200px'
              pagination={{
                enabled: true,
                limit: 10,
				nextButton: true,
				prevButton: true,
              }}
              sort = {true}
              autoWidth = {true}
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
                },
                td: {
                  "text-align": "center",
                },
              }}
            />
          </Grid>
          
        </Grid>
      </div>
		</div>
		</div>
	);
}

export default VehicleManage;