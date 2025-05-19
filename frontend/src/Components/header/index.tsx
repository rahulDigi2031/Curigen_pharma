import { Box } from "@mui/material";
import { Grid, Typography, useTheme, useMediaQuery } from "@mui/material";
import Navbar from "../navbar";
import Image from "next/image";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box>
      {/* Top Contact Info Bar */}
      <Box
        sx={{
          backgroundColor: '#f0f0f0', // Adjust color to match reference image
          padding: { xs: '5px 10px', md: '8px 20px' },
          display: 'flex',
          justifyContent: { xs: 'center', md: 'flex-end' },
          alignItems: 'center',
          gap: { xs: 2, md: 4 },
          color: '#333', // Adjust color to match reference image
          fontSize: { xs: '0.75rem', md: '0.875rem' },
          flexWrap: 'wrap' // Allow wrapping on small screens
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <EmailIcon sx={{ fontSize: { xs: '0.8rem', md: '1rem' } }} />
          <Typography variant="body2" sx={{fontSize: 'inherit'}}>info@example.com</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <PhoneIcon sx={{ fontSize: { xs: '0.8rem', md: '1rem' } }} />
          <Typography variant="body2" sx={{fontSize: 'inherit'}}>+2 123 654 7898</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <HelpOutlineIcon sx={{ fontSize: { xs: '0.8rem', md: '1rem' } }} />
          <Typography variant="body2" sx={{fontSize: 'inherit'}}>Need Help?</Typography>
        </Box>
      </Box>

      <Box
        sx={{
          backgroundImage: "url('/background.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: { xs: '600px', sm: '700px', md: '800px' }, // Restored responsive height
          width: '100%',
          margin: '0 auto',
          position: 'relative' // Ensure positioning context for children
        }}
      >
        <Navbar />
        {/* Hero Section */}
        <Box
          sx={{
            width: "80%",
            margin: "0 auto",
            alignItems: "center",
            mt: { xs: 2, md: 4 } // Adjust margin top
          }}
          className={`flex ${isMobile ? 'flex-col-reverse' : 'flex-row'} ${isMobile ? 'pt-4' : ''} items-center`}
        >
          <Box className={`w-full md:w-1/2 ${isMobile ? 'text-center' : 'text-left'}`}>
            <Typography
              className="text-2xl md:text-4xl font-bold text-black"
            >
              The Pursuit of a Healthier
            </Typography>
            <Typography
              className={`text-2xl md:text-4xl font-bold text-black ${isMobile ? 'mb-4' : ''}`}
            >
              {" "}
              <span style={{ color: "#009688" }}>Bharat</span> Fueled by Science
            </Typography>
            <Typography className="text-base md:text-lg text-black">
              Lorem ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled it to
              make a type specimen book.
            </Typography>
          </Box>
          <Box className="w-full md:w-1/2 flex justify-center items-center">
            {/* Container for banner image and delivery icon */}
            <Box sx={{ position: 'relative' }}>
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
                width={isMobile ? 150 : 250}
                height={isMobile ? 60 : 100}
                style={{
                  position: 'absolute',
                  bottom: isMobile ? '5%' : '-5%', // Adjust positioning as needed
                  left: isMobile ? '70%' : '45%', // Adjust positioning as needed
                  transform: isMobile ? 'translateX(-50%)' : 'none', // Center horizontally on mobile
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}