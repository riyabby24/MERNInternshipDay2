import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Add = ({person}) => {
  const [page,setPage]=useState('MyFirstREACTPage')
  const [count,setCount]=useState(0)
  function valueAdd(){
    //setCount(count+1)
    console.log(form)
  }
  const [form,setForm]=useState({
    Name:person.Name,
    Phone:person.Phone,
    Password:person.Password,
    Email:person.Email})
  
  function valueCap(e){
  setForm({...form,[e.target.name]:e.target.value})
  }
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}>
      <h1>
        Welcome to {page}!!
      </h1>
    
      <div>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Name"
          name='Name'
          value={form.Name}
          onChange={valueCap}
        />
        </div>
        <div>
        <TextField       
          id="outlined-enabled"
          label="Phone"
          defaultValue="Phone"
          name='Phone'
          value={form.Phone}
          onChange={valueCap}
        />
        </div>
        <div>
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          name='Password'
          value={form.Password}
          onChange={valueCap}      
          />
        </div>
        <div>
        <TextField
          id="outlined-disabled"
          label="Email"
          type='email'
          name='Email'  
          value={form.Email}
          onChange={valueCap}        
          />
        </div>
        { <div>
        <Button onClick={valueAdd}>Submit</Button>
        {/* { <small>{count} submissions</small> } */}
        </div> }
        </Box>    
  )
}

export default Add
