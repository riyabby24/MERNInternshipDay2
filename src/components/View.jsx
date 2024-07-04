import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import { TableRow } from '@mui/material';
import axios from 'axios';



const View = () => {
    // const rows=[{Name:'Ria',Email:'ria@gmail.com',Phone:8937452617},
    // {Name:'Reba',Email:'reba@gmail.com',Phone:7268493849},
    // {Name:'Tito',Email:'tito@gmail.com',Phone:9844839949},
    // {Name:'Tony',Email:'tony@gmail.com',Phone:9284758393}
    // ]
    const[rows,setRows]=useState([])
    useEffect(()=>{
    axios.get('https://dummyjson.com/users').then((res)=>{
      console.log(res.data.users)
      setRows(res.data.users)
    })
  },[])
  return (
    <div>
     <TableContainer style ={{marginTop:'7%'}}component={Paper}>
      <Table sx={{ minWidth:650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
           {rows.map((row) => (
            <TableRow
              key={row.firstName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.firstName}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
            </TableRow>
          ))} 
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default View