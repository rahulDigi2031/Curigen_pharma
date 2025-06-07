import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  IconButton,
  useTheme,
  useMediaQuery,
  Container,
} from "@mui/material";
import Image from "next/image";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import GoogleIcon from "@mui/icons-material/Google";
import Input from "@/common_components/input";
import Router from "next/router";

export default function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const navLinks = [
  { text: "Global presence", path: "/globalPresence" },
  { text: "Products", path: "/products" },
  { text: "Services", path: "/services/ContractManufacturing" },
  { text: "Gallery", path: "/gallery" },
  { text: "About Us", path: "/aboutUs" },
  { text: "Blog", path: "/blog" },
];

  return (
    <Box>
      <Box
        sx={{
          backgroundImage: "url(/footerbg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: { xs: "1500px", sm: "900px", md: "550px" },
          top: { xs: "100px", sm: "-70px", md: "38px" },
          width: "100%",
          position: "relative",
          objectFit: "cover",
          zIndex: 1,
          marginTop: "5%",
        }}
      >
        <Box
          sx={{
            backgroundColor: "black",
            height: "100%",
            width: "100%",
            position: "absolute",
            opacity: {xs:"0.84" , md:"0.88"},
            color: "white",
          }}
        >
          <Container maxWidth="xl">
            <Box
              sx={{
                position: "relative",
                top: { xs: "-125px", sm: "-70px", md: "-110px" },
                width: { xs: "90%", md: "100%", lg: "97%" },
                backgroundColor: "#023350",
                opacity: 200,
                zIndex: 2,
                overflowY: "hidden",
                height: { xs: "fill", md: "180px" },
                padding: { xs: "20px", md: "10px" },
                margin: "auto",
                borderRadius: "20px",
                display: "flex",
                flexDirection: isMobile ? "row" : "row",
                justifyContent: "space-around",
                alignItems: "center",
                textAlign: isMobile ? "center" : "left",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: isMobile ? "column" : "row",
                  alignItems: "center",
                  justifyContent: "space-around",
                  width: "100%",
                  gap: isMobile ? 4 : 0,
                }}
              >
                <Box
                  sx={{ width: "200px", display: "flex", alignItems: "center" }}
                >
                  {!isMobile && (
                    <Box
                      sx={{
                        width: "1px",
                        height: "60px",
                        backgroundColor: "white",
                        mx: 2,
                      }}
                    />
                  )}
                  <Typography variant="body2">Address</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <Box
                    sx={{
                      backgroundImage: "url(/polygon.png)",
                      height: "70px",
                      width: "70px",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "contain",
                      position: "relative",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "15px",
                    }}
                  >
                    <Image
                      src="/location.png"
                      alt=""
                      width={isMobile ? 20 : 35}
                      height={isMobile ? 20 : 35}
                    ></Image>
                  </Box>

                  <Typography variant="body1" sx={{ fontWeight: "600" }}>
                    Find Us On Map
                  </Typography>
                </Box>

                <Box
                  sx={{ width: "200px", display: "flex", alignItems: "center" }}
                >
                  {!isMobile && (
                    <Box
                      sx={{
                        width: "1px",
                        height: "60px",
                        backgroundColor: "white",
                        mx: 2,
                      }}
                    />
                  )}
                  <Typography variant="body2">Phone</Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <Box
                    sx={{
                      backgroundImage: "url(/polygon.png)",
                      height: "70px",
                      width: "70px",
                      padding: "15px",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "contain",
                      position: "relative",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      src="/phone.png"
                      alt=""
                      width={isMobile ? 20 : 30}
                      height={isMobile ? 20 : 30}
                    ></Image>
                  </Box>
                  <Typography variant="body1" sx={{ fontWeight: "600" }}>
                    +91 256-253-2538
                  </Typography>
                </Box>

                <Box
                  sx={{ width: "200px", display: "flex", alignItems: "center" }}
                >
                  {!isMobile && (
                    <Box
                      sx={{
                        width: "1px",
                        height: "60px",
                        backgroundColor: "white",
                        mx: 2,
                      }}
                    />
                  )}
                  <Typography variant="body2">Email</Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <Box
                    sx={{
                      backgroundImage: "url(/polygon.png)",
                      height: "70px",
                      width: "70px",
                      padding: "15px",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "contain",
                      position: "relative",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      src="/email.png"
                      alt=""
                      width={isMobile ? 20 : 30}
                      height={isMobile ? 20 : 30}
                    ></Image>
                  </Box>

                  <Typography variant="body1" sx={{ fontWeight: "600" }}>
                    info@curigenpharmaceuticals.com
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Container>

          <Container maxWidth="xl">
          <Box sx={{ height: { xs: "auto", md: "350px" }, margin: "auto",
          padding: { xs: "8px", md: "0px 16px" },
          marginTop: isMobile ? "-70px" : "20px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Grid
          container
          spacing={isMobile ? 2 : 3}
          direction={isTablet ? "column" : "row"}
          alignItems={isTablet ? 'center' : 'flex-start'}
        >
          {/* Column 1: Logo and Description */}
          <Grid item xs={12} md={4}>
            <Image
              src="/link.png"
              alt=""
              width={isMobile ? 150 : 200}
              height={isMobile ? 30 : 40}
              style={{ marginBottom: isMobile ? "10px" : "20px" }}
            />
            <Typography variant="body1" sx={{ mb: 2, width: {md:"500px" , xs:"320px"}, textAlign: isMobile ? 'center' : 'left' }}>
              Macat Megatrons is a thriving community where innovators,
              professionals, and enthusiasts come together to share knowledge,
              collaborate, and grow.
            </Typography>
            <Box
              sx={{
                width: isMobile ? "100%" : "200px",
                display: "flex",
                gap: isMobile ? "10px" : "15px",
                cursor: "pointer",
                justifyContent: isMobile ? "center" : "flex-start",
              }}
            >
              <a href=""><FacebookRoundedIcon /></a>
              <a href=""><InstagramIcon /></a>
              <a href=""><GoogleIcon /></a>
              <a href=""><XIcon /></a>
              <a href=""><LinkedInIcon /></a>
            </Box>
          </Grid>

          {/* Column 2: Company Links and Certifications */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: "flex", gap: isMobile ? "15px" : "30px", flexDirection: isMobile ? "column" : "row",
                textAlign: isMobile ? "center" : "left",
                alignItems: isMobile ? "center" : "flex-start", }}>
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    marginBottom: isMobile ? "15px" : "25px",
                    fontSize: isMobile ? "1rem" : "1.25rem", }}>
                  Company
                </Typography>
                  {navLinks.map(({ text, path }, idx) => (
                    <Typography
                      key={idx}
                      variant="body2"
                      onClick={() => Router.push(path)}
                      sx={{ marginBottom: "15px", cursor: "pointer" }} >{text}
                    </Typography>
                  ))}
              </Box>

              <Box sx={{ textAlign: isMobile ? "center" : "left" }}>
                <Typography
                  sx={{
                    marginBottom: isMobile ? "20px" : "35px",
                    fontSize: isMobile ? "1rem" : "1.25rem",
                  }}
                >
                  Global Certification
                </Typography>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: isMobile ? "10px" : "15px",
                    mb: 2,
                  }}
                >
                  {["/FDCA.webp", "/iso.png", "/FDCA.webp", "/iso.png", "/FDCA.webp", "/iso.png"].map(
                    (src, idx) => (
                      <Image
                        key={idx}
                        src={src}
                        alt=""
                        width={isMobile ? 70 : 100}
                        height={isMobile ? 60 : 120}
                      />
                    )
                  )}
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Column 3: Email and Mobile Form with Tailwind-based Box */}
          <Grid item xs={12} md={4}>
          <Box className="w-full md:w-1/3 flex flex-col" sx={{
              alignItems: isMobile ? "center" : "flex-start",
              paddingTop: isMobile ? "10px" : "0px",
            }}
          >
            <Box sx={{display:{xs:"block" , md:"flex" , lg:"flex" , xl:"flex"} , gap:{lg:"15px"}}}>
              <Box className="w-full max-w-[440px]">
                
                <Input
                 labelName={"EMAIL ADDRESS"}
                  type="text"
                  placeholder="Enter email"
                  required
                  css={{
                    backgroundColor:"white",
                    borderRadius:"10px",
                    width:{md:"180px"},
                    marginBottom:{xs:"10px"}
                  }}
                ></Input>
              </Box>                     
              <Box className="w-full max-w-[440px]">
                
                <Input
                labelName={"MOBILE"}
                  type="text"
                  placeholder="Number"
                  required
                  css={{
                    backgroundColor: "white",
                    borderRadius: "10px",
                    width:{md:"180px"},
                    mb:{xs:3 , md:0}
                  }}
                ></Input>
              </Box>
            </Box>
            <Button
              variant="outlined"
              className="w-full max-w-[440px] text-white"
              sx={{
                borderRadius: "10px",
                border: "1px solid white",
                color: "white",
                mt: isMobile ? 0 : 2,
                width:{xs:"250px" , md:"373px" , lg:"373px" , xl:"373px"}
              }}
            >
              Contact Us
            </Button>
          </Box>
          </Grid>
        </Grid>
      </Box>
          </Container>
        </Box>
      </Box>
    </Box>
  );
}
