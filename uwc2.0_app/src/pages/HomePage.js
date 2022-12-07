import './global.css'
import './HomePage.css'
import React from 'react';
import { Grid as GridJS } from "gridjs-react";
import Grid from "@mui/material/Grid";

function HomePage() {
	return (
		<div className='HomePage'>
			<div className='WeeklyReportSection'>
				<span>Tóm tắt công việc trong tuần</span>
				<span>Đã xong: 10</span>
			</div>

			<div className='ActivitiesTable'>
				<div className='ActivitiesTableTitle'>Các hoạt động mới nhất</div>
				<div>
					<Grid container spacing={3}>
					<Grid item xs={11}>
						<GridJS
							data={[
								["J0001", "Long Le Hoang", "MCP001", "07/12 | 11:01", "xong"],
								["J0002", "Nguyen Ngo Quang", "MCP003", "07/12 | 10:59", "xong"],
								["J0003", "Khoi Le Quang", "MCP011", "07/12 | 10:55", "xong"],
								["J0004", "Thien Luu Trinh", "MCP002", "07/12 | 10:45", "xong"],
								["J0005", "Phuc Nguyen Nho Gia", "MCP014", "07/12 | 10:44", "xong"],
								["C0001", "Nguyen Bao Tran", "MCP001, MCP002", "07/12 | 10:22", "xong"],
								["C0002", "Nguyen Van A", "MCP004, MCP006", "07/12 | 09:55", "xong"],
								["C0003", "Le Quang B", "MCP003, MCP007", "07/12 | 09:43", "xong"],
								["C0004", "Dao Phuc C", "MCP008, MCP012, MCP015", "07/12 | 09:31", "xong"],
								["C0005", "Do Ngoc Bao D", "MCP023", "07/12 | 09:25", "xong"],
							]}
							columns={["Mã số NV", "Tên nhân viên", "MCP", "Thời gian", "Trạng thái", "Ghi chú"]}
							search={false}
							pagination={{
								enabled: true,
								limit: 6,
							}}
							sort = {false}
							autoWidth = {true}
							style={{
								container: {
								margin: "5px",
								},
								table: {
								border: "none",
								},
								th: {
								"background-color": "white",
								color: "#7C7C7C",
								"border-bottom": "2px solid #ccc",
								"text-align": "center",
								"width":"100%",
								"padding":"0.8em 0.2em",
								"font-weight":"600"
								},
								td: {
								"text-align": "center",
								"border-bottom": "1px solid #D1D1D1",
								"padding":"0.3em 0.6em",
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

export default HomePage;