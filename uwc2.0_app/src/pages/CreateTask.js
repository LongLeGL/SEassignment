import './global.css'
import './CreateTask.css'
import React from 'react';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
	padding: theme.spacing(1),
	textAlign: 'center',
}));



function CreateTask() {

	const [value, setValue] = React.useState(dayjs('2022-12-1T21:11:54'));

	const handleChange = (newValue) => {
		setValue(newValue);
	};


	const [id, setid] = React.useState('');

	const handleChange2 = (event) => {
		setid(event.target.value);
	};

	const [age, setAge] = React.useState('');

	const handleChange3 = (event) => {
		setAge(event.target.value);
	};


	return (
    <>
      <div className='PageHeader'>
        <h2>Tạo công việc mới</h2>
      </div>
      <div className='CreateTask'>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3} >
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
              <Item>Chọn phương tiện
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
                      <MenuItem value={'T012'}>T012</MenuItem>
                      <MenuItem value={'T013'}>T013</MenuItem>
                      <MenuItem value={'T014'}>T014</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                {/* </Item> */}
                {/* </Grid> */}
                {/* <Grid item xs={6} md={5}> */}
                {/* <Item>xs=6 md=8</Item> */}
                {/* <Item>Chọn nhân viên */}
                <div style={{ height: "40px" }}>

                </div>
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
                      <MenuItem value={'C132451'}>C132451</MenuItem>
                      <MenuItem value={'C132452'}>C132452</MenuItem>
                      <MenuItem value={'C132453'}>C132453</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

              </Item>
            </Grid>
            <Grid item xs={6} md={12}>
              <Item>
                <Button>
                  Xác nhận
                </Button>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div >
    </>
		
	);
}

export default CreateTask;