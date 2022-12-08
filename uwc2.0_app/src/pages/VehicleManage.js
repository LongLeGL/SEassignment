import "./global.css";
import "./PersonnelManage.css";
import React from "react";
import { Grid as GridJS } from "gridjs-react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
}));

function VehicleManage() {
	return (
		<div className = 'VehicleManage'>
		<div className='VehicleManage1'>
			<div>
				<h1 >
					Xe chở rác
				</h1>
			</div>
			<div>
        <Grid container spacing={2}>
          <Grid item xs={11}>
            <GridJS
              data={[
                ["1.", "#T011", "8.9","6.2 tấn","12.2L/100 KM"],
				["2.", "#T017", "8.9","6.2 tấn","12.2L/100 KM"],
				["3.", "#T013", "8.9","6.2 tấn","12.2L/100 KM"],
				["4.", "#T019", "8.9","6.2 tấn","12.2L/100 KM"],
				["5.", "#T021", "8.9","6.2 tấn","12.2L/100 KM"],
				["6.", "#T035", "9.4","6.7 tấn","13.1L/100 KM"],
				["7.", "#T077", "9.4","6.7 tấn","13.1L/100 KM"],
				["8.", "#T002", "9.4","6.7 tấn","13.1L/100 KM"],
				["9.", "#T012", "9.4","6.7 tấn","13.1L/100 KM"],
				["10.", "#T030", "9.4","6.7 tấn","13.1L/100 KM"],
              ]}
              columns={["No.", "Mã số xe", "Trọng lượng", "Tải trọng tác tối đa", "Mức tiêu thụ nhiên liệu"]}
              search={true}
              pagination={{
                enabled: true,
                limit: 5,
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
		<div className='VehicleManage2'>
			<div>
				<h1 id ="headeroftable">
					Xe đẩy
				</h1>
			</div>
			<div>
        <Grid container spacing={2}>
          <Grid item xs={11}>
            <GridJS
              data={[
                ["1.", "#T011", "8.9","6.2 tấn","12.2L/100 KM"],
				["2.", "#T017", "8.9","6.2 tấn","12.2L/100 KM"],
				["3.", "#T013", "8.9","6.2 tấn","12.2L/100 KM"],
              ]}
              columns={["No.", "Mã số xe", "Trọng lượng", "Dung tích"]}
              search={true}
              pagination={{
                enabled: true,
                limit: 5,
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