import { Box, Typography } from "@mui/material";
import Image from "next/image";

const services = [
  { icon: "/icon.png", title: "Impeccable Quality" },
  { icon: "/icon1.png", title: "Affordable Medicines" },
  { icon: "/icon2.png", title: "Research and Development" },
  { icon: "/icon3.png", title: "Business Responsibility" },
];

const ServiceCard = ({ icon , title }) => (
  <Box
    sx={{
      backgroundColor: "#fff",
      borderRadius: "30% 30% 30% 0%",
      p: 2,
      textAlign: "center",
      boxShadow: 1,
      height: 160,
      transition: "0.3s",
      ":hover": { border: "3px dashed #002B5B" },
    }}
  >
    <Box sx={{ display: "flex", justifyContent: "center", mb: 1 }}>
      <Box
        sx={{
          backgroundColor: "#00A99D",
          borderRadius: "50% 50% 50% 0",
          width: 80,
          height: 70,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image src={icon} alt={title} width={250} height={250} />
      </Box>
    </Box>
    <Typography fontWeight="bold" color="#002B5B">{title}</Typography>
    <Typography variant="body2" color="textSecondary">
      Lorem Ipsum is simply dummy text of the
    </Typography>
  </Box>
);

export default function ServiceComponent() {
  return (
    <Box sx={{ backgroundColor: "#F5F7FA", py: 6, px: 2, width: "100%" }}>
      <Box sx={{ width: "80%", mx: "auto" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 4, flexWrap: "wrap", mb: 5 }}>
          <Box sx={{ overflow: "hidden", width: 500, height: 250, flexShrink: 0 }}>
            <Image src="/image3.png" alt="Service Image" width={450} height={180} style={{ borderRadius: 80, objectFit: "cover" }} />
          </Box>
          <Box>
            <Typography variant="h5" fontWeight="bold" color="#002B5B">Our Services</Typography>
            <Typography color="gray">
              One of our specializations is Contract Manufacturing and...
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { md: "repeat(4, 1fr)", sm: "repeat(2, 1fr)", xs: "1fr" },
            gap: 3,
          }}
        >
          {services.map((s, i) => (
            <ServiceCard key={i} icon={s.icon} title={s.title} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
