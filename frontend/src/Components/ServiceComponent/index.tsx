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
      p: 3,
      textAlign: 'left',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: 1,
      transition: 'all 0.3s',
      '&:hover': {
        border: '3px dashed #002B5B'
      }
    }}
  >
    <Box sx={{ display: 'flex', justifyContent: 'flex-start', mb: 1 }}>
      <Box sx={{
        bgcolor: '#00A99D',
        borderRadius: '50% 50% 50% 0',
        width: 60,
        height: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}>
        <Image src={icon} alt={title} width={30} height={30} />
      </Box>
    </Box>
    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#002B5B', mb: 0.5 }}>
      {title}
    </Typography>
    <Typography sx={{ fontSize: '0.875rem', color: 'text.secondary' }}>
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
                borderRadius:"28% 28% 28% 28%",
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
