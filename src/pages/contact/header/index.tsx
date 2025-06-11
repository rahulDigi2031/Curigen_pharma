import BackgroundImage from "@/common_components/backgroundComman";
import Navbar from "@/Components/navbar";
import { Box, Container, Typography,} from "@mui/material";



export default function HeaderContact(){

    return(
        <>
            <Box>
                <BackgroundImage imageUrl="/ContactBg.png" css={{height:"350px" , width:"100%" , objectFit:"cover"}}>
                    <Navbar/>

                    <Container maxWidth="xl">
                            <Box sx={{width:"95%" , margin:"auto" , padding:"20px"}}>
                        <Typography variant="h3" sx={{color:"#023350" , fontWeight:"800", mb: 2}}>Contact Us</Typography>
                        <Typography variant="body1" sx={{color:"#023350" , fontWeight:"600"}}>Home &gt;&gt; Contact us</Typography>
                    </Box>
                    </Container>

                </BackgroundImage>
            </Box>
            {/* Contact Section */}
        </>
    )
}