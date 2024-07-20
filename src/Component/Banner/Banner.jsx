import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { NavLink } from 'react-router-dom';
import { Paper, Box, Typography, Button } from '@mui/material';

const items = [
  {
    description: "This is the first banner description.",
    image: "../image/dan-gold-5O1ddenSM4g-unsplash.jpg"
  },
  {
    description: "This is the second banner description.",
    image: "../image/pexels-dapur-melodi-192125-1109197.jpg"
  },
  {
    description: "This is the third banner description.",
    image: "../image/im-121422.jpeg"
  },
  {
    description: "This is the third banner description.",
    image: "../image/brooke-lark-jUPOXXRNdcA-unsplash.jpg"
  },
  {
    description: "This is the third banner description.",
    image: "../image/pexels-ella-olsson-572949-1640774.jpg"
  },
  
];

const BannerItem = ({ item }) => {
  return (
    <Paper
      sx={{
        position: 'relative',
        height: '570px',
        backgroundImage: `url(${item.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          textAlign: 'center',
          padding: 2,
        }}
      >
        <Typography variant="h3" gutterBottom sx={{color:'white'}}>Welcome to <span style={{color:'goldenrod'}}>"foodie"</span></Typography>
        {/* <Typography variant="h6" gutterBottom>{item.description}</Typography> */}
        <NavLink to={'/showrecipe'}>
        <Button variant="contained" color="primary">Show More</Button>
        </NavLink>
      </Box>
    </Paper>
  );
};

const BackgroundBannerCarousel = () => {
  return (
    <Carousel autoPlay={true} interval={4000} navButtonsAlwaysVisible={true}>
      {items.map((item, i) => <BannerItem key={i} item={item} />)}
    </Carousel>
  );
};

export default BackgroundBannerCarousel;
