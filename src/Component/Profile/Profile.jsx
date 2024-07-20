import React, { useEffect } from 'react';
import { profile_dt } from '../../Redux/AuthSlice';
import { useSelector, useDispatch } from 'react-redux';
import {
  Container,
  Paper,
  Typography,
  Avatar,
  Box,
  Grid,
} from '@mui/material';

const Profile = () => {
  const dispatch = useDispatch();
  const { pfl } = useSelector((state) => state.contents);

  useEffect(() => {
    dispatch(profile_dt());
  }, []);



  return (
    <Container maxWidth="sm" sx={{ mt: 7, mb:7 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Box display="flex" justifyContent="center" mb={2}>
          <Avatar
            alt={pfl.first_name}
            src={`https://wtsacademy.dedicateddevelopers.us/uploads/user/profile_pic/${pfl.profile_pic}`}
            sx={{ width: 100, height: 100 }}
          />
        </Box>
        <Typography variant="h4" align="center" gutterBottom>
          {pfl.first_name} {pfl.last_name}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="body1"><strong>Email:</strong> {pfl.email}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Profile;
