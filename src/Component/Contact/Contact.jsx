import React from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Link,
} from "@mui/material";
import "./ContactPage.css";

const ContactPage = () => {
  const submit = () => {
    alert("message sent");
    window.location.reload();
  };
  return (
    <Container maxWidth="lg">
      <Box className="contact-header" textAlign="center" py={5}>
        <Typography variant="h2" component="h1">
          Contact
        </Typography>
      </Box>

      <Box className="contact-form" py={5}>
        <Typography variant="h5" component="h2" textAlign="center" gutterBottom>
          Got a Question?
        </Typography>
        <Typography variant="body1" textAlign="center" gutterBottom>
          Use form to contact us
        </Typography>
        <form>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Your name here" variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Email" variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Subject" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Your message"
                variant="outlined"
                multiline
                rows={4}
              />
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary" onClick={submit}>
                Send Message
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>

      <Box className="contact-details" py={5} textAlign="center">
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={3}>
            <Typography variant="h6">Meet Us</Typography>
            <Typography variant="body2">
              {" "}
              123 Foodie Street, Kolkata city of joy, kol-743363
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6">Phone</Typography>
            <Typography variant="body2">
              {" "}
              <Link href="tel:+919775425851" color="inherit" underline="none">
                9775425851
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6">Email</Typography>
            <Typography variant="body2">
              {" "}
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
            <Typography variant="h6">Website</Typography>
            <Typography variant="body2">
              <Link
                href="https://github.com/Ggit7"
                color="inherit"
                underline="none"
              >
                {" "}
                https://github.com/Ggit7
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box className="map-section" py={5}>
        <Typography variant="h5" textAlign="center" gutterBottom>
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
