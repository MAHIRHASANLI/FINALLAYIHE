import React from "react";

const Header = () => {
  return (
    <div className="HEADERRR">
      <div  className="icHEADERRR">
      <div className="Soll">
        <img
          src="https://preview.colorlib.com/theme/invest/images/logo.png"
          alt=""
        />
       <span  style={{ color: "white" }}> <span style={{ color: "rgb(255,168,0)" }}>IN</span>VEST</span>
      </div>
      <div className="Sagg">
        <p className="p">BTC$102000</p>
        <p className="p">ETH $979</p>
        <p  className="p">LTC $230</p>
        <p style={{color:"rgb(255,168,0)"}} className="p">REGISTER | LOGIN</p>
      </div>
      </div>
    </div>
  );
};

export default Header;
