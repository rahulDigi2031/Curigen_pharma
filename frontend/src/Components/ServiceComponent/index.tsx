import { Box, Typography, Container, Paper } from "@mui/material";
import Image from "next/image";

// Pending HOVER eFFECT AND INSERTING A Images...

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
      height: '220px',
      ":hover":{
        border:"3px dashed rgb(12, 58, 84)",
      },
      mb:5
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
        // position: 'absolute',
        bgcolor:"#03A297",
        borderRadius: '50% 50% 50% 0',
        width: 95,
        height: 85,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        transition: 'all 0.3s ease',
        '&:hover': {
          
        }
      }}>
        {/* <Image src={icon} alt={title} width={500} height={500} /> */}
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
          gap:1,
          flexDirection: { xs: 'column', md: 'row' },
          mb:8,
        }}>
          <Box sx={{ 
            overflow: 'hidden',
            width: { xs: '100%', md: '50%' },
            height: { xs: 200, md: 300 },
            borderRadius: '20px',
            flexShrink: 0,
            alignContent:"center"
          }}>
            <Image 
              src="/image3.png" 
              alt="Service Image" 
              width={450}
              height={400}
              style={{ 
                width: '65%',
                height: '200px',
                objectFit: 'cover',
                borderRadius: "20%/50%"
              }}
            />
          </Box>
          <Box sx={{  width: { xs: '100%', md: '50%' },}}>
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
            md: 'repeat(4, 1fr)',
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
