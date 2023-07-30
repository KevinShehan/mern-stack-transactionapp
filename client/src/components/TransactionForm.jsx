import * as React from 'react';

import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';



export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275, marginTop: 5 }}>
      <CardContent>
        <form>
          <Typography variant="body2">
           Add New Transaction
          </Typography>
          <TextField id="outlined-basic" label="Amount" variant="outlined" />
          <TextField id="outlined-basic" label="Description" variant="outlined" />
          <LocalizationProvider dateAdapter={AdapterDayjs}>


           
        {/* <DemoItem label="Desktop variant">
          <DesktopDatePicker defaultValue={dayjs('2022-04-17')} />
        </DemoItem> */}

          </LocalizationProvider>
          <Button variant="contained">Save</Button>
        </form>

      </CardContent>

    </Card>
  );
}