import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import React from 'react'

const Mcard = () => {
const rows=[{Title:'MyFirstREACTCard',res:'Successful'},{Title:'Mary Poppins',res:'Disney Movie'}]
  return (
    <>
    {rows.map((item)=>(
     <Card sx={{ marginTop:"5%" }}>
      <CardContent>
        <Typography sx={{ fontSize: 14,color:"black" }} color="text.secondary" gutterBottom>
          {item.Title}
        </Typography>
        <Typography sx={{ mb: 1.5,color:"black"}} color="text.secondary">
          {item.res}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>   
 
    ))}
    </>
  )}

export default Mcard