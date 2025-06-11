import { Box } from "@mui/material";
import GlobalExperince from "./globalExperince";
import HeaderSection from "./header";
// import GlobalCountry from "./globalCountry";
import GallerySection from "./globalCountry";
import GridImageSection from "./globalCountry/Gridimage";
import Footer from "@/Components/footer";

export default function GlobalPresence(){
    return(
        <Box>
            <header>
                {/* // Header section  */}
                <HeaderSection/>
            </header>
            
            <main>
                {/* // Body section */}
                <GlobalExperince/>

                {/*COUNTRY SECTION */}
                <GallerySection/>
    
                <GridImageSection/>
            </main>
    
            <footer>
                <Footer/>
            </footer>
            
        </Box>
    )
}