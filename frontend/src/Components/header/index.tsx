import { Box, Container } from "@mui/material";
import { Grid, Typography, useTheme, useMediaQuery } from "@mui/material";
import Navbar from "../navbar";
import Image from "next/image";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box>
      {/* Top Contact Info Bar */}
      <Box
        sx={{
          backgroundImage: "url('/background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: { xs: "650px", sm: "700px", md: "800px" }, // Restored responsive height
          width: "100%",
          margin: "0 auto",
          position: "relative", // Ensure positioning context for children
        }}
      >
        <Navbar />
        {/* Hero Section */}
        <Container maxWidth="xl">
          <Box
            sx={{
              width: "90%",
              margin: "0 auto",
              alignItems: "center",
              mt: { xs: 2, md: 4 }, 
              paddingRight:"20px",
            }}
            className={`flex ${isMobile ? "flex-col-reverse" : "flex-row"} ${
              isMobile ? "pt-4" : ""
            } items-center`}
          >
            <Box
              className={`w-full md:w-1/2 ${
                isMobile ? "text-center" : "text-left"
              }`}
            >
              <Typography
                sx={{
                  fontWeight: "800",
                  color: "#023350",
                  fontSize: { xs: "32px", sm: "38px", md: "45px" },
                  lineHeight: { xs: "1.2", sm: "1.3", md: "0.65" },
                }}
                className="text-2xl md:text-4xl"
              >
                The Pursuit of a Healthier
              </Typography>
              <Typography
                sx={{
                  fontWeight: "800",
                  color: "#023350",
                  fontSize: { xs: "32px", sm: "38px", md: "45px" },
                  lineHeight: { xs: "1.2", sm: "1.3", md: "1.8" },
                  mb: { xs: 2, sm: 3 },
                }}
                className={`text-2xl md:text-4xl text-black`}
              >
                <span style={{ color: "#009688" }}>Bharat</span> Fueled by
                Science
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#023350",
                  fontSize: { xs: "0.9rem", sm: "1rem", md: "18px" },
                  lineHeight: { xs: 1.5, sm: 1.6, md: 1.5 },
                  maxWidth: { xs: "100%", md: "90%" },
                  wordWrap: "break-word",
                  overflowWrap: "break-word",
                  position: "relative",
                  top: "-25px",
                }}
              >
                Lorem ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Typography>
            </Box>

            <Box className="w-full md:w-1/2 flex justify-center items-center">
              {/* Container for banner image and delivery icon */}
              <Box sx={{ position: "relative" }}>
                <Image
                  src="/bannerside.png"
                  alt="hero"
                  width={isMobile ? 400 : 678}
                  height={isMobile ? 333 : 566}
                  style={{ maxWidth: "100%", height: "auto" }}
                  priority
                />
                {/* Small delivery image positioned absolutely relative to its container */}
                <Image
                  src="/transport.png"
                  alt=""
                  width={isMobile ? 150 : 300}
                  height={isMobile ? 60 : 120}
                  style={{
                    position: "absolute",
                    bottom: isMobile ? "5%" : "-3%", // Adjust positioning as needed
                    left: isMobile ? "70%" : "53%", // Adjust positioning as needed
                    transform: isMobile ? "translateX(-50%)" : "none", // Center horizontally on mobile
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
