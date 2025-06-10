import { Box, Typography, Container, useTheme, useMediaQuery } from "@mui/material";
import Image from "next/image";

export default function PromiseSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Container maxWidth="xl">
        <Box sx={{ width: { xs: '95%', sm: '90%', md: '85%', lg: '100%' }, margin: 'auto' }}>
      <Box
        sx={{
          width: '100%',
          bgcolor: '#023350',
          borderRadius: { xs: '15px', md: '20px' },
          p: { xs: 2, sm: 3, md: 4, lg: 5 },
          my: { xs: 4, sm: 5, md: 6 },
          mx: 'auto'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: { xs: 4, sm: 3, md: 2.5 }
          }}
        >
          {/* Promise Text */}
          <Box
            sx={{
              color: 'white',
              maxWidth: { xs: '100%', sm: '280px' },
              textAlign: { xs: 'center', md: 'left' },
              mb: { xs: 2, md: 0 }
            }}
          >
            <Typography 
              variant="body1" 
              sx={{ 
                mb:"-2px", 
                fontWeight: 600,
                fontSize: { xs: '1.1rem', sm: '28px' , md:"34px" }
              }}
            >
              Our Promise
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                lineHeight: 1.6,
                fontSize: { xs: '0.9rem', sm: '14px' ,md:"14px" }
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Typography>
          </Box>

          {/* Divider - Hidden on mobile */}
          {!isMobile && (
            <Box
              sx={{
                width: '1px',
                height: { md: '60px', lg: '80px' },
                bgcolor: '#1E5C7B',
                mx: { md: 1.5, lg: 2 }
              }}
            />
          )}

          {/* Quality */}
          <Box sx={{ color: 'white' }}>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: { xs: 1.5, sm: 2 }
            }}>
              <Box
                sx={{
                  bgcolor: '#23A397',
                  borderRadius: '50%',
                  p: { xs: 1.5, sm: 2 },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Image 
                  src="/quality.png" 
                  alt="Quality" 
                  width={40} 
                  height={40}
                  style={{
                    width: '100%',
                    height: 'auto'
                  }}
                />
              </Box>
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 600,
                  fontSize: { xs: '1rem', sm: '1.25rem' }
                }}
              >
                Quality
              </Typography>
            </Box>
          </Box>

          {/* Divider - Hidden on mobile */}
          {!isMobile && (
            <Box
              sx={{
                width: '1px',
                height: { md: '60px', lg: '80px' },
                bgcolor: '#1E5C7B',
                mx: { md: 1.5, lg: 2 }
              }}
            />
          )}

          {/* Affordability */}
          <Box sx={{ color: 'white' }}>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: { xs: 1.5, sm: 2 }
            }}>
              <Box
                sx={{
                  bgcolor: '#23A397',
                  borderRadius: '50%',
                  p: { xs: 1.5, sm: 2 },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Image 
                  src="/affordability.png" 
                  alt="Affordability" 
                  width={40} 
                  height={40}
                  style={{
                    width: '100%',
                    height: 'auto'
                  }}
                />
              </Box>
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 600,
                  fontSize: { xs: '1rem', sm: '1.25rem' }
                }}
              >
                Affordability
              </Typography>
            </Box>
          </Box>

          {/* Divider - Hidden on mobile */}
          {!isMobile && (
            <Box
              sx={{
                width: '1px',
                height: { md: '60px', lg: '80px' },
                bgcolor: '#1E5C7B',
                mx: { md: 1.5, lg: 2 }
              }}
            />
          )}

          {/* Accessibility */}
          <Box sx={{ color: 'white' }}>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: { xs: 1.5, sm: 2 }
            }}>
              <Box
                sx={{
                  bgcolor: '#23A397',
                  borderRadius: '50%',
                  p: { xs: 1.5, sm: 2 },
                  border: '2px solid #23A397',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Image 
                  src="/accessibility.png" 
                  alt="Accessibility" 
                  width={40} 
                  height={40}
                  style={{
                    width: '100%',
                    height: 'auto'
                  }}
                />
              </Box>
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 600,
                  fontSize: { xs: '1rem', sm: '1.25rem' }
                }}
              >
                Accessibility
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
    </Container>
  );
}
