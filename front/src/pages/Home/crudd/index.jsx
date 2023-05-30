import React, { useEffect, useState } from "react";
import { DeleteById, GettAll } from "../../../api/requests";
import Box from "@mui/material/Box";
import style from "./index.module.css";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
const Crudd = () => {
  const [global, setGlobal] = useState([]);
  useEffect(() => {
    GettAll().then((res) => {
      setGlobal(res);
    });
  }, []);
 function handleChange(e){
  GettAll(e.target.value).then((res) => {
    setGlobal(res);
  });
 }
  return (
    <div className={style.Crudd}>
      <div 
        style={{ width: "40%", margin: "0 auto", textAlign:"CENTER" }}
        className="Divs"
      >
        <p className="PPPp">TAKE A LOOK AT OUR</p>
        <h1  className="hhh">A simple trading system</h1>
      </div>
<div style={{margin:"50px auto",width:"200px"}}>
<TextField   name="name" onChange={(e)=>handleChange(e)} id="outlined-basic" label="Search" variant="outlined"  />
  </div>      <Box sx={{ flexGrow: 1 }}>
     {/* <div style={{margin:"100px"}}> */}
     <Grid container spacing={5}>
          {global &&
            global.map((item) => {
              return (
                <Grid key={item._id} item xs={12} sm={12} md={4} lg={4}>
                  <Card
                    sx={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      flexDirection: "column",
                      paddingTop: "20px",
                    }}
                  >
                    <CardMedia
                      sx={{ height: "150px", width: "150px" }}
                      image={item.image}
                      title="green iguana"
                    />
                    <CardContent>
                     <Link to={`/detail/${item._id}`}> <Typography gutterBottom variant="h5" component="div">
                        {item.name}
                      </Typography></Link>
                      <Typography variant="body2" color="text.secondary">
                        {item.title}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button variant="contained" size="small" onClick={(_id)=>{
                        Swal.fire({
                          title: 'Are you sure?',
                          text: "You won't be able to revert this!",
                          icon: 'warning',
                          showCancelButton: true,
                          confirmButtonColor: '#3085d6',
                          cancelButtonColor: '#d33',
                          confirmButtonText: 'Yes, delete it!'
                        }).then((result) => {
                          if (result.isConfirmed) {
                            DeleteById(item._id)
                    setGlobal(global.filter((m)=>m._id!==item._id))
                            Swal.fire(
                              'Deleted!',
                              'Your file has been deleted.',
                              'success'
                            )
                          }
                        })
                              
                      }}>Delete</Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
        </Grid>
     {/* </div> */}
      </Box>
    </div>
  );
};

export default Crudd;
