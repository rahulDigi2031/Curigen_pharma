import Card from "@/common_components/card";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import rect from "react";

const services = [
  {
    title: "Impeccable Quality",
    description: "Lorem Ipsum is simply dummy text of the",
    icon: "/icon.png", // Replace with actual icons
  },
  {
    title: "Affordable Medicines",
    description: "Lorem Ipsum is simply dummy text of the",
    icon: "/icon1.png",
  },
  {
    title: "Research and Development",
    description: "Lorem Ipsum is simply dummy text of the",
    icon: "/icon2.png",
  },
  {
    title: "Business Responsibility",
    description: "Lorem Ipsum is simply dummy text of the",
    icon: "/icon3.png",
  },
];

export default function ServiceComaponent() {
  return (
    <Box
      sx={{
        backgroundColor: "#F5F7FA",
        py: 6,
        px: 2,
        height: "535px",
        width: "100%",
      }}
    >
      <Box
        sx={{
          width: "80%",
          margin: "auto",
        }}
      >
        {/* Top: Image and Heading */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 4,
            flexWrap: "wrap",
            mb: 5,
          }}
        >
          <Box
            sx={{ overflow: "hidden", width: 500, height: 250, flexShrink: 0 }}
          >
            <Image
              src="/image3.png"
              alt="Service Image"
              width={450}
              height={180}
              style={{ borderRadius: 80.333333, objectFit: "cover" }}
            />
          </Box>
          <Box>
            <Typography variant="h5" fontWeight="bold" color="#002B5B">
              Our Services
            </Typography>
            <Typography color="gray">
              One of our specializations is Contract Manufacturing and...
            </Typography>
          </Box>
        </Box>

        {/* Service Cards */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              md: "repeat(4, 1fr)",
            },
            gap: 3,
          }}
        >
          {services.map((service, index) => (
            <Card
              content
              key={index}  
              sx={{
                backgroundColor: "#fff",
                borderRadius: "30% 30% 30% 0%",
                p: 2,
                textAlign: "center",
                boxShadow: 1,
                height:"160px",
                width:"310px"
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "0 auto 12px auto",
                }}
              >
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={150}
                  height={150}
                />
              </Box>
              <Typography fontWeight="bold" color="#002B5B">
                {service.title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {service.description}
              </Typography>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
