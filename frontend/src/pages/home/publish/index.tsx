import { Box, Typography, Container } from "@mui/material";
import Image from "next/image";

export default function PublishContent() {
  const features = [
    "Government Recognised Export House",
    "Research based products",
    "Short Delivery Lead Time",
    "Modern Infrastructure",
    "Competitive Pricing",
    "Efficient Communication",
  ];

  const stats = [
    { value: "86+", label: "Countries" },
    { value: "250+", label: "International Clients" },
    { value: "600+", label: "Sterile Products" },
    { value: "900+", label: "Non - Sterile Products" },
  ];

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '838px',
        width: '100%',
        backgroundImage: 'url(/backgroundDoctor.png)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        py: { xs: 10, md: 15 },
        marginBottom:"40px"
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: 'flex',
          position: 'relative',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'center', md: 'flex-start' },
          gap: { xs: 8, md: 12 },
          zIndex: 5,
          pb: { xs: 20, md: 0 },
        }}
      >
        {/* Left Content */}
        <Box sx={{ color: 'white', flex: { md: 0.6 }, maxWidth: { md: '50%' } }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3 }}>
            Why US ?
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 , fontFamily:"inter" }}>
            Curigen Pharmaceutical has established itself as a renowned name
            in the pharmaceutical industry, recognized for its unwavering
            dedication to delivering high-quality and effective pharmaceutical
            products. With years of experience
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
              gap: 2,
            }}
          >
            {features.map((feature, index) => (
              <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap:3 }}>
                <Box
                  sx={{
                    width: 20,
                    height: 45,
                    color: 'white',
                    // bgcolor: '#076776',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    fontSize: '0.75rem',
                  }}
                >
                  {/* ✓ */}
                  <Image src="/rightmark.png" alt="" width={400} height={45}></Image>
                </Box>
                <Typography variant="body1" sx={{fontSize:"19px"}}>{feature}</Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Doctor Image and Stats */}
        <Box 
          sx={{
            position: 'relative',
            flex: { md: 0.4 },
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            minHeight: { xs: 400, md: 'auto' },
            mt: { xs: 10, md: 0 },
            width: { xs: '100%', md: 'auto' },
            // Positioning for the image relative to this Box
            '& .doctor-image': {
                position: { md: 'absolute' },
                right: { md: 0 },
                left: { xs: 'auto', md: 'auto' },
                bottom: { xs:"5%", md: 0 },
                top: { xs:"-800px", md: '-37px' },
                zIndex: 10,
                maxWidth: { xs: '90%', md: '100%' },
                height: 'auto',
            }
        }}>
          <Image
            src="/Doctor.png"
            alt="Doctor"
            width={480}
            height={800}
            className="doctor-image" // Apply classname for styling via parent sx
            style={{
                objectFit: 'cover'
            }}
          />

          {/* Stats Box */}
          <Box
            sx={{
              position: 'absolute',
              bottom: { xs: -180, md: -550 },
              left: { xs: '50%', md: -860 },
              transform: { xs: 'translateX(-50%)', md: 'none' },
              zIndex: 20,
              bgcolor: 'white',
              borderRadius: '20px',
              p: { xs: 2, md: 3 },
              boxShadow:"0px 5px 10px rgba(167, 167, 181, 0.89)",
              width: { xs: '90%', sm: '80%', md:"1100px" },
              height: { xs: 'auto', md: 140 },
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: { xs: 2, md: 3 },
            }}
          >
            {stats.map((item, index) => (
              <Box key={index} sx={{ textAlign: 'center', minWidth: { xs: '40%', sm: 'auto' } }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#002B5B' }}>
                  {item.value}
                </Typography>
                <Typography variant="h6" sx={{fontWeight:"600", color:"gray" , fontFamily:"inter"}}>{item.label}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
      
      {/* Bottom Certification/Turnaround Section */}
      <Container
        maxWidth="xl"
         sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: { xs: 4, md: 8 },
          mt: { xs: 15, md: 10 },
          position:"relative",
          top:{xs:0 , md:"60px"},
          left:{md:-485},
          zIndex: 5,
          flexDirection: { xs: 'column', sm: 'row' },
          textAlign: { xs: 'center', sm: 'left' },
          color: 'white',
        }}
      >
          {/* Certification */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box sx={{
                  color: '#23A397',
                  fontSize: '2rem',
                  flexShrink: 0,
              }}>
                  <Image src="/warranty1.png" alt="24/7*" width={50} height={40}></Image>
              </Box>
              <Box>
                  <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'inherit' }}>Eight</Typography>
                  <Typography variant="body2" sx={{ color: 'inherit' }}>The number of national and</Typography>
                  <Typography variant="body2" sx={{ color: 'inherit' }}>international certification</Typography>
              </Box>
          </Box>

          {/* Turnaround */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box sx={{
                  color: '#23A397',
                  fontSize: '2rem',
                  flexShrink: 0,
              }}>
                  <Image src="/24.png" alt="24/7*" width={50} height={40}></Image>
              </Box>
              <Box>
                  <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'inherit' }}>24</Typography>
                  <Typography variant="body2" sx={{ color: 'inherit' }}>24hrs turnaround for all RFQs</Typography>
                  <Typography variant="body2" sx={{ color: 'inherit' }}>with a dedicated team for i</Typography>
                  <Typography variant="body2" sx={{ color: 'inherit' }}>nternation trade</Typography>
              </Box>
          </Box>

      </Container>

    </Box>
  );
}
