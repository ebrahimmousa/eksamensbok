import React, { useState } from "react";
import { Box, Typography, TextField, Button, Container } from "@mui/material";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Navbar from "../navbar/NavBar";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const companyEmail = "ebrahim-mousa@hotmail.com";

      if (window.strapi) {
        await window.strapi.services.email.sendEmail(
          companyEmail,
          "Contact Form Submission",
          `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
        );
        console.log("Email sent successfully!");
      } else {
        console.error("Strapi is not available.");
      }
    } catch (error) {
      console.error("Error sending email", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <Header />
      <Container
        component="main"
        maxWidth="md"
        sx={{ flex: 1, padding: "40px 20px", textAlign: "center" }}
      >
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 4 }}>
          Feel free to reach out to us using the form below:
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <TextField
              label="Name"
              variant="outlined"
              size="small"
              margin="normal"
              required
              fullWidth
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <TextField
              label="Email"
              variant="outlined"
              size="small"
              margin="normal"
              required
              fullWidth
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              label="Message"
              variant="outlined"
              size="small"
              margin="normal"
              multiline
              rows={4}
              required
              fullWidth
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ marginTop: 2 }}
            >
              Submit
            </Button>
          </Box>
        </form>
      </Container>
      <Footer />
    </Box>
  );
};

export default ContactUs;
