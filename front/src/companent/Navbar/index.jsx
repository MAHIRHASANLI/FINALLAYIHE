import React from "react";
import { Link } from "react-router-dom";
import style from "./index.module.css";
import Button from "@mui/material/Button";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import EmailIcon from "@mui/icons-material/Email";
import SearchIcon from "@mui/icons-material/Search";
const Navbar = () => {
  return (
    <div className={style.Header}>
      <div className={style.Navbar}>
        {/* <div className={style.Navbar}> */}
        <Link to="/">
          <Button style={{color:"white"}} variant="text" className={style.Button}>
            Home
          </Button>
        </Link>
        <Link to="/add">
          <Button style={{color:"white"}} className={style.Button}>Add</Button>
        </Link>
        <Button style={{color:"white"}} className={style.Button}>About Us</Button>
        <Button style={{color:"white"}} className={style.Button}>Services</Button>
        <Button style={{color:"white"}} className={style.Button}>Portfolio</Button>
        <Button style={{color:"white"}} className={style.Button}>Blok</Button>
        <Button style={{color:"white"}} className={style.Button}>Contact</Button>
        <div className={style.sagNavbar}>
          <div className={style.icons}>
            <AddIcCallIcon  style={{color:"black", marginRight:"5px"}}/> <p> +825 25 800 800</p>
          </div>
          <div className={style.icons}>
            <EmailIcon  style={{color:"black", marginRight:"5px"}}/>
            <p> office@invest.com</p>{" "}
          </div>
        </div>
        <SearchIcon />
      </div>
      {/* </div> */}
    </div>
  );
};

export default Navbar;
