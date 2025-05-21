import {
    Box,
    Typography,
    TextField,
    Button,
    Grid,
    Paper,
    TextareaAutosize,
  } from "@mui/material";
//   import LocationOnOutlined from "@mui/icons-material/LocationOnOutlined";
//   import HeadphonesOutlined from "@mui/icons-material/HeadphonesOutlined";
//   import MailOutline from "@mui/icons-material/MailOutline";
//   import AccessTimeOutlined from "@mui/icons-material/AccessTimeOutlined";
import Input from "@/common_components/input";
  
  export default function ContactSection() {
    return (
        <Box>
            <Box sx={{width:"80%" , margin:"5% auto"}}>
                <Grid container spacing={2}>
                    <Grid>
                        <Box sx={{display:"grid" , gridTemplateColumns:"repeat(2 , 1fr)" ,  gap:"25px" }}>
                        <Box sx={{backgroundColor:"#ffff" , height:"250px" , width:"250px" , borderRadius:"25px"}}>
                        </Box>
                        <Box sx={{backgroundColor:"#ffff" , height:"250px" , width:"250px" , borderRadius:"25px"}}>
                        </Box>
                        <Box sx={{backgroundColor:"#ffff" , height:"250px" , width:"250px" , borderRadius:"25px"}}>
                        </Box>
                        <Box sx={{backgroundColor:"#ffff" , height:"250px" , width:"250px" , borderRadius:"25px"}}>
                        </Box>

                        </Box>
                    </Grid>
                    <Grid>
                        <Box sx={{display:"flex" , flexDirection:"column" , gap:"20px" ,  backgroundColor:"#ffff" , height:"530px" , padding:"25px" , borderRadius:"30px"}}>
                            <Typography variant="h5">Get In Touch</Typography>
                            <Typography variant="body2">
                            It is a long established fact that a reader will be distracted by the readable content of a page
                            words which even slightly when looking at its layout.
                            </Typography>

                            <Box sx={{display:"flex" ,  gap:"25px"}}>
                                <Input placeholder="Your Name" css={{width:"450px"}}></Input>
                                <Input placeholder="Your Email" css={{width:"450px"}}></Input>
                            </Box>

                            <Box>
                                <Input placeholder="Your Subject" css={{mb:3}}></Input>
                                <TextareaAutosize
                                    aria-label="minimum height"
                                    minRows={3}
                                    placeholder="Write Your message"
                                    style={{ width:900 , border:"1px solid gray"}}

                                />
                            </Box>

                            <Button variant="contained" sx={{backgroundColor:"#03A297" , color:"white"}}>
                                Send message 
                            </Button>

                        </Box>
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{ marginTop: "5%", width: "100%" , marginBottom:"8%"}}>
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
  