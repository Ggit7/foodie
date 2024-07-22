// src/Footer.js
import React from "react";
import { Box, Grid, Link, Typography, IconButton } from "@mui/material";
import {
  Facebook,
  RssFeed,
  Twitter,
  LinkedIn,
  Pinterest,
} from "@mui/icons-material";
import "./Footer.css";

const Footer = () => {
  return (
    <Box className="footer">
      <Box className="footer-container">
        <Box className="footer-userlink">
          <Typography variant="h6">Quick Links</Typography>
          <br />
          <Link href="/contact" color={"inherit"} underline="none">
            Contact
          </Link>
          <br />
          <Link href="/" color={"inherit"} underline="none">
            over view
          </Link>
          <br />
          <Link href="/showrecipe" color={"inherit"} underline="none">
            Recipe
          </Link>
        </Box>
        <Box className="footer-contact-info">
          <Typography variant="h6">Contact info</Typography>
          <Typography variant="body2" >
            <strong>Address:</strong>{" "}123 Foodie Street, Kolkata city of joy,
            kol-743363
          </Typography>
          <Typography variant="body2" className='a'>
            <strong>Phone:</strong>{" "}
            <Link href="tel:+919775425851" color="inherit" underline="none">
              9775425851
            </Link>
          </Typography>
          <Typography variant="body2" className='a'>
            <strong>Email:</strong>{" "}
            <Link
              href="mailto:gourab.biit@gmail.com"
              color="inherit"
              underline="none"
            >
              contact@foodie.com
            </Link>
          </Typography>
        </Box>
        <Box className="footer-description">
          <Typography variant="h5" className="footer-logo">
            foodie
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>
          <Box className="footer-social-icons">
            <IconButton href="#" color="inherit">
              <Facebook />
            </IconButton>
            <IconButton href="#" color="inherit">
              <Twitter />
            </IconButton>
            <IconButton href="#" color="inherit">
              <LinkedIn />
            </IconButton>
            <IconButton href="#" color="inherit">
              <Pinterest />
            </IconButton>
            <IconButton href="#" color="inherit">
              <RssFeed />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <Box className="footer-bottom">
        <Typography variant="h5">©foodie. All rights reserved.Desing by Gourab Das</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
