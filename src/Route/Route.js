import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../Component/Home/Home';
import ShowRecipe from '../Curd/ShowRecipe/ShowRecipe';
import Login from '../Component/Login/Login';
import Registration from '../Component/Registration/Registration';
import Headder from '../ShareModule/Headder/Headder';
import Footer from '../ShareModule/Footer/Footer';
import AddRecipe from '../Curd/AddRecipe/AddRecipe';
import { useDispatch } from 'react-redux';
import { check_token,check_status } from '../Redux/AuthSlice';
import EditRecipe from '../Curd/EditRecipe/EditRecipe';
import SingleProduct from '../Curd/SingleProduct/SingleProduct';
import About from '../Component/About/About';
import Profile from '../Component/Profile/Profile';

const Rout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(check_token());
  }, [dispatch]);

  const PublicRouteName = [
    { path: '/registration', Component: <Registration /> },
    { path: '/login', Component: <Login /> },
  ];

  const PrivetRouteName = [
    { path: '/', Component: <Home /> },
    { path: '/addrecipe', Component: <AddRecipe /> },
    { path: '/showrecipe', Component: <ShowRecipe /> },
    {path:'/edit/:id' ,Component:<EditRecipe/>},
    {path:'/single/:id' ,Component:<SingleProduct/>},
    {path:'/about', Component:<About/>},
    {path:'/profile', Component:<Profile/>},
  ];

  const PrivetN = ({ children }) => {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    return token ? children : <Navigate to='/login' />;
    
  };

  return (
    <Router>
      <Headder />
      <Routes>
        {PublicRouteName.map((route, index) => (
          <Route key={index} path={route.path} element={route.Component} />
        ))}
        {PrivetRouteName.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<PrivetN>{route.Component}</PrivetN>}
          />
        ))}
      </Routes>
      <Footer />
    </Router>
  );
};

export default Rout;
