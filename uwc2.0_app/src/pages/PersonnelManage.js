import "./global.css";
import "./PersonnelManage.css";
import React from "react";
import { Grid as GridJS } from "gridjs-react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
}));

function PersonnelManage() {
  return (
    <div className="PersonnelManage">
      <div>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <GridJS
              data={[
                ["J0001", "Long Le Hoang", "longle69@uwc.com"],
                ["J0002", "Nguyen Ngo Quang", "nguyenngo@uwc.com"],
                ["J0003", "Khoi Le Quang", "smokeyle123@uwc.com"],
                ["J0004", "Thien Luu Trinh", "skyluu@uwc.com"],
                ["J0005", "Phuc Nguyen Nho Gia", "phucdeptrainguyen@uwc.com"],
              ]}
              columns={["ID", "Name", "Email"]}
              search={true}
              pagination={{
                enabled: true,
                limit: 10,
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
  );
}

export default PersonnelManage;
