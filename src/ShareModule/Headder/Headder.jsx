import React, { useEffect, useState } from "react";
import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Drawer from "@mui/material/Drawer";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { handlelogout, handleRedirectContact ,profile_dt} from "../../Redux/AuthSlice";
import "./Headder.css";
const Headder = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pfl,userpic } = useSelector((state) => state.contents);
  const [is_login, setIs_login] = useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
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
  useEffect(() => {
    dispatch(profile_dt());
  }, []);

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
            <NavLink to={"/profile"}>
              <a className="nav-link">Profile</a>
            </NavLink>
          </li>
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
          <li>
            <NavLink to={"/contact"}>
              <a className="nav-link">Contact</a>
            </NavLink>
          </li>
          <li className="nav_button">
            {isLogin ? (
              <Button
                variant="contained"
                className="nav-button"
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
        <AppBar sx={{ bgcolor: "black"}}>
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
                <li>
                <NavLink to={"/contact"}>
                    <a className="nav-link">Contact</a>
                  </NavLink>
                </li>
                <span>{isLogin ? `Hello:  ${is_login}` : ""}</span>
                <li className="nav_button">
                  {isLogin ? (
                    <div className="nav-button">
                      <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                      >
                        <Avatar src={`https://wtsacademy.dedicateddevelopers.us/uploads/user/profile_pic/${userpic}`}
                        sx={{ width: 24, height: 24 }}/>
                      </IconButton>
                      <Menu
                        sx={{ mt: "55px" }}
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        keepMounted
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                      >
                        <MenuItem
                          onClick={handleClose}
                          component={NavLink}
                          to="/profile"
                        >
                          Profile
                        </MenuItem>
                        
                        <MenuItem
                          onClick={() => {
                            logout();
                            dispatch(handleRedirectContact());
                          }}
                        >
                          Logout
                        </MenuItem>
                      </Menu>
                    </div>
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
                width: "190px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Toolbar />
      </Box>
    </div>
  );
};

export default Headder;
