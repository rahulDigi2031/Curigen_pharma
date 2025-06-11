import BackgroundImage from "@/common_components/backgroundComman";
import Navbar from "@/Components/navbar";
import { Box, Container, Typography } from "@mui/material";


export default function HeaderAboutUs(){
    return(
        <Box sx={{backgroundColor:"#fff"}}>

            <header>
                <BackgroundImage imageUrl={"/ContactBg.png"} css={{height:"350px" , width:"100%" , objectFit:"cover"}}>
                    <Navbar/>
                        <Container maxWidth="xl">
                            <Box sx={{padding:{xs:"10px" , sm:"20px"}, width:{xs:"90%" , md:"95%"} ,  margin:"25px auto",}}>
                                <Typography variant="h3" sx={{fontWeight:"800" , color:"#023350" , fontSize:{xs:"1.5rem" , sm:"2rem"}}}>About Us</Typography>
                                <Typography variant="h6" sx={{color:"#023350" , fontSize:{xs:"1rem" , sm:"1.25rem" , fontWeight:"450"}}}>Home &gt;&gt; About Us</Typography>
                            </Box>
                        </Container>
                </BackgroundImage>
            </header>

            
        </Box>
    )
}