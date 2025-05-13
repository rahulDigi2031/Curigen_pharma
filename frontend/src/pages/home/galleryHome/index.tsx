import { Box, Typography, Button, Stack, Grid } from "@mui/material";
import Image from "next/image";
import productImage1 from "@/public/5b811be0-b316-4d9e-a706-8384d87d6770.png"; // Replace with correct image paths
import productImage2 from "@/public/7c3c98f6-cd05-426e-ad51-539a048c435c.png"

export default function HomeGallerySection() {
    const image = [
        {}
    ]
  return (

    <Box>
        <Box sx={{ width: "100%" , margin:"auto" }}>
        <Box
            sx={{
            width: "80%",
            margin: "auto",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
            alignItems: "center",
            }}
        >
            {/* Image Section */}
            <Box sx={{ flex: 1 }}>
            <Image
                src="/01.png"
                alt="Business Vision"
                width={530}
                height={540}
                style={{ borderRadius: "12px", objectFit: "cover" }}
            />
            </Box>

            {/* Center Text Section */}
            <Box sx={{ flex: 2 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", color: "#002B5B" }}>
                WE ARE DEDICATED
            </Typography>
            <Typography
                variant="h5"
                sx={{ fontWeight: "bold", color: "#23A397", mb: 2 }}
            >
                TO OUR CUSTOMERS AND PRODUCTS
            </Typography>
            <Typography color="text.secondary" paragraph>
                Our organization has been committed to providing a wide range of quality and affordable Healthcare solutions to a large number of healthcare institutions and medical facilities. We intend to be the ideal partner for
            </Typography>
            <Typography color="text.secondary" paragraph>
                Our organization has been committed to providing a wide range of quality and affordable Healthcare solutions to a large number of healthcare institutions and medical facilities. We intend to be the ideal partner for
            </Typography>
            </Box>

            {/* Right Button Stack */}
            <Stack spacing={2} sx={{ flex: 1 }}>
            {["Mission", "Vision", "Quality Policy", "Management’s Message"].map((label, index) => (
                <Button
                key={index}
                variant="outlined"
                sx={{
                    borderRadius: 2,
                    textTransform: "none",
                    fontWeight: 500,
                    padding: "10px 16px",
                }}
                >
                {label}
                </Button>
            ))}
            </Stack>
        </Box>
        </Box>

                        <Box sx={{ textAlign: "center", py: 6 }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", color: "#23A397", mb: 4 }}>
        OUR GALLERY
      </Typography>
      <Typography variant="h5" sx={{ mb: 4 }}>
        Let's Check Our Photo Gallery
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Image
            src={productImage1}
            alt="Product Image 1"
            width={300}
            height={300}
            style={{ borderRadius: "12px", objectFit: "cover" }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Image
            src={productImage2}
            alt="Product Image 2"
            width={300}
            height={300}
            style={{ borderRadius: "12px", objectFit: "cover" }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Image
            src={productImage1}
            alt="Product Image 3"
            width={300}
            height={300}
            style={{ borderRadius: "12px", objectFit: "cover" }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Image
            src={productImage2}
            alt="Product Image 4"
            width={300}
            height={300}
            style={{ borderRadius: "12px", objectFit: "cover" }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Image
            src={productImage1}
            alt="Product Image 5"
            width={300}
            height={300}
            style={{ borderRadius: "12px", objectFit: "cover" }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Image
            src={productImage2}
            alt="Product Image 6"
            width={300}
            height={300}
            style={{ borderRadius: "12px", objectFit: "cover" }}
          />
        </Grid>
      </Grid>
    </Box>
    </Box>
  );
}
