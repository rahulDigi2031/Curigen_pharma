import { Box, Typography, Button, Stack, Grid, Container } from "@mui/material";
import Image from "next/image";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function HomeGallerySection() {
  return (
    <Box>
      <Box sx={{ width: "100%", margin: "auto" }}>
        <Container maxWidth="xl">
          <Box
            sx={{
              width: "100%",
              margin: "auto",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 2,
              alignItems: "center",
            }}
          >
            {/* Image Section */}
            <Box sx={{ flex: 1 }}>
              <Image
                src="/01.png"
                alt="Business Vision"
                width={1000}
                height={800}
                style={{
                  width: "700px",
                  height: "500px",
                  borderRadius: "12px",
                  objectFit: "cover",
                }}
              />
            </Box>

            {/* Center Text Section */}
            <Box sx={{ flex: 2 }}>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", color: "#002B5B" }}
              >
                {" "}
                WE ARE DEDICATED{" "}
              </Typography>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", color: "#23A397", mb: 2 }}
              >
                {" "}
                TO OUR CUSTOMERS AND PRODUCTS{" "}
              </Typography>
              <Typography color="text.secondary" paragraph>
                Our organization has been committed to providing a wide range of
                quality and affordable Healthcare solutions to a large number of
                healthcare institutions and medical facilities. We intend to be
                the ideal partner for
              </Typography>
              <Typography color="text.secondary" paragraph>
                Our organization has been committed to providing a wide range of
                quality and affordable Healthcare solutions to a large number of
                healthcare institutions and medical facilities. We intend to be
                the ideal partner for
              </Typography>
            </Box>

            {/* Right Button Stack */}
            <Stack spacing={2} sx={{ flex: 1 }}>
              {[
                "Mission",
                "Vision",
                "Quality Policy",
                "Management's Message",
              ].map((label, index) => (
                <Button
                  key={index}
                  variant="outlined"
                  sx={{
                    border: "none",
                    backgroundColor: "#D4D4D4",
                    borderRadius: 2,
                    textTransform: "none",
                    fontWeight: 500,
                    padding: "14px 18px",
                    color: "black",
                    ":hover": {
                      border: "3px dashed white",
                      backgroundColor: "#22A396",
                      color: "white",
                      fontSize: "17px",
                      padding: "14px 20px",
                    },
                  }}
                >
                  {" "}
                  {label}
                </Button>
              ))}
            </Stack>
          </Box>
        </Container>
      </Box>
      {/* Gallery images section  */}
      <Container maxWidth="xl">
        <Box sx={{ textAlign: "center", py: 6 }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", color: "#23A397", mb: 4 }}
          >
            {" "}
            OUR GALLERY{" "}
          </Typography>
          <Typography variant="h5" sx={{ mb: 4 }}>
            {" "}
            Let's Check Our Photo Gallery{" "}
          </Typography>

          <Box sx={{ width: { xs: "95%", md: "100%" }, margin: "15px auto" }}>
            <Grid container spacing={2}>
              <Grid size={6} item xs={12} md={6}>
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: { xs: "200px", sm: "250px", md: "300px" },
                    borderRadius: "20px",
                    overflow: "hidden",
                    "&:hover .overlay": { opacity: 1 },
                  }}
                >
                  <Image
                    src="/gallery1.png"
                    alt=""
                    fill
                    style={{ objectFit: "cover", borderRadius: "20px" }}
                  />
                  <Box
                    className="overlay"
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      bgcolor: "rgba(0, 0, 0, 0.70)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 2,
                      opacity: 0,
                      transition: "opacity 0.3s ease-in-out",
                    }}
                  >
                    <FacebookRoundedIcon sx={{ color: "#fff", fontSize: 30 }} />
                    <InstagramIcon sx={{ color: "#fff", fontSize: 30 }} />
                    <LinkedInIcon sx={{ color: "#fff", fontSize: 30 }} />
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    gap: { xs: 1, md: 2 },
                    marginTop: "30px",
                    flexDirection: { xs: "column", sm: "row" },
                  }}
                >
                  {[{ src: "/gallery4.png" }, { src: "/gallery5.png" }].map(
                    (img, index) => (
                      <Box
                        key={index}
                        sx={{
                          position: "relative",
                          width: "100%",
                          height: { xs: "200px", sm: "250px", md: "320px" },
                          borderRadius: "20px",
                          overflow: "hidden",
                          "&:hover .overlay": { opacity: 1 },
                        }}
                      >
                        <Image
                          src={img.src}
                          alt=""
                          fill
                          style={{ objectFit: "cover", borderRadius: "20px" }}
                        />
                        <Box
                          className="overlay"
                          sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            bgcolor: "rgba(0, 0, 0, 0.70)",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: 2,
                            opacity: 0,
                            transition: "opacity 0.3s ease-in-out",
                          }}
                        >
                          <FacebookRoundedIcon
                            sx={{ color: "#fff", fontSize: 30 }}
                          />
                          <InstagramIcon sx={{ color: "#fff", fontSize: 30 }} />
                          <LinkedInIcon sx={{ color: "#fff", fontSize: 30 }} />
                        </Box>
                      </Box>
                    )
                  )}
                </Box>
              </Grid>

              <Grid size={6} item xs={12} md={6}>
                <Box
                  sx={{
                    display: "flex",
                    gap: { xs: 2, md: 2 },
                    flexDirection: { xs: "column", sm: "row" },
                  }}
                >
                  {[{ src: "/gallery2.png" }, { src: "/gallery3.png" }].map(
                    (img, index) => (
                      <Box
                        key={index}
                        sx={{
                          position: "relative",
                          width: "100%",
                          height: { xs: "200px", sm: "250px", md: "300px" },
                          borderRadius: "20px",
                          overflow: "hidden",
                          "&:hover .overlay": { opacity: 1 },
                        }}
                      >
                        <Image
                          src={img.src}
                          alt=""
                          fill
                          style={{ objectFit: "cover", borderRadius: "20px" }}
                        />
                        <Box
                          className="overlay"
                          sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            bgcolor: "rgba(0, 0, 0, 0.70)",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: 2,
                            opacity: 0,
                            transition: "opacity 0.3s ease-in-out",
                          }}
                        >
                          <FacebookRoundedIcon
                            sx={{ color: "#fff", fontSize: 30 }}
                          />
                          <InstagramIcon sx={{ color: "#fff", fontSize: 30 }} />
                          <LinkedInIcon sx={{ color: "#fff", fontSize: 30 }} />
                        </Box>
                      </Box>
                    )
                  )}
                </Box>

                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: { xs: "200px", sm: "250px", md: "320px" },
                    borderRadius: "20px",
                    overflow: "hidden",
                    marginTop: "35px",
                    "&:hover .overlay": { opacity: 1 },
                  }}
                >
                  <Image
                    src="/gallery6.png"
                    alt=""
                    fill
                    style={{ objectFit: "cover", borderRadius: "20px" }}
                  />
                  <Box
                    className="overlay"
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      bgcolor: "rgba(0,0,0,0.5)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 2,
                      opacity: 0,
                      transition: "opacity 0.3s ease-in-out",
                    }}
                  >
                    <FacebookRoundedIcon sx={{ color: "#fff", fontSize: 30 }} />
                    <InstagramIcon sx={{ color: "#fff", fontSize: 30 }} />
                    <LinkedInIcon sx={{ color: "#fff", fontSize: 30 }} />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
