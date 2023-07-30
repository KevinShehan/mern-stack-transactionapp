import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Button, IconButton } from '@mui/material';
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import dayjs from 'dayjs';




export default function TransactionList({ transactions,fetchTransactions, setEdittransaction }) {

  async function remove(_id) {
    if (!window.confirm("Are You Sure")) return;
   const res= await fetch('http://localhost:4000/transaction/${_id}',{
      method:"DELETE",
    });
    // console.log(_id);
    if(res.ok){
      window.alert('Deleted Successfully');
    }
  }


  function formatDate(date){
    return dayjs(date).format("DD-MMM, YYYY")
  }
  return (
    <>
      <Typography sx={{ marginTop: 5 }} variant='h6'>List of Transactions</Typography>
      <TableContainer component={Paper} >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Amount</TableCell>
              <TableCell align="center">Description</TableCell>
              <TableCell align="center">Date</TableCell>
              <TableCell align="center">Action</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((row) => (
              <TableRow
                key={row._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="right">
                  {row.amount}
                </TableCell>
                <TableCell align="right">{row.description}</TableCell>
                <TableCell align="right">{formatDate(row.date)}</TableCell>
                <TableCell align="center">

                  <IconButton aria-label="delete" color='success' sx={{ marginLeft: 2 }} onClick={()=>setEdittransaction(row)}>
                    <CreateRoundedIcon />
                  </IconButton>


                  <IconButton aria-label="delete" color='warning' sx={{ marginLeft: 2 }} onClick={() => remove(row._id)}>
                    <DeleteForeverRoundedIcon />
                  </IconButton>

                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}