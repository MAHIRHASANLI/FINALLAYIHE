import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { DeleteById, GetById } from "../../../api/requests";
import { useParams } from "react-router-dom";
import style from "./index.module.css"
import Swal from "sweetalert2";
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom'
import {Helmet} from "react-helmet";
const Detail = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  const [count, setCount] = React.useState("");
  React.useEffect(() => {
    GetById(id).then((res) => {
      setCount(res);
    });
  }, [id]);
  return (
    <div className="application">
    <Helmet>
        <meta charSet="utf-8" />
        <title>Detail Page</title>
        <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "200px",
      }}
    >
      <Card className={style.Card} >
        <CardMedia
          sx={{ height: 140 }}
          image={count.image}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {count.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
      {count.title}
          </Typography>
                      <Button style={{display:"block", margin:"50px auto"}} variant="contained" size="small" onClick={(_id)=>{
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
                            navigate("/")
                            DeleteById(count._id)
                    // setGlobal(global.filter((m)=>m._id!==item._id))
                            Swal.fire(
                              'Deleted!',
                              'Your file has been deleted.',
                              'success'
                            )
                          }
                        })
                              
                      }}>Delete</Button>
        </CardContent>
      </Card>
    </div>
</div>
   
  );
};

export default Detail;
