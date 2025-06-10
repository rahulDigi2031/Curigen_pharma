import BackgroundImage from "@/common_components/backgroundComman";
import Navbar from "@/Components/navbar";
import { Box, Typography,} from "@mui/material";



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