import React, { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import Drawer from "@mui/material/Drawer";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { handlelogout, handleRedirectContact } from "../../Redux/AuthSlice";
import "./Headder.css";
const Headder = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [is_login, setIs_login] = useState("");
  const Name = localStorage.getItem("Name");
  const { isLogin } = useSelector((state) => state?.contents);
  const [menuopen, setMenuopen] = useState(false);
  useEffect(() => {
    setIs_login(Name);
  }, [Name]);
  const logout = () => {
    dispatch(handlelogout());
    navigate("/login");
  };
  const handlechange = () => {
    setMenuopen(!menuopen);
  };
  const drawer = (
    <Box onClick={handlechange} sx={{ textAlign: "center" }}>
      <Typography
        sx={{ color: "gold", fontSize: "25px", bgcolor: "black", p: 0.8 }}
      >
        foodie
      </Typography>
      {/* <Divider/> */}

      <div className="slide">
        <ul className="nav-manu">
          <span>{isLogin ? `hello,${is_login}` : ""}</span>
          <li>
            <NavLink to={"/"}>
              <a className="nav-link">Home</a>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>
              <a className="nav-link">About</a>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/addrecipe"}>
              <a className="nav-link">AddRecipe</a>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/showrecipe"}>
              <a className="nav-link">Showrecipe</a>
            </NavLink>
          </li>
          <li className="nav_button">
                {isLogin ? (
                  <Button variant="contained" className="nav-button"
                    onClick={() => {
                      logout();
                      dispatch(handleRedirectContact());
                    }}
                  >
                    logout
                  </Button>
                ) : (

                    <NavLink to={"/login"}>
                      <Button variant="contained" className="nav-button">
                        Login
                      </Button>
                    </NavLink>
                )}
                </li>
        </ul>
      </div>
    </Box>
  );
  return (
    <div>
      <Box>
        <AppBar sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open-drawer"
              edge="start"
              sx={{ display: { sm: "none" }, mr: 2 }}
              onClick={handlechange}
            >
              <MenuOpenIcon />
            </IconButton>
            <Typography sx={{ color: "gold", fontSize: "30px" }}>
              foodie
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" }, ml: "auto" }}>
              <ul className="nav-item">
                <li>
                  <NavLink to={"/"}>
                    <a className="nav-link">Home</a>
                  </NavLink>
                </li>
                <li>
            <NavLink to={"/about"}>
              <a className="nav-link">About</a>
            </NavLink>
          </li>
                <li>
                  <NavLink to={"/addrecipe"}>
                    <a className="nav-link">AddRecipe</a>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/showrecipe"}>
                    <a className="nav-link">Showrecipe</a>
                  </NavLink>
                </li>
                <span>{isLogin ? `Hello:  ${is_login}` : ""}</span>
                <li className="nav_button">
                {isLogin ? (
                  <Button variant="contained" className="nav-button"
                    onClick={() => {
                      logout();
                      dispatch(handleRedirectContact());
                    }}
                  >
                    logout
                  </Button>
                ) : (

                    <NavLink to={"/login"}>
                      <Button variant="contained" className="nav-button">
                        Login
                      </Button>
                    </NavLink>
                )}
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={menuopen}
            onClose={handlechange}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "170px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Toolbar/>
      </Box>
    </div>
  );
};

export default Headder;
