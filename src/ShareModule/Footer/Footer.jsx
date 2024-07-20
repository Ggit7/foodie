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
    alert("massage sent");
    
  };
  return (
    <div>
      <Box className="main">
        <Box className="sub">
          <Box className="contact">
            <Typography variant="h4" className="cnt" sx={{color:'GrayText'}}>
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
            <Box className="social">
            {/* <Typography variant="h5" color={"white"} pb={2} className="cnt">
              Follow us
            </Typography> */}
            
            <FacebookIcon sx={{fontSize: 30,color:'goldenrod',paddingLeft:2,":hover": {
      color: 'brown'}}}/>
            <InstagramIcon sx={{fontSize: 30,color:'goldenrod',paddingLeft:2 ,":hover": {
      color: 'brown'}}} />
            <TwitterIcon sx={{fontSize: 30,color:'goldenrod',paddingLeft:2, ":hover": {
      color: 'brown'}}}/>
          </Box>
          </Box>
          <Box className="message" sx={{ p: 5, mt:1,borderRadius: 3}}>
            <form>
              <TextField  
                margin="normal"
                type="email"
                variant="standard"
                placeholder="Enter your email"
              />
              <TextField 
                margin="normal"
                type="text"
                variant="standard"
                placeholder="Enter your message"
              />
            </form>
            <Button 
              onClick={handlesubmit}
              variant="contained"
              color="primary"
              startIcon={<SendIcon />}
              sx={{mt: 1}}
            >
              Send
            </Button>
          </Box>
        </Box>
        <Divider />
        <Typography variant="h6" align="center" sx={{color:'black'}}>
          &copy;{new Date().getFullYear()} Foodie. All rights reserved.
        </Typography>
      </Box>
    </div>
  );
};

export default Footer;
