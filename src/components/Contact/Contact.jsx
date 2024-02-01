import React, { useState } from "react";
import { Box, Typography, TextField, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import NavBar from "../navbar/NavBar";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submissionResult, setSubmissionResult] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:1337/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionResult("Email sent successfully!");
      } else {
        setSubmissionResult("Error sending email");
      }
    } catch (error) {
      setSubmissionResult("Error sending email: " + error.message);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <NavBar />
      <Header />
      <Container
        component="main"
        maxWidth="md"
        sx={{
          flex: 1,
          padding: "40px 20px",
          textAlign: "center",
          "@media (max-width:480px)": {
            padding: "20px 10px",
          },
          "@media (min-width:481px) and (max-width:768px)": {
            padding: "30px 15px",
          },
          "@media (min-width:769px) and (max-width:1024px)": {
            padding: "40px 20px",
          },
          "@media (min-width:1025px) and (max-width:1280px)": {
            padding: "50px 25px",
          },
        }}
      >
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 4 }}>
          Feel free to reach out to us using the form below:
        </Typography>
        {submissionResult && (
          <Typography
            variant="body1"
            color={
              submissionResult.includes("successfully") ? "success" : "error"
            }
          >
            {submissionResult}
          </Typography>
        )}
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
