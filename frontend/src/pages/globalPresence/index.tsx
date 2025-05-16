import { Box } from "@mui/material";
import GlobalExperince from "./globalExperince";
import HeaderSection from "./header";
import GlobalCountry from "./globalCountry";

export default function GlobalPresence(){
    return(
        <Box>
            {/* // Header section  */}
            <HeaderSection/>

            {/* // Body section */}
            <GlobalExperince/>

            {/*COUNTRY SECTION */}
            <GlobalCountry/>
            
        </Box>
    )
}