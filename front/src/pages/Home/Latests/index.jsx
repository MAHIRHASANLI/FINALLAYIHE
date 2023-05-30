import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import style from "./index.module.css";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
const Latests = () => {
  const array = [1, 2, 3];
  return (
    <div className={style.Latests}>
      <div
        style={{ width: "40%", margin: "0 auto", textAlign: "CENTER" }}
        className="Divs"
      >
        <p className="PPPp">TAKE A LOOK AT OUR</p>
        <h1 style={{marginBottom:"100px"}} className="hhh">Latest News in Crypto</h1>
      </div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {array &&
            array.map((item, ind) => {
              return (
                <Grid key={ind} item  xs={12} sm={12} md={4} lg={4}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      sx={{ height: 140 }}
                      image="https://preview.colorlib.com/theme/invest/images/news_1.jpg"
                      title="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        New Regulations on the Crypto Market
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Morbi ut dapibus dui. Sed ut iaculis elit, quis varius
                        mauris. Integer ut ultricies orci.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <button className="Button" size="small">
                        Read More
                      </button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
        </Grid>
      </Box>
    </div>
  );
};

export default Latests;
