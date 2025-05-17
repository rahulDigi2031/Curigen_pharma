// import BackgroundImage from "@/common_components/backgroundComman";
import { Box, Typography } from "@mui/material";
import BackgroundImage from "@/common_components/backgroundComman";
import Navbar from "@/Components/navbar";
import ProductGallery from "./productGallery";
import Footer from "@/Components/footer";


export default function Gallery(){
    return (
        <Box>
            <BackgroundImage imageUrl="/HeaderBG.png" css={{backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            objectFit:"cover",
            height: "340px",
            width: "100%",
            margin: "0 auto",}}>
                <Navbar/>
            <Box sx={{width:"80%" , margin:"auto" , padding:"15px" , marginTop:"2%" , fontFamily:"inter"}}>
                <Typography variant="h3" sx={{fontWeight:"600" , color:"#023350" , marginBottom:"5px"}}>Gallery</Typography>
                <Typography variant="h5" sx={{color:"#023350"}}>Home >> Gallery</Typography>
            </Box>
        </BackgroundImage>
        {/* PRODUCT GALLERY SECTION  */}
        <ProductGallery/>
        {/* footer section*/}
        <Footer />
        </Box>
    )
}