
import Navbar from "@/Components/navbar";
import { Box } from "@mui/material";
import {Typography } from "@mui/material";
export default function HeaderSection() {
  return (
    <div>
      <Box
        sx={{
          backgroundImage: "url('/HeaderBG.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          objectFit:"cover",
          height: "330px",
          width: "100%",
          margin: "0 auto",
        }}
      >
        <Navbar />
        {/* Hero Section */}
        <Box sx={{width:"80%" , margin:"auto" , padding:"15px" , marginTop:"3%"}}>
            <Typography variant="h3" sx={{fontWeight:"600" , color:"#023350" , marginBottom:"5px"}}>Global Presence</Typography>
            <Typography variant="h5" sx={{color:"#023350"}}>Home >> Global Prensence</Typography>
        </Box>
      </Box>
    </div>
  );
}
