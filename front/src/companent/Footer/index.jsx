import style from "./index.module.css"
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
const Footer = () => {
  return (
    <div className={style.Footer}>
      <div className={style.icFuter}>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
        Copyright ©2023 All rights reserved | This template is made with  by <strong style={{color:"red"}}>Colorlib</strong>

        </Grid>
        <Grid item xs={4}>
          <a href="">Home</a>
          <a href="">About us</a>
          <a href="">Services</a>
          <a href="">Contact</a>
        </Grid>
      </Grid>
    </Box>
      </div>
     
    </div>
  )
}

export default Footer