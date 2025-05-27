import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
} from "@mui/material";
import Image from "next/image";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export default function HomeBlog() {
  const imageCard = [
    { image: "/blogImage.png" },
    { image: "/blogImage.png" },
    { image: "/blogImage.png" },
  ];

  return (
    <Box>
      <Box
        sx={{
          backgroundImage: "url(/blogBg.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          height: { xs: "auto", md: "785px" },
          position: "relative",
        }}
      >
        <Box
          sx={{
            backgroundColor: "lightblue",
            opacity: "0.65",
            height: "100%",
            width: "100%",
            position: "absolute",
            zIndex: 1,
          }}
        />
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            width: { xs: "95%", md: "80%" },
            margin: "auto",
            paddingTop: "15px",
          }}
        >
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant="h6"
              sx={{ color: "#04A297", fontWeight: "bold" }}
            >
              OUR BLOG
            </Typography>
            <Typography
              variant="h4"
              sx={{ 
                color: "#023350", 
                fontWeight: "bold",
                fontSize: { xs: "1.5rem", md: "2rem" }
              }}
            >
              Our Latest News & <span style={{ color: "#04A297" }}>Blog</span>
            </Typography>
          </Box>

          <Grid container spacing={4} justifyContent="center" className="px-4 md:px-0">
            {imageCard.map((el, index) => (
              <Grid item key={index} sx={{ xs: 12, sm: 6, lg: 4 }} className="flex justify-center">
                <Card sx={{ 
                  width: { xs: "100%", sm: "450px" }, 
                  borderRadius: 3, 
                  boxShadow: 3 
                }}>
                  <Box sx={{ position: "relative", padding: { xs: "15px", md: "30px" } }}>
                    <Image
                      src={el.image}
                      alt="blog"
                      width={390}
                      height={180}
                      className="w-full h-auto rounded-[20px]"
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: { xs: 30, md: 50 },
                        left: { xs: "auto", md: 290 },
                        right: { xs: 15, md: "auto" },
                        backgroundColor: "#04A297",
                        color: "#fff",
                        px: 1.5,
                        py: 0.5,
                        borderRadius: 1,
                        display: "flex",
                        alignItems: "center",
                        fontSize: 14,
                        padding: "10px 15px",
                      }}
                    >
                      <CalendarMonthIcon sx={{ fontSize: 16 }} />
                      Aug 18, 2024
                    </Box>
                  </Box>

                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: 1,
                        flexDirection: { xs: "column", sm: "row" },
                        gap: { xs: 1, sm: 0 }
                      }}
                    >
                      <Typography variant="body2" sx={{ color: "#023350" }}>
                        By <strong>Alicia Davis</strong>
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#023350" }}>
                        1.6k Comments
                      </Typography>
                    </Box>
                    <Typography
                      variant="subtitle1"
                      sx={{ 
                        fontWeight: "bold", 
                        color: "#023350", 
                        mb: 1,
                        fontSize: { xs: "1rem", md: "1.25rem" }
                      }}
                    >
                      If You Are Going Use Passage You Need Sure There Middle
                      Text.
                    </Typography>
                    <Typography variant="body2" sx={{ color: "gray", mb: 2 }}>
                      There are many variations available the majority have
                      suffered alteration randomised words.
                    </Typography>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#04A297",
                        borderRadius: 2,
                        textTransform: "none",
                        px: 2.5,
                        py: 0.5,
                        ":hover": {
                          backgroundColor: "#04A297",
                        },
                      }}
                    >
                      Read More →
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          height: { xs: "auto", md: "450px" },
          backgroundColor: "#ffff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          py: { xs: 4, md: 0 },
          marginTop:"2px",
          marginBottom:"20px"
        }}
      >
        <Box sx={{ height: { xs: "auto", md: "300px" }, width: "100%", margin: "auto" }}>
          <Box
            sx={{
              width: { xs: "90%", md: "75%" },
              margin: "auto",
              minHeight: "100%",
              position: "relative",
              borderRadius: "20px",
              overflow: "hidden",
              backgroundImage: "url(/label.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              padding: "30px",
              color: "white",
              gap: { xs: 4, md: 0 }
            }}
          >
            <Box sx={{ zIndex: 2, maxWidth: { xs: "100%", md: "60%" } }}>
              <Typography 
                variant="h5" 
                fontWeight="bold"
                sx={{
                  fontSize: { xs: "1.25rem", md: "1.5rem" },
                  textAlign: { xs: "center", md: "left" }
                }}
              >
                OUR ENVIRONMENT, SOCIAL AND <br /> GOVERNANCE STRATEGY
              </Typography>
            </Box>
            <Button
              variant="contained"
              sx={{
                zIndex: 2,
                backgroundColor: "#003366",
                textTransform: "none",
                borderRadius: "999px",
                paddingX: "20px",
                paddingY: "10px",
                "&:hover": {
                  backgroundColor: "#002244",
                },
              }}
            >
              Download 2024 ESG Report →
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}