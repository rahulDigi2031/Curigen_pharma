import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function ServiceComponent() {
  return (
    <Box
      sx={{
        backgroundColor: "#F5F7FA",
        py: 6,
        px: 2,
        width: "100%",
      }}
    >
      <Box sx={{ width: "80%", margin: "auto" }}>
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
          <Box sx={{ overflow: "hidden", width: 500, height: 250, flexShrink: 0 }}>
            <Image
              src="/image3.png" // This image must be in the /public folder
              alt="Service Image"
              width={450}
              height={180}
              style={{ borderRadius: "80.33px", objectFit: "cover" }}
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
              xs: "1fr",
              sm: "1fr 1fr",
            },
            gap: 3,
          }}
        >
          {/* Card 1 */}
          <Box
            sx={{
              backgroundColor: "#fff",
              borderRadius: "30% 30% 30% 0%",
              p: 2,
              textAlign: "center",
              boxShadow: 1,
              height: "160px",
              width: "100%",
              transition: "all 0.3s ease-in-out",
              ":hover": {
                outline: "2px dotted #002B5B",
                outlineOffset: "4px",
              },
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "center", mb: 1 }}>
              <Image src="/icon.png" alt="Impeccable Quality" width={50} height={50} />
            </Box>
            <Typography fontWeight="bold" color="#002B5B">
              Impeccable Quality
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Lorem Ipsum is simply dummy text of the
            </Typography>
          </Box>

          {/* Card 2 */}
          <Box
            sx={{
              backgroundColor: "#fff",
              borderRadius: "30% 30% 30% 0%",
              p: 2,
              textAlign: "center",
              boxShadow: 1,
              height: "160px",
              width: "100%",
              transition: "all 0.3s ease-in-out",
              ":hover": {
                outline: "2px dotted #002B5B",
                outlineOffset: "4px",
              },
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "center", mb: 1 }}>
              <Image src="/icon1.png" alt="Affordable Medicines" width={50} height={50} />
            </Box>
            <Typography fontWeight="bold" color="#002B5B">
              Affordable Medicines
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Lorem Ipsum is simply dummy text of the
            </Typography>
          </Box>

          {/* Card 3 */}
          <Box sx={{backgroundColor: "#fff", borderRadius: "30% 30% 30% 0%", p: 2, textAlign: "center", boxShadow: 1, height: "160px", width: "100%", transition: "all 0.3s ease-in-out",
              ":hover": {
                outline: "2px dotted #002B5B",
                outlineOffset: "4px",
              },
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "center", mb: 1 }}>
              <Image src="/icon2.png" alt="Research and Development" width={50} height={50} />
            </Box>
            <Typography fontWeight="bold" color="#002B5B"> Research and Development </Typography>
            <Typography variant="body2" color="textSecondary"> Lorem Ipsum is simply dummy text of the </Typography>
          </Box>

          {/* Card 4 */}
          <Box
            sx={{
              backgroundColor: "#fff",
              borderRadius: "30% 30% 30% 0%",
              p: 2,
              textAlign: "center",
              boxShadow: 1,
              height: "160px",
              width: "100%",
              transition: "all 0.3s ease-in-out",
              ":hover": {
                outline: "2px dotted #002B5B",
                outlineOffset: "4px",
              },
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "center", mb: 1 }}>
              <Image src="/icon3.png" alt="Business Responsibility" width={50} height={50} />
            </Box>
            <Typography fontWeight="bold" color="#002B5B">
              Business Responsibility
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Lorem Ipsum is simply dummy text of the
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
