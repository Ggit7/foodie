import React from "react";
import {
  Box,
  TextField,
  Typography,
  Divider,
  Button,
  Link,
} from "@mui/material";
import "./Footer.css";
import SendIcon from "@mui/icons-material/Send";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  const handlesubmit = () => {
    alert("massage");
  };
  return (
    <div>
      <Box className="main">
        <Box className="sub">
          <Box className="message">
            <form>
              <TextField
                margin="normal"
                type="email"
                variant="outlined"
                placeholder="Enter your email"
              />
              <TextField
                margin="normal"
                type="text"
                variant="outlined"
                placeholder="Enter your message"
              />
            </form>
            <Button
              onClick={handlesubmit}
              variant="contained"
              color="primary"
              startIcon={<SendIcon />}
            >
              Send
            </Button>
          </Box>
          <Box className="contact">
            <Typography variant="h6" className="cnt">
              Contact Us
            </Typography>
            <Typography variant="body1" className="add">
                <LocationOnIcon sx={{ mr: 1 }} color={"black"}/>
              123 Foodie Street, Kolkata city of joy, kol-743363
            </Typography>
            <Typography variant="body1" className="mail">
                <MailOutlineIcon sx={{ mr: 1 }} color={"black"} />
              <Link
                href="mailto:gourab.biit@gmail.com"
                color="inherit"
                underline="none"
              >
                contact@foodie.com
              </Link>
            </Typography>
            <Typography variant="body1" className="phone">
                <PhoneIcon sx={{ mr: 1 }} color={"black"}/>
              <Link href="tel:+919775425851" color="inherit" underline="none">
                 9775425851
              </Link>
            </Typography>
          </Box>
          <Box className="social">
            <FacebookIcon className="ic" />
            <InstagramIcon className="ic" />
            <TwitterIcon className="ic"/>
          </Box>
        </Box>
        <Divider />
        <Typography variant="h6" align="center">
          &copy;{new Date().getFullYear()} Foodie. All rights reserved.
        </Typography>
      </Box>
    </div>
  );
};

export default Footer;
