import React from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Link,
  useMediaQuery,
  useTheme
} from "@mui/material";
import "./ContactPage.css";

const ContactPage = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const submit = () => {
    alert("message sent");
    window.location.reload();
  };

  return (
    <Container maxWidth="lg">
      <Box className="contact-header" textAlign="center" py={5}>
        <Typography
          variant={"h2"}
          sx={{ fontSize: { xs: '2rem', sm: '3rem', md: '3.5rem' } }}
        >
          Contact
        </Typography>
      </Box>

      <Box className="contact-form" py={5}>
        <Typography
          variant="h5"
          textAlign="center"
          gutterBottom
          sx={{ fontSize: { xs: '1.5rem', sm: '2rem' } }}
        >
          Got a Question?
        </Typography>
        <Typography
          variant="body1"
          textAlign="center"
          gutterBottom
          sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}
        >
          Use form to contact us
        </Typography>
        <form>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Your name here"
                variant="outlined"
                sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Subject"
                variant="outlined"
                sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Your message"
                variant="outlined"
                multiline
                rows={4}
                sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}
              />
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={submit}
                sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}
              >
                Send Message
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>

      <Box className="contact-details" py={5} textAlign="center">
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={3}>
            <Typography
              variant="h6"
              sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem' } }}
            >
              Meet Us
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}
            >
              123 Foodie Street, Kolkata city of joy, kol-743363
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography
              variant="h6"
              sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem' } }}
            >
              Phone
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}
            >
              <Link href="tel:+919775425851" color="inherit" underline="none">
                9775425851
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography
              variant="h6"
              sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem' } }}
            >
              Email
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}
            >
              <Link
                href="mailto:gourab.biit@gmail.com"
                color="inherit"
                underline="none"
              >
                contact@foodie.com
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography
              variant="h6"
              sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem' } }}
            >
              Website
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}
            >
              <Link
                href="https://github.com/Ggit7"
                color="inherit"
                underline="none"
              >
                https://github.com/Ggit7
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box className="map-section" py={5}>
        <Typography
          variant="h5"
          textAlign="center"
          gutterBottom
          sx={{ fontSize: { xs: '1.5rem', sm: '2rem' } }}
        >
          Find Our Location
        </Typography>
        <div className="map-iframe">
          <iframe
            src="https://maps.google.com/maps?q=ghutiary+sharif&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </Box>
    </Container>
  );
};

export default ContactPage;
