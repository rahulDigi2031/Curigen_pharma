import { Box, Typography } from "@mui/material";
import react from "react";
import Image from "next/image";
export default function PromiseSection() {
  return (
    <Box>
      <Box
        sx={{
          width: "80%",
          backgroundColor: "#023350",
          height: "165px",
          padding: "40px",
          margin: "50px auto",
          borderRadius: "20px",
        }}
      >
        <Box sx={{display:"flex" , gap:"20px" , justifyContent:"space-between"}}>
          <Box sx={{ color: "#FFFFFF", maxWidth: "280px" }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, marginBottom: "8px" }}
            >
              Our Promise
            </Typography>
            <Typography sx={{ fontSize: "16px", lineHeight: 1.5 }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Typography>
          </Box>
            {/* Divider */}
          <Box sx={{width: "1px", height: "80px", backgroundColor: "#1E5C7B", mx: 4, }}/>

            {/* image 1st div */}
                <Box sx={{color:"#ffff"}}>
                    <Box sx={{display:"flex" , gap:2 , alignItems:"center"}}>
                        <Box sx={{backgroundColor:"#23A397" , borderRadius:"50%", padding:"15px"}}><Image src="/quality.png" alt="Quality" width={40} height={40}></Image></Box>
                        <Typography variant="h6">Quality</Typography>
                    </Box>
                </Box>

                <Box sx={{width: "1px", height: "80px", backgroundColor: "#1E5C7B", mx: 4, }}/>

            {/* image 2nd div */}
                <Box sx={{color:"#ffff"}}>
                    <Box sx={{display:"flex" , gap:2 , alignItems:"center"}}>
                        <Box sx={{backgroundColor:"#23A397" , borderRadius:"50%", padding:"15px"}}><Image src="/affordability.png" alt="Affordability" width={40} height={40}></Image></Box>
                        <Typography variant="h6">Affordability</Typography>
                    </Box>
                </Box>

                <Box sx={{width: "1px", height: "80px", backgroundColor: "#1E5C7B", mx: 4, }}/>

            {/* image 3rd div */}
                <Box sx={{color:"#ffff"}}>
                    <Box sx={{display:"flex" , gap:2 , alignItems:"center"}}>
                        <Box sx={{backgroundColor:"#23A397" , borderRadius:"50%", padding:"15px", border:"2px #23A397"}}><Image src="/accessibility.png" alt="Accessibility" width={40} height={40}></Image></Box>
                        <Typography variant="h6">Accessibility</Typography>
                    </Box>
                </Box>
        </Box>
      </Box>
    </Box>
  );
}
