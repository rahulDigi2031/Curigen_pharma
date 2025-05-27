import { Box, Typography, Container, useTheme, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { styled } from "@mui/material/styles";

const StyledImage = styled(Image)({
  objectFit: "contain",
  transition: "transform 0.5s ease",
  "&:hover": {
    transform: "scale(1.02)"
  }
});

export default function GlobalExperince() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ 
      width: "100%", 
      bgcolor: "white",
      position: "relative",
      overflow: "hidden",
      "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "linear-gradient(45deg, rgba(0, 43, 91, 0.02) 0%, rgba(0, 169, 157, 0.02) 100%)",
        zIndex: 0
      }
    }}>
      <Container maxWidth="xl" sx={{ py: { xs: 6, md: 10 }, position: "relative", zIndex: 1 }}>
        <Box sx={{ 
          display: "flex", 
          flexDirection: { xs: "column", lg: "row" },
          gap: { xs: 4, md: 6 },
          alignItems: "center"
        }}>
          {/* Image Section */}
          <Box sx={{ 
            width: { xs: "100%", lg: "50%" },
            position: "relative"
          }}>
            <Box sx={{ 
              position: "relative", 
              height: { xs: 300, md: 400, lg: 600 },
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
            }}>
              <StyledImage
                src="/leftbaner.png"
                alt="banner"
                fill
                priority
                style={{
                  objectFit: "cover",
                  transition: "transform 0.5s ease"
                }}
              />
            </Box>
          </Box>

          {/* Content Section */}
          <Box sx={{ 
            width: { xs: "100%", lg: "50%" },
            px: { xs: 2, md: 4 }
          }}>
            <Typography 
              variant="h3" 
              sx={{ 
                fontWeight: 700,
                color: "#002B5B",
                mb: 3,
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                lineHeight: 1.2
              }}
            >
              Global Experience
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: "text.secondary",
                fontSize: { xs: "1rem", md: "1.1rem" },
                lineHeight: 1.8,
                mb: 4
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <Box sx={{ 
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
              gap: 3
            }}>
              {/* Add your experience cards or content here */}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
