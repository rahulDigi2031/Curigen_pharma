import BackgroundImage from "@/common_components/backgroundComman";
import Navbar from "@/Components/navbar";
import {
  Autocomplete,
  Box,
  TextField,
  Typography,
  Paper,
  Container,
} from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import ViewListOutlinedIcon from "@mui/icons-material/ViewListOutlined";
import Image from "next/image";
import Footer from "@/Components/footer";

export default function ProductAll() {
  // const theme = useTheme();

  const Images = [
    { image: "/tab2.png", title: "Curidol-SP" },
    { image: "/cap-itra.png", title: "Itracure-200" },
    { image: "/tab4.png", title: "Azigen - 500" },
    // { image: "/tabletProduct.png", title: "Curical - 500" },
    // { image: "/tab2.png", title: "Curidol-SP" },
    // { image: "/tab3.png", title: "Flucoris" },
    // { image: "/tab4.png", title: "Azigen - 500" },
    // { image: "/tabletProduct.png", title: "Curical - 500" },
    // { image: "/tab2.png", title: "Curidol-SP" },
    // { image: "/tab3.png", title: "Flucoris" },
    // { image: "/tab4.png", title: "Azigen - 500" },
    // { image: "/tabletProduct.png", title: "Curical - 500" },
  ];

  const ProductCategory = [
    { title: "All" },
    { title: "Tablet" },
    { title: "Capsule" },
    { title: "Syrup / suspension" },
    { title: "Injection" },
    { title: "Ear/Eye drops" },
    { title: "other" },
  ];

  return (
    <Box className="min-h-screen">
      {/* Header Section with Background Image */}
      <header>
        <BackgroundImage
          imageUrl="/HeaderBG.png"
          height="400px"
          css={{ marginBottom: "35px" }}
        >
          <Navbar />
          <Container maxWidth="xl">
            <Box
              sx={{
                width: "95%",
                margin: "auto",
                padding: "15px",
                borderRadius: "10px",
              }}
            >
              <Typography
                variant="h3"
                className="text-2xl md:text-4xl text-[#023350] mb-2"
                sx={{ fontWeight: "700" }}
              >
                Products
              </Typography>
              <Typography
                variant="h5"
                className="text-lg md:text-xl text-[#023350]" 
              >
                Home &gt;&gt; Capsule
              </Typography>
            </Box>
          </Container>
        </BackgroundImage>
      </header>

      {/* Sort/Filter Bar */}
      <main>
        <Box sx={{ width: "80%", margin: "auto", marginBottom: "60px" }}>
          <Container maxWidth="xl">
            <Box
              sx={{
                width: "95%",
                margin: "auto",
                marginBottom: "50px",
                backgroundColor: "#FAFAFA",
                padding: "20px",
              }}
            >
              <Box className="w-full md:w-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <Box className="flex items-center gap-2">
                  <Typography variant="body1">Sort -By:</Typography>
                  <Autocomplete
                    disablePortal
                    options={ProductCategory}
                    getOptionLabel={(option) => option.title}
                    className="w-[150px]"
                    renderInput={(params) => (
                      <TextField {...params} label="All" size="small" />
                    )}
                  />
                </Box>
                <Box className="flex gap-2">
                  <Box className="h-10 w-10 rounded-full bg-white flex justify-center items-center transition-colors cursor-pointer">
                    <GridViewIcon sx={{ fontSize: 20 }} />
                  </Box>
                  <Box className="h-10 w-10 rounded-full bg-white flex justify-center items-center hover:bg-[#03A297] transition-colors cursor-pointer">
                    <ViewListOutlinedIcon sx={{ fontSize: 20 }} />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Container>

          {/* Product Gallery Grid */}
          <Container maxWidth="xl">
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(2, 1fr)",
                  md: "repeat(3, 1fr)",
                  lg: "repeat(4, 1fr)",
                },
                gap: 4,
                justifyContent: "center",
                marginBottom: {
                  xs: "50px",
                  sm: "190px",
                  md: "130px",
                  lg: "130px",
                },
              }}
            >
              {Images.map((product, index) => (
                <Paper
                  key={index}
                  elevation={2}
                  sx={{
                    bgcolor: "#fafafa",
                    padding: "20px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    borderRadius: 4,
                    maxWidth: "100%",
                    ":hover": {
                      padding: "16px",
                      transform: "scale(1.05)", // ✅ Correct syntax
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: "90%",
                      height: {
                        xs: "200px",
                        sm: "250px",
                        md: "280px",
                        lg: "300px",
                      }, // ✅ Responsive
                      position: "relative",
                      mb: 5,
                      ":hover": {
                        border: "3px dashed rgb(34, 26, 92)",
                        cursor: "pointer",
                        transform: "scale(1.05)", // ✅ Correct syntax
                      },
                    }}
                  >
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      style={{
                        objectFit: "contain",
                        borderRadius: 8,
                        backgroundColor: "#fafafa",
                      }}
                    />
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: 600, color: "#023350" }}
                  >
                    {product.title}
                  </Typography>
                </Paper>
              ))}
            </Box>
          </Container>
        </Box>
      </main>

      <footer>
        <Footer />
      </footer>
    </Box>
  );
}
