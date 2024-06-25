import React from "react";
import { Button } from "@mui/material";
import KeyboardTabIcon from "@mui/icons-material/KeyboardTab";
import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div className="banner">
        <div className="contant">
          <h1>"welcome to foodie"</h1>
          <Link to={"/showrecipe"}>
            <Button
              variant="contained"
              color="success"
              className="btn"
              startIcon={<KeyboardTabIcon />}
            >
              Show recipe
            </Button>
          </Link>
        </div>
      </div>
      <div className="test"></div>
    </>
  );
};

export default Home;
