import {
    Box,
    Typography,
    TextField,
    Button,
    Grid,
    Paper,
    TextareaAutosize,
    useTheme,
    useMediaQuery,
  } from "@mui/material";

import Input from "@/common_components/input";
import Image from "next/image";
  
  export default function ContactSection() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box>
            <Box sx={{width: {xs: "95%", sm: "90%", md: "80%"}, margin: "5% auto"}}>
                <Grid container spacing={2}>
                    <Grid xs={12} md={6}>
                        <Box sx={{
                            display: "grid", 
                            gridTemplateColumns: {
                                xs: "1fr",
                                sm: "repeat(2, 1fr)",
                                justifyContent:"center"
                            },
                            gap: "25px"
                        }}>
                            <Box sx={{
                                backgroundColor: "#ffff",
                                height: {xs: "200px", sm: "250px"},
                                width: "100%",
                                borderRadius: "25px",
                                display:"flex",
                                alignItems:"center",
                                flexDirection:"column",
                                justifyContent:"center",
                                ":hover":{
                                border:"2px dashed blue",
                                transition:"ease-in 25ms"
                                }
                            }}>
                                <Box sx={{backgroundColor:"#03A297" ,  height:"70px" , width:"70px", borderRadius:"50%" , mb:2, display:"flex", justifyContent:"center", alignItems:"center"}}>
                                    <Image src="/ofcaddress.png" alt="" width={30} height={30}></Image>
                                </Box>
                                <Typography variant="body1">Office Address</Typography>
                                <Typography variant="body2" sx={{color:"#222831" ,  padding:"4px  14px"}}>25/B Milford Elm Drive Road,<br />New York, USA</Typography>
                            </Box>
                            <Box sx={{
                                backgroundColor: "#ffff",
                                height: {xs: "200px", sm: "250px"},
                                width: "100%",
                                borderRadius: "25px",
                                display:"flex",
                                alignItems:"center",
                                flexDirection:"column",
                                justifyContent:"center",
                                 ":hover":{
                                border:"2px dashed blue",
                                transition:"ease-in 25ms"
                                }
                            }}>
                                <Box sx={{backgroundColor:"#03A297",height:"70px" , width:"70px", borderRadius:"50%", mb:2, display:"flex",justifyContent:"center", alignItems:"center"}}>
                                    <Image src="/call.png" alt="" width={30} height={30}></Image>
                                </Box>

                                <Typography variant="body1">Call Us</Typography>
                                <Typography variant="body2" sx={{color:"#222831" ,  padding:"4px  14px"}}>+2 123 4565 788 <br /> +2 123 4565 789</Typography>
                            </Box>
                            <Box sx={{
                                backgroundColor: "#ffff",
                                height: {xs: "200px", sm: "250px"},
                                width: "100%",
                                borderRadius: "25px",
                                display:"flex",
                                alignItems:"center",
                                flexDirection:"column",
                                justifyContent:"center",
                                 ":hover":{
                                border:"2px dashed blue",
                                transition:"ease-in 25ms"
                                }
                            }}>
                                <Box sx={{backgroundColor:"#03A297" , height:"70px" , width:"70px",mb:2, borderRadius:"50%" , display:"flex" , justifyContent:"center" , alignItems:"center"}}>
                                    <Image src="/email.png" alt="" width={30} height={30}></Image>
                                </Box>

                                <Typography variant="body1">Email Us</Typography>
                                <Typography variant="body2" sx={{color:"#222831" ,  padding:"4px  14px"}}>info@example.com <br /> support@example.com</Typography>
                            </Box>
                            <Box sx={{
                                backgroundColor: "#ffff",
                                height: {xs: "200px", sm: "250px"},
                                width: "100%",
                                borderRadius: "25px",
                                display:"flex",
                                alignItems:"center",
                                flexDirection:"column",
                                justifyContent:"center",
                                 ":hover":{
                                border:"2px dashed blue",
                                transition:"ease-in 25ms"
                                }
                            }}>
                                <Box sx={{backgroundColor:"#03A297" ,  padding:"25px", borderRadius:"50%" , mb:2, display:"flex" , justifyContent:"center" , alignItems:"center"}}>
                                    <Image src="/time.png" alt="" width={30} height={30}></Image>
                                </Box>

                                <Typography variant="body1">Open Time</Typography>
                                <Typography variant="body2" sx={{color:"#222831" ,  padding:"4px  14px"}}>Mon - Sat (10AM - 05PM) <br /> Sunday - <span style={{color:"red"}}>Closed</span></Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid xs={12} md={6}>
                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "20px",
                            backgroundColor: "#ffff",
                            height: {xs: "auto", md: "530px"},
                            padding: {xs: "15px", md: "25px"},
                            borderRadius: "30px"
                        }}>
                            <Typography variant="h5">Get In Touch</Typography>
                            <Typography variant="body2">
                                It is a long established fact that a reader will be distracted by the readable content of a page
                                words which even slightly when looking at its layout.
                            </Typography>

                            <Box sx={{
                                display: "flex",
                                flexDirection: {xs: "column", md: "row"},
                                gap: "25px"
                            }}>
                                <Input 
                                    placeholder="Your Name" 
                                    css={{
                                        width: {xs: "100%", md: "450px"}
                                    }}
                                />
                                <Input 
                                    placeholder="Your Email" 
                                    css={{
                                        width: {xs: "100%", md: "450px"}
                                    }}
                                />
                            </Box>

                            <Box>
                                <Input 
                                    placeholder="Your Subject" 
                                    css={{
                                        width: "100%",
                                        mb: 3
                                    }}
                                />
                                <TextareaAutosize
                                    aria-label="minimum height"
                                    minRows={3}
                                    placeholder="Write Your message"
                                    style={{ 
                                        width: "100%",
                                        border: "1px solid gray",
                                        borderRadius: "4px",
                                        padding: "8px"
                                    }}
                                />
                            </Box>

                            <Button 
                                variant="contained" 
                                sx={{
                                    backgroundColor: "#03A297",
                                    color: "white",
                                    width: {xs: "100%", md: "auto"}
                                }}
                            >
                                Send message 
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{ marginTop: "5%", width: "100%", marginBottom: "15%"}}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.101096486885!2d72.89089318659586!3d21.188142530225708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f568fa1e0cd%3A0x1148a4a2bf503146!2sCURIGEN%20PHARMACEUTICALS%20LLP!5e0!3m2!1sen!2sus!4v1747761024529!5m2!1sen!2sus"
                    width="100%"
                    height="300"
                    style={{ border: 0, borderRadius: "8px" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                />
            </Box>
        </Box>
    );
  }
  