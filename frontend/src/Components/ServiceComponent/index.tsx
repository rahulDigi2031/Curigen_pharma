import { Box, Typography, Container } from "@mui/material";
import Image from "next/image";

const services = [
  { icon: "/warranty1.png", title: "Impeccable Quality" },
  { icon: "/price.png", title: "Affordable Medicines" },
  { icon: "/research.png", title: "Research and Development" },
  { icon: "/analysis.png", title: "Business Responsibility" },
];

export default function ServiceComponent() {
  return (
    <Box
      sx={{
        bgcolor: "#F5F7FA",
        width: "100%",
        py: 8,
        px: 2,
      }}
    >
      <Container maxWidth="xl">
        {/* Header Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: 5,
            mb: 5,
          }}
        >
          <Image
            src="/image3.png"
            alt="Lab Image"
            width={600}
            height={300}
            className="w-full max-w-[450px] rounded-[22%/50%] object-cover"
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "700",
                color: "#002B5B",
                mb: 1,
              }}
            >
              Our Services
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                color: "gray",
                fontFamily: "inter",
              }}
            >
              One of our specializations is Contract Manufacturing and...
            </Typography>
          </Box>
        </Box>

        {/* Service Cards */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 5,
          }}
        >
          {services.map((service, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                p: 3,
                backgroundColor: "white",
                width: 320,
                borderRadius: "50px 50px 50px 0px",
                textAlign: "left",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  border: "2px dashed #002B5B",
                },
                "&:hover .icon-bg": {
                  backgroundColor: "#002B5B", // Change to blue on hover
                },
              }}
            >
              {/* Icon Wrapper with a class for targeting */}
              <Box
                className="icon-bg"
                sx={{
                  width: "130px",
                  height: "80px",
                  backgroundColor: "#03A297", // default color
                  borderRadius: "60px 60px 60px 0px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  pl: "12px",
                  transition: "background-color 0.3s ease-in-out",
                }}
              >
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={50}
                  height={50}
                  style={{ objectFit: "cover" }}
                />
              </Box>

              {/* Text Content */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  ml: { xs: 0, md: 2 },
                  mt: { xs: 2, md: 0 },
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 600, color: "#002B5B" }}
                >
                  {service.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "gray",
                    fontFamily: "inter",
                    mt: 1,
                  }}
                >
                  Lorem Ipsum is simply dummy text of the
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
