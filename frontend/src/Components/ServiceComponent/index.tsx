import { Box, Typography, Container, Paper } from "@mui/material";
import Image from "next/image";

const services = [
  { icon: "/icon.png", title: "Impeccable Quality" },
  { icon: "/icon1.png", title: "Affordable Medicines" },
  { icon: "/icon2.png", title: "Research and Development" },
  { icon: "/icon3.png", title: "Business Responsibility" },
];

interface ServiceCardProps {
  icon: string;
  title: string;
}

const ServiceCard = ({ icon, title }: ServiceCardProps) => (
  <Paper 
    elevation={0}
    sx={{
      bgcolor: 'white',
      borderRadius: '30% 30% 30% 0%',
      p: 4,
      textAlign: 'left',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      position: 'relative',
      overflow: 'hidden',
      '&:hover': {
        transform: 'translateY(-8px)',
        boxShadow: '0 12px 40px rgba(0, 43, 91, 0.15)',
        '&::before': {
          transform: 'scale(1)',
          opacity: 1
        }
      },
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(45deg, rgba(0, 43, 91, 0.05) 0%, rgba(0, 169, 157, 0.05) 100%)',
        transform: 'scale(0.8)',
        opacity: 0,
        transition: 'all 0.4s ease'
      }
    }}
  >
    <Box sx={{ 
      display: 'flex', 
      justifyContent: 'flex-start', 
      mb: 1,
      position: 'relative',
      zIndex: 1
    }}>
      <Box sx={{
        bgcolor: '#00A99D',
        borderRadius: '50% 50% 50% 0',
        width: 70,
        height: 70,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        transition: 'all 0.3s ease',
        boxShadow: '0 4px 20px rgba(0, 169, 157, 0.2)',
        '&:hover': {
          transform: 'rotate(360deg)',
          bgcolor: '#00897B'
        }
      }}>
        <Image src={icon} alt={title} width={35} height={35} />
      </Box>
    </Box>
    <Typography 
      variant="h6" 
      sx={{ 
        fontWeight: 700, 
        color: '#002B5B', 
        mb: 1,
        position: 'relative',
        zIndex: 1,
        fontSize: { xs: '1.1rem', sm: '1.25rem' },
        transition: 'all 0.3s ease',
        '&:hover': {
          color: '#00A99D'
        }
      }}
    >
      {title}
    </Typography>
    <Typography 
      sx={{ 
        fontSize: '0.95rem', 
        color: 'text.secondary',
        position: 'relative',
        zIndex: 1,
        lineHeight: 1.6
      }}
    >
      Lorem Ipsum is simply dummy text of the
    </Typography>
  </Paper>
);

export default function ServiceComponent() {
  return (
    <Box sx={{ 
      bgcolor: '#F5F7FA',
      py: 8,
      px: 2,
    }}>
      <Container maxWidth="xl" sx={{ width: "80%", margin: "auto" }}>
        
        <Box sx={{ 
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          flexDirection: { xs: 'column', md: 'row' },
          mb: 8,
        }}>
          <Box sx={{ 
            overflow: 'hidden',
            width: { xs: '100%', md: '50%' },
            height: { xs: 200, md: 300 },
            borderRadius: '20px',
            flexShrink: 0,
          }}>
            <Image 
              src="/image3.png" 
              alt="Service Image" 
              width={450}
              height={400}
              style={{ 
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: "20%/50%"
              }}
            />
          </Box>
          <Box sx={{ 
            width: { xs: '100%', md: '50%' },
          }}>
            <Typography 
              variant="h4"
              sx={{ 
                fontWeight: 'bold',
                color: '#002B5B',
                mb: 1
              }}
            >
              Our Services
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              One of our specializations is Contract Manufacturing and...
            </Typography>
          </Box>
        </Box>

        <Box sx={{ 
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)'
          },
          gap: 3
        }}>
          {services.map((s, i) => (
            <ServiceCard key={i} icon={s.icon} title={s.title} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
