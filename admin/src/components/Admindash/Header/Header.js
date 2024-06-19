import React from "react";
import "./header.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from "@mui/material";

const Header = () => {
  return (
    <div className="header">
      <div className="wrapper">
        <div className="logo">logo</div>
        <div className="usericon">
            <IconButton>
              <AccountCircleIcon/>
            </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
