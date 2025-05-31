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
          height: { xs: "1500px", sm: "900px", md: "820px" },
          top: { xs: "100px", sm: "-70px", md: "45px" },
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
              top: { xs: "-125px", sm: "-70px", md: "-70px" },
              width: { xs: "90%", md: "76%" },
              backgroundColor: "#023350",
              opacity:200,
              zIndex: 2,
              overflowY:"hidden",
              height: { xs: "fill", md: "165px" },
              padding: { xs: "20px", md: "10px" },
              margin: "auto",
              borderRadius: "20px",
              display: "flex",
              flexDirection: isMobile ? 'row' : 'row',
              justifyContent: "space-around",
              alignItems: "center",
              textAlign: isMobile ? 'center' : 'left'
            }}
          >
            <Box sx={{ display: "flex", flexDirection: isMobile ? 'column' : 'row', alignItems: "center", justifyContent: "space-around", width: "100%", gap: isMobile ? 4 : 0 }}>
              <Box sx={{width:"200px" , display:"flex", alignItems:"center"}}>
              {!isMobile && <Box sx={{ width: "1px", height: "60px", backgroundColor: "white", mx: 2 }} />}
              <Typography variant="body2">Address</Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1 }}>
                <Box sx={{
                  backgroundImage: "url(/polygon.png)",
                  height: "70px",
                  width: "70px",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  position: "relative",
                  display: "flex", justifyContent: "center", alignItems: "center",
                  padding:"15px"
                }}>
                  <Image src="/location.png" alt="" width={isMobile ? 20 : 35} height={isMobile ? 20 : 35}></Image>
                </Box>
                
                <Typography variant="body1" sx={{fontWeight:"600"}}>Find Us On Map</Typography>
              </Box>
              
              <Box sx={{width:"200px"  , display:"flex", alignItems:"center"}}>
              {!isMobile && <Box sx={{ width: "1px", height: "60px", backgroundColor: "white", mx: 2 }} />}
              <Typography variant="body2">Phone</Typography>
              </Box>

              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1 }}>
                <Box sx={{
                  backgroundImage: "url(/polygon.png)",
                  height: "70px",
                  width: "70px",
                  padding:"15px",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  position: "relative",
                  display: "flex", justifyContent: "center", alignItems: "center"
                }}>
                  <Image src="/phone.png" alt="" width={isMobile ? 20 : 30} height={isMobile ? 20 : 30}></Image>
                </Box>
                <Typography variant="body1" sx={{fontWeight:"600"}}>+91 256-253-2538</Typography>
              </Box>

              <Box sx={{width:"200px" , display:"flex", alignItems:"center"}}>
              {!isMobile && <Box sx={{ width: "1px", height: "60px", backgroundColor: "white", mx: 2 }} />}
              <Typography variant="body2">Email</Typography>
              </Box>

              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1 }}>
                <Box sx={{
                  backgroundImage: "url(/polygon.png)",
                  height: "70px",
                  width: "70px",
                  padding:"15px",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  position: "relative",
                  display: "flex", justifyContent: "center", alignItems: "center"
                }}>
                  <Image src="/email.png" alt="" width={isMobile ? 20 : 30} height={isMobile ? 20 : 30}></Image>
                </Box>
                
                <Typography variant="body1" sx={{fontWeight:"600"}}>info@curigenpharmaceuticals.com</Typography>
              </Box>
            </Box>
          </Box>

          <Box sx={{height:{ xs: "auto", md: "350px"} , width:{ xs: "90%", md: "78%"} , margin:"auto" , padding:{ xs: "10px", md: "15px"} , marginTop: isMobile ? '-70px' : '20px'}}>
            <Grid container spacing={isMobile ? 2 : 3} direction={isTablet ? 'column' : 'row'}>
              <Grid item xs={12} md={4}>
                <Image src="/link.png" alt="" width={isMobile ? 150 : 200} height={isMobile ? 30 : 40} style={{marginBottom: isMobile ? "10px" : "20px"}}></Image>
                <Typography variant="body1" sx={{mb:2 ,  width:"335px"}}>
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
                    <Box sx={{display:"grid" , gridTemplateColumns: isMobile ? "repeat(3 , 1fr)" : "repeat(3 , 1fr)" , gap: isMobile ? "10px" : "15px" ,  mb:2}}>
                      <Image src="/FDCA.webp" alt="" width={isMobile ? 70 :100} height={isMobile ? 60 : 120}></Image>
                      <Image src="/iso.png" alt="" width={isMobile ? 70 :100} height={isMobile ? 60 : 120}></Image>
                      <Image src="/FDCA.webp" alt="" width={isMobile ? 70 :100} height={isMobile ? 60 : 120}></Image>
                      <Image src="/iso.png" alt="" width={isMobile ? 70 :100} height={isMobile ? 60 : 120}></Image>
                      <Image src="/FDCA.webp" alt="" width={isMobile ? 70 :100} height={isMobile ? 60 : 120}></Image>
                      <Image src="/iso.png" alt="" width={isMobile ? 70 :100} height={isMobile ? 60 : 120}></Image>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: isMobile ? 'center' : 'flex-start', width: '100%' }}>
                <Grid container spacing={isMobile ? 1 : 2} mb={isMobile ? 2 : 4} direction={isMobile ? 'column' : 'row'}>
                  <Grid item xs={12} sm={12} md={12} sx={{ width: '100%' }}>
                    <Typography>EMAIL ADDRESS</Typography>
                    <Input 
                      type="text" 
                      placeholder="Enter your Email Address" 
                      required 
                      css={{
                        backgroundColor: "white",
                        borderRadius: "10px",
                        width: "100%", 
                        maxWidth: "440px"
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} sx={{ width: '100%' }}>
                    <Typography>MOBILE</Typography>
                    <Input 
                      type="number" 
                      placeholder="Number" 
                      required 
                      css={{
                        backgroundColor: "white",
                        borderRadius: "10px",
                        outline: "none",
                        width: "100%", 
                        maxWidth: "440px"
                      }}
                    />
                  </Grid>
                </Grid>
                <Button 
                  variant="outlined" 
                  sx={{
                    width: "100%", 
                    maxWidth: "440px",
                    borderRadius: "10px",
                    border: "1px solid white",
                    color: "white",
                    textAlign: 'center',
                    mt: isMobile ? 0 : 2
                  }}
                >
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