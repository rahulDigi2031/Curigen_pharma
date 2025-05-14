import { Box, Grid, Typography, TextField, Button, IconButton } from "@mui/material";
import Image from "next/image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";

export default function Footer() {
  const certifications = ["/cert1.png", "/cert2.png", "/cert3.png", "/cert4.png", "/cert5.png", "/cert6.png"];

  return (
    <Box sx={{ backgroundColor: "#2c2c2c", color: "#fff", pt: 8 }}>
      {/* Contact Info Strip */}
      <Grid
        container
        justifyContent="space-around"
        alignItems="center"
        sx={{
          backgroundColor: "#04344F",
          borderRadius: "0 0 30px 30px",
          p: 4,
        }}
      >
        {/* Address */}
        <Grid item xs={12} md={3} sx={{ textAlign: "center", mb: { xs: 2, md: 0 } }}>
          <LocationOnIcon fontSize="large" />
          <Typography variant="subtitle1">Address</Typography>
          <Typography variant="body2">Find Us On Map</Typography>
        </Grid>

        {/* Phone */}
        <Grid item xs={12} md={3} sx={{ textAlign: "center", mb: { xs: 2, md: 0 } }}>
          <PhoneIcon fontSize="large" />
          <Typography variant="subtitle1">Phone</Typography>
          <Typography variant="body2">+91 256-253-2538</Typography>
        </Grid>

        {/* Email */}
        <Grid item xs={12} md={3} sx={{ textAlign: "center" }}>
          <EmailIcon fontSize="large" />
          <Typography variant="subtitle1">Email</Typography>
          <Typography variant="body2">info@curigenpharmaceuticals.com</Typography>
        </Grid>
      </Grid>

      {/* Main Footer */}
      <Grid container spacing={4} sx={{ p: 4 }}>
        {/* Logo + Description + Social */}
        <Grid item xs={12} md={3}>
          <Box sx={{ mb: 2 }}>
            <Image src="/logo.png" alt="Logo" width={150} height={40} />
          </Box>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Macat Megatrons is a thriving community where innovators, professionals, and enthusiasts come together to share knowledge, collaborate, and grow.
          </Typography>
          <Box>
            <IconButton><FacebookIcon sx={{ color: "#fff" }} /></IconButton>
            <IconButton><InstagramIcon sx={{ color: "#fff" }} /></IconButton>
            <IconButton><GoogleIcon sx={{ color: "#fff" }} /></IconButton>
            <IconButton><TwitterIcon sx={{ color: "#fff" }} /></IconButton>
            <IconButton><LinkedInIcon sx={{ color: "#fff" }} /></IconButton>
          </Box>
        </Grid>

        {/* Company Links */}
        <Grid item xs={6} md={2}>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
            Company
          </Typography>
          <Typography variant="body2">Global Presence</Typography>
          <Typography variant="body2">Products</Typography>
          <Typography variant="body2">Services</Typography>
          <Typography variant="body2">Gallery</Typography>
          <Typography variant="body2">About us</Typography>
          <Typography variant="body2">Blog</Typography>
        </Grid>

        {/* Certifications */}
        <Grid item xs={12} md={4}>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 2 }}>
            Global Certifications
          </Typography>
          <Grid container spacing={1}>
            {certifications.map((cert, idx) => (
              <Grid item xs={4} key={idx}>
                <Image src={cert} alt={`cert-${idx}`} width={80} height={80} />
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Email/Mobile Form */}
        <Grid item xs={12} md={3}>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
            EMAIL ADDRESS*
          </Typography>
          <TextField fullWidth placeholder="Enter your Email Address" variant="outlined" size="small" sx={{ mb: 2, backgroundColor: "#fff" }} />

          <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
            Mobile*
          </Typography>
          <TextField fullWidth placeholder="Number" variant="outlined" size="small" sx={{ mb: 2, backgroundColor: "#fff" }} />

          <Button variant="outlined" sx={{ color: "#fff", borderColor: "#fff", textTransform: "none" }}>
            Contact us
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}