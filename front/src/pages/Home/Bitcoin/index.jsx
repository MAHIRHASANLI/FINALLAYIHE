import * as React from 'react';
import style from "./index.module.css"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Bitcoin = () => {
  return (
  <div className={style.index}>
     <div className={style.Bitcoin}>
     <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={5}>
      <Grid item sm={12}  xs={12} md={5} lg={5}>
       <div className={style.ddddd}>
       <img style={{width:"100%", height:"100%"}} src="https://preview.colorlib.com/theme/invest/images/intro.png.webp" alt="" />
       </div>
      </Grid>
      <Grid item sm={12}  xs={12} md={6} lg={6}>
        <div className='Divs'>
            <p className='PPP'>TAKE A LOOK AT OUR</p>
            <h1 className='hhh'>Buy and Sell Bitcoin</h1>
            <p className='ppp'>Morbi ut dapibus dui. Sed ut iaculis elit, quis varius mauris. Integer ut ultricies orci, lobortis egestas sem. Morbi ut dapibus dui. Sed ut iaculis elit.Morbi ut dapibus dui. Sed ut iaculis elit, quis varius mauris. Integer ut ultricies orci, lobo rtis egestas sem. Morbi ut dapibus dui. Sed ut iaculis elit. Morbi ut dapibus dui. Sed ut iaculis elit, quis varius mauris. Integer ut ultricies orci, lobortis egestas sem. Morbi ut dapibus dui. Sed ut iaculis elit.</p>
            <button className='Button'>READ MORE</button>
        </div>
      </Grid>
    </Grid>
  </Box>
   </div>
  </div>
  )
}

export default Bitcoin