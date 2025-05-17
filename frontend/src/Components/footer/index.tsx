import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  IconButton,
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

  return (
    <Box>
      <Box
        sx={{
          backgroundImage: "url(/footerbg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "515px",
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
              top: "",
              width: "76%",
              backgroundColor: "#023350",
              zIndex: 2,
              height: "165px",
              padding: "40px",
              margin: "auto",
              borderRadius: "20px",
              bottom: "90px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                color: "white",
              }}
            >
              {/* divider */}
              <Box
                sx={{
                  width: "1px",
                  height: "60px",
                  backgroundColor: "white",
                  mx: 4,
                }}
              />
              <Typography>Address</Typography>
              <br />
              <Box
                sx={{
                  backgroundImage: "url(/polygon.png)",
                  height: "100px",
                  width: "100px",
                  backgroundRepeat: "no-repeat",
                  objectFit: "cover",
                  position: "relative",
                }}
              >
                <Image
                  src="/location.png"
                  alt=""
                  width={35}
                  height={35}
                  style={{ position: "absolute", left: "27px", top: "28px" }}
                ></Image>
              </Box>

              <Box sx={{
                  width: "1px",
                  height: "60px",
                  backgroundColor: "white",
                  mx: 4,
                }}/>
              <Typography>Phone</Typography>
              <Box
                sx={{
                  backgroundImage: "url(/polygon.png)",
                  height: "100px",
                  width: "100px",
                  backgroundRepeat: "no-repeat",
                  objectFit: "cover",
                  position: "relative",
                }}
              >
                <Image
                  src="/phone.png"
                  alt=""
                  width={30}
                  height={30}
                  style={{ position: "absolute", left: "32px", top: "35px" }}
                ></Image>
              </Box>

              <Box
                sx={{
                  width: "1px",
                  height: "60px",
                  backgroundColor: "white",
                  mx: 4,
                }}
              />
              <Typography>Email</Typography>
              <Box
                sx={{
                  backgroundImage: "url(/polygon.png)",
                  height: "100px",
                  width: "100px",
                  backgroundRepeat: "no-repeat",
                  objectFit: "cover",
                  position: "relative",
                }}
              >
                <Image
                  src="/email.png"
                  alt=""
                  width={30}
                  height={30}
                  style={{ position: "absolute", left: "32px", top: "35px" }}
                ></Image>
              </Box>
            </Box>
          </Box>
              {/* footer content */}
              <Box sx={{height:"350px" , width:"78%" , margin:"auto" , padding:"15px"}}>
                  <Grid container spacing={3}>
                      <Grid size={4}>
                          <Image src="/link.png" alt="" width={200} height={40} style={{marginBottom:"20px"}}></Image>
                          <Typography variant="body1" sx={{fontSize:"16px" , mb:3}}>Macat Megatrons is a thriving community where innovators, professionals, and enthusiasts come together to share knowledge, collaborate, and grow.</Typography>
                          <Box sx={{width:"200px" , display:"flex" , gap:"15px" , cursor:"pointer"}}>
                              <a href=""><FacebookRoundedIcon/></a>
                              <a href=""><InstagramIcon /></a>
                              <a href=""><GoogleIcon/></a>
                              <a href=""><XIcon/></a>
                              <a href=""><LinkedInIcon/></a>
                          </Box>
                      </Grid>
                      <Grid size={4}>
                          <Box sx={{display:"flex" , gap:"30px" , cursor:"pointer"}}>
                              <Box>
                                  <Typography variant="h6" sx={{marginBottom:"25px"}}>Company</Typography>
                                    <Typography variant="body2" sx={{marginBottom:"15px"}}>Global presence</Typography>
                                    <Typography onClick={()=> Router.push('/products')} sx={{marginBottom:"15px"}}>Products</Typography>
                                    <Typography onClick={()=> Router.push('/services')} sx={{marginBottom:"15px"}}>Services</Typography>
                                    <Typography sx={{marginBottom:"15px"}}>Gallery</Typography>
                                    <Typography sx={{marginBottom:"15px"}}>About Us</Typography>
                                    <Typography sx={{marginBottom:"15px"}}>Blog</Typography>
                              </Box>
                              <Box>
                                  <Typography sx={{marginBottom:"35px"}}>Global Certification</Typography>
                                  <Box sx={{display:"grid" , gridTemplateColumns:"repeat(3 , 1fr)" , gap:"15px"}}>
                                      <Image src="" alt="" width={140} height={120}></Image>
                                      <Image src="" alt="" width={140} height={120}></Image>
                                      <Image src="" alt="" width={140} height={120}></Image>
                                      <Image src="" alt="" width={140} height={120}></Image>
                                      <Image src="" alt="" width={140} height={120}></Image>
                                      <Image src="" alt="" width={140} height={120}></Image>
                                  </Box>
                              </Box>
                          </Box>
                      </Grid>
                      <Grid size={4}>
                            <Grid container spacing={2} mb={4}>
                                  <Grid>
                                      <Typography>EMAIL ADDRESS*</Typography>
                                      <Input type="text" placeholder="Enter your Email Address" required css={{ backgroundColor: "white",borderRadius:"10px"}}></Input>
                                  </Grid>
                                  <Grid>
                                      <Typography>MOBILE*</Typography>
                                      <Input type="number" placeholder="Number" required css={{ backgroundColor: "white" ,borderRadius:"10px" , outline:"none"}}></Input>
                                  </Grid>
                            </Grid>
                            <Button variant="outlined" sx={{width:"440px" , borderRadius:"10px" , border:"1px solid white" , color:"white"}}>
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
