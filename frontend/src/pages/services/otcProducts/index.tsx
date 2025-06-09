import BackgroundImage from "@/common_components/backgroundComman";
import Footer from "@/Components/footer";
import Navbar from "@/Components/navbar";
import { Box, Container, Typography } from "@mui/material";

export default function OTCProducts(){
    return (
        <Box>
            <Box>
                <BackgroundImage imageUrl="/ServicesBG.png" css={{height:"400px" , width:"100%" , objectFit:"cover"}}>
                    <Navbar/>
                    <Container maxWidth="xl">
                        <Box sx={{width:"95%" , margin:"auto", padding:"20px"}}>
                        <Typography variant="h4" sx={{fontWeight:"700",mb:3,color:"#023350"}}>Services</Typography>
                        <Typography variant="h5" sx={{color:"#023350" , fontWeight:"450"}}>Home &gt;&gt; Services &gt;&gt; OTC Products</Typography>
                    </Box>
                    </Container>
                </BackgroundImage>
            </Box>

            <Box sx={{height:"400px",width:"100%" , display:"flex",marginBottom:"140px"}}>
            <Container maxWidth="xl" sx={{width:"80%", padding:"15px", margin:"auto"}}>
                <Box>
                    <Typography variant="h4" sx={{fontSize:{xs:"2rem"} , color:"#023350" , fontWeight:"700",mb:3}}>OTC <span style={{color:"#03A297",fontWeight:"700"}}>Products</span></Typography>
                    <Typography variant="body1" sx={{mb:2}}>Curigen Pharma has extended its line for OTC medicines and has opened a new independent unit to handle OTC products and is rapidly strengthening its product line in this segment. After success in its pain management products, the company is extending into other segments of various Cough Syrups, Nutritional Health Products, Gastro Digestive Products, Protein Supplements, Skin Care Products, Personal Care Products etc. Our key markets are Retail Pharmacies, Health and Cosmetic Shops, Drug Stores and Lifestyle Spas.</Typography>
                </Box>
            </Container>
            </Box>

            <Footer/>
        </Box>
    )
}