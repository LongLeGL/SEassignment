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
				<div>Các hoạt động mới nhất</div>
				<div>
					<Grid container spacing={5}>
					<Grid item xs={20}>
						<GridJS
							data={[
								["J0001", "Long Le Hoang", "longle69@uwc.com", "07/12 | 11:01", "xong"],
								["J0002", "Nguyen Ngo Quang", "nguyenngo@uwc.com", "07/12 | 10:59", "xong"],
								["J0003", "Khoi Le Quang", "smokeyle123@uwc.com", "07/12 | 10:55", "xong"],
								["J0004", "Thien Luu Trinh", "skyluu@uwc.com", "07/12 | 10:45", "xong"],
								["J0005", "Phuc Nguyen Nho Gia", "phucdeptrainguyen@uwc.com", "07/12 | 10:44", "xong"],
								["C0001", "Nguyen Bao Tran", "btran@uwc.com", "07/12 | 10:22", "xong"],
								["C0002", "Nguyen Van A", "Aphu@uwc.com", "07/12 | 09:55", "xong"],
								["C0003", "Le Quang B", "bedepele@uwc.com", "07/12 | 09:43", "xong"],
								["C0004", "Dao Phuc C", "concatstring@uwc.com", "07/12 | 09:31", "xong"],
								["C0005", "Do Ngoc Bao D", "deezn@uwc.com", "07/12 | 09:25", "xong"],
							]}
							columns={["Mã số NV", "Tên nhân viên", "MCP", "Thời gian", "Trạng thái", "Ghi chú"]}
							search={false}
							pagination={{
								enabled: true,
								limit: 5,
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