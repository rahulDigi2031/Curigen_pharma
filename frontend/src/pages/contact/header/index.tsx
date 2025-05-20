import BackgroundImage from "@/common_components/backgroundComman";
import Navbar from "@/Components/navbar";
// import ContactInfoCard from "@/Components/ContactInfoCard";
import { Box, Typography, TextField, Button, Card, CardContent, Grid, Paper } from "@mui/material";
// import LocationOnOutlined from "@mui/icons-material/LocationOnOutlined";
// import HeadphonesOutlined from "@mui/icons-material/HeadphonesOutlined";
// import MailOutline from "@mui/icons-material/MailOutline";
// import AccessTimeOutlined from "@mui/icons-material/AccessTimeOutlined";


export default function HeaderContact(){

    return(
        <>
            <Box>
                <BackgroundImage imageUrl="/ContactBg.png" css={{height:"350px" , width:"100%" , objectFit:"cover"}}>
                    <Navbar/>

                    <Box sx={{width:"80%" , margin:"auto" , padding:"20px"}}>
                        <Typography variant="h3" sx={{color:"#023350" , fontWeight:"800", mb: 2}}>Contact Us</Typography>
                        <Typography variant="body1" sx={{color:"#023350" , fontWeight:"600"}}>Home &gt;&gt; Contact us</Typography>
                    </Box>

                </BackgroundImage>
            </Box>
            {/* Contact Section */}
        </>
    )
}