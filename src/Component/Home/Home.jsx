import React, { useEffect, useState } from "react";
import BackgroundBannerCarousel from "../Banner/Banner";
import {
  Button,
  Box,
  Typography,
  CardMedia,
  Rating,
} from "@mui/material";
import KeyboardTabIcon from "@mui/icons-material/KeyboardTab";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import {  EffectCoverflow, Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "phosphor-react";
import { product_get } from "../../Redux/RecipeSlice";
import { useDispatch, useSelector } from "react-redux";
import { ArrowBackIos, ArrowForwardIos, } from "@mui/icons-material";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.recipe);

  useEffect(() => {
    dispatch(product_get());
  }, [dispatch]);

  const testimonials = [
    {
      image: "../image/scrn.png",
      name: "John Doe",
      content:
        "Your zucchini gratin recipe is a game-changer Its unbelievably chewy with the perfect amount of chocolate chunks. My family can't get enough of it!",
      title: "Food Enthusias",
      rating: 5,
    },
    {
      image: "../image/scrn.png",
      name: "Jane Smith",
      content:
        "Your chiken wrap recipe is my go-to breakfast! It's so simple yet incredibly delicious. The chiken wrap are always perfectly ripe, and the seasoning blend is just right",
      title: " Busy Professional",
      rating: 4,
    },
    {
      image: "../image/scrn.png",
      name: "Sam Johnson",
      content:
        "I'm not much of a cook, but your 15-minute fish cakes recipe was incredibly easy to follow. The result was better than takeout, and I felt accomplished making it myself!",
      title: " Culinary Student",
      rating: 5,
    },
  ];

  const TestimonialSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
    };

    const handleNextClick = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    };
    

    return (
      <Box className="testimonial-slider" sx={{bgcolor:'white'}}>
        <Box className="testimonial-slider-content">
          <Button onClick={handlePrevClick} className="testimonial-button">
            <ArrowBackIos />
          </Button>
          <Box className="testimonial-text">
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="testimonial-image"
            />
            <Typography variant="h6" component="div">
              {testimonials[currentIndex].content}
            </Typography>
            <Typography variant="subtitle1" component="div" sx={{ mt: 2 }}>
              - {testimonials[currentIndex].name},{" "}
              {testimonials[currentIndex].title}
            </Typography>
            <Rating
              value={testimonials[currentIndex].rating}
              readOnly
              sx={{ mt: 1 }}
            />
          </Box>
          <Button onClick={handleNextClick} className="testimonial-button">
            <ArrowForwardIos />
          </Button>
        </Box>
      </Box>
    );
  };

  return (
    <>
      {/* Banner Section */}
      <div className="banner">
          {/* <h1>Welcome to Foodie</h1>
          <Link to="/showrecipe">
            <Button
              variant="contained"
              color="success"
              className="btn"
              startIcon={<KeyboardTabIcon />}
            >
              Show Recipe
            </Button>
          </Link> */}
        <BackgroundBannerCarousel/>
        </div>

      {/* About Section */}
      <div className="ab">
        <div className="ab_image">
          <img src="../image/food2-plate.png" alt="image1" height={250} />
        </div>
        <Box className="abt">
          <h1>About Me</h1>
          <p>
            My mission at foodie is to make everyday cooking fun, because we
            believe that cooking is key to a happier and healthier life for
            people, communities and the planet. We empower homecooks all over
            the world to help each other by sharing recipes and cooking tips.
          </p>
          <Button
            variant="contained"
            color="error"
            sx={{ borderRadius: 60 }}
            component={Link}
            to="/about"
          >
            View More
          </Button>
        </Box>
      </div>
  

      {/* Image Slider Section */}
      <div className="slider-container">
        <Typography variant="h4" color={'gray'} fontStyle={"italic"} fontWeight={'Bold'}>
           Recipies
        </Typography>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 0,
            stretch: -75,
            depth: 250,
            modifier: 3.5,
            slideShadows: false,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Navigation]}
        >
          {list?.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="image-container">
                <CardMedia
                  component="img"
                  image={`https://wtsacademy.dedicateddevelopers.us/uploads/product/${item?.image}`}
                  alt="Placeholder Image"
                />
                <Typography variant="h8" className="title">
                  {item.title}
                </Typography>
                <Button
                  className="hover-button"
                  variant="outlined"
                  color="error"
                  component={Link}
                  to="/showrecipe"
                  sx={{ borderRadius: 7, backgroundColor: "whitesmoke" }}
                >
                  Show More
                </Button>
              </div>
            </SwiperSlide>
          ))}
          <div className="slider-controler">
            <div className="swiper-button-prev">
              <ArrowLeft size={20} />
            </div>
            <div className="swiper-button-next">
              <ArrowRight size={20} />
            </div>
          </div>
        </Swiper>
      </div>

      {/* Testimonial Slider */}
      <TestimonialSlider />
    </>
  );
};

export default Home;
