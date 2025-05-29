import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  IconButton,
  useTheme,
  useMediaQuery
} from "@mui/material";
import Image from "next/image";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from '@mui/icons-material/X';
import GoogleIcon from '@mui/icons-material/Google';
import Input from "@/common_components/input";
import Router from "next/router";

export default function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box>
      <Box
        sx={{
          backgroundImage: "url(/footerbg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: { xs: "1250px", sm: "900px", md: "750px" },
          width: "100%",
          position: "relative",
          objectFit: "cover",
          zIndex: 1,
          marginTop: "5%",
        }}>
        <Box
          sx={{
            backgroundColor: "black",
            height: "100%",
            width: "100%",
            position: "absolute",
            opacity: "0.85",
            color:"white"
          }}
        >
          <Box
            sx={{
              position: "relative",
              top: { xs: "-50px", sm: "-70px", md: "-90px" },
              width: { xs: "90%", md: "76%" },
              backgroundColor: "#023350",
              zIndex: 2,
              height: { xs: "auto", md: "165px" },
              padding: { xs: "20px", md: "10px" },
              margin: "auto",
              borderRadius: "20px",
              display: "flex",
              flexDirection: isMobile ? 'column' : 'row',
              justifyContent: "space-around",
              alignItems: "center",
              textAlign: isMobile ? 'center' : 'left'
            }}
          >
            <Box sx={{ display: "flex", flexDirection: isMobile ? 'column' : 'row', alignItems: "center", gap: isMobile ? 1 : 4 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Box sx={{
                  backgroundImage: "url(/polygon.png)",
                  height: "50px",
                  width: "50px",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  position: "relative",
                  display: "flex", justifyContent: "center", alignItems: "center"
                }}>
                  <Image src="/location.png" alt="" width={isMobile ? 20 : 35} height={isMobile ? 20 : 35}></Image>
                </Box>
                <Typography variant="body2">Address</Typography>
              </Box>
              {!isMobile && <Box sx={{ width: "1px", height: "60px", backgroundColor: "white", mx: 2 }} />}

              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Box sx={{
                  backgroundImage: "url(/polygon.png)",
                  height: "50px",
                  width: "50px",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  position: "relative",
                  display: "flex", justifyContent: "center", alignItems: "center"
                }}>
                  <Image src="/phone.png" alt="" width={isMobile ? 20 : 30} height={isMobile ? 20 : 30}></Image>
                </Box>
                <Typography variant="body2">Phone</Typography>
              </Box>
              {!isMobile && <Box sx={{ width: "1px", height: "60px", backgroundColor: "white", mx: 2 }} />}

              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Box sx={{
                  backgroundImage: "url(/polygon.png)",
                  height: "50px",
                  width: "50px",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  position: "relative",
                  display: "flex", justifyContent: "center", alignItems: "center"
                }}>
                  <Image src="/email.png" alt="" width={isMobile ? 20 : 30} height={isMobile ? 20 : 30}></Image>
                </Box>
                <Typography variant="body2">Email</Typography>
              </Box>
            </Box>
          </Box>

          <Box sx={{height:{ xs: "auto", md: "350px"} , width:{ xs: "90%", md: "78%"} , margin:"auto" , padding:{ xs: "10px", md: "15px"} , marginTop: isMobile ? '80px' : '20px'}}>
            <Grid container spacing={isMobile ? 2 : 3} direction={isTablet ? 'column' : 'row'}>
              <Grid item xs={12} md={4}>
                <Image src="/link.png" alt="" width={isMobile ? 150 : 200} height={isMobile ? 30 : 40} style={{marginBottom: isMobile ? "10px" : "20px"}}></Image>
                <Typography variant="body1" sx={{fontSize: isMobile ? "14px" : "16px" , mb: isMobile ? 2 : 3, textAlign: isMobile ? 'center' : 'left'}}>
                  Macat Megatrons is a thriving community where innovators, professionals, and enthusiasts come together to share knowledge, collaborate, and grow.
                </Typography>
                <Box sx={{width: isMobile ? "100%" : "200px" , display:"flex" , gap: isMobile ? "10px" : "15px" , cursor:"pointer", justifyContent: isMobile ? 'center' : 'flex-start'}}>
                  <a href=""><FacebookRoundedIcon/></a>
                  <a href=""><InstagramIcon /></a>
                  <a href=""><GoogleIcon/></a>
                  <a href=""><XIcon/></a>
                  <a href=""><LinkedInIcon/></a>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box sx={{display:"flex" , gap: isMobile ? "15px" : "30px" , cursor:"pointer", flexDirection: isMobile ? 'column' : 'row', textAlign: isMobile ? 'center' : 'left', alignItems: isMobile ? 'center' : 'flex-start'}}>
                  <Box>
                    <Typography variant="h6" sx={{marginBottom: isMobile ? "15px" : "25px", fontSize: isMobile ? "1rem" : "1.25rem"}}>Company</Typography>
                      <Typography variant="body2" sx={{marginBottom:"15px"}}>Global presence</Typography>
                      <Typography onClick={()=> Router.push('/products')} sx={{marginBottom:"15px"}}>Products</Typography>
                      <Typography onClick={()=> Router.push('/services')} sx={{marginBottom:"15px"}}>Services</Typography>
                      <Typography sx={{marginBottom:"15px"}}>Gallery</Typography>
                      <Typography sx={{marginBottom:"15px"}}>About Us</Typography>
                      <Typography sx={{marginBottom:"15px"}}>Blog</Typography>
                  </Box>
                  <Box sx={{ textAlign: isMobile ? 'center' : 'left'}}>
                    <Typography sx={{marginBottom: isMobile ? "20px" : "35px", fontSize: isMobile ? "1rem" : "1.25rem"}}>Global Certification</Typography>
                    <Box sx={{display:"grid" , gridTemplateColumns: isMobile ? "repeat(3 , 1fr)" : "repeat(3 , 1fr)" , gap: isMobile ? "10px" : "15px"}}>
                      {/* <Image src="/who.png" alt="" width={isMobile ? 80 : 140} height={isMobile ? 60 : 120}></Image>
                      <Image src="/iso.png" alt="" width={isMobile ? 80 : 140} height={isMobile ? 60 : 120}></Image>
                      <Image src="/FDCA.webp" alt="" width={isMobile ? 80 : 140} height={isMobile ? 60 : 120}></Image>
                      <Image src="/msme.png" alt="" width={isMobile ? 80 : 140} height={isMobile ? 60 : 120}></Image>
                      <Image src="/FDCA.webp" alt="" width={isMobile ? 80 : 140} height={isMobile ? 60 : 120}></Image>
                      <Image src="/msme.png" alt="" width={isMobile ? 80 : 140} height={isMobile ? 60 : 120}></Image> */}
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Grid container spacing={isMobile ? 1 : 2} mb={isMobile ? 2 : 4} direction={isMobile ? 'column' : 'row'}>
                  <Grid item xs={12} sm={6} md={12}>
                    <Typography>EMAIL ADDRESS*</Typography>
                    <Input type="text" placeholder="Enter your Email Address" required css={{ backgroundColor: "white",borderRadius:"10px"}}></Input>
                  </Grid>
                  <Grid item xs={12} sm={6} md={12}>
                    <Typography>MOBILE*</Typography>
                    <Input type="number" placeholder="Number" required css={{ backgroundColor: "white" ,borderRadius:"10px" , outline:"none"}}></Input>
                  </Grid>
                </Grid>
                <Button variant="outlined" sx={{width: isMobile ? "100%" : "440px" , borderRadius:"10px" , border:"1px solid white" , color:"white", textAlign: 'center'}}>
                    Contact Us
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
