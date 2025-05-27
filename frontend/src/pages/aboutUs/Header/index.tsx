import BackgroundImage from "@/common_components/backgroundComman";
import PublicIcon from "@mui/icons-material/Public";
import GroupsIcon from "@mui/icons-material/Groups";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import MedicationIcon from "@mui/icons-material/Medication";
import Navbar from "@/Components/navbar";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Experience from "../experince";

const counters = [
    {
      icon: <PublicIcon sx={{ fontSize: 40, color: "white" }} />,
      count: "86+",
      label: "Countries",
    },
    {
      icon: <GroupsIcon sx={{ fontSize: 40, color: "white" }} />,
      count: "250+",
      label: "International Clients",
    },
    {
      icon: <VaccinesIcon sx={{ fontSize: 40, color: "white" }} />,
      count: "600+",
      label: "Sterile Products",
    },
    {
      icon: <MedicationIcon sx={{ fontSize: 40, color: "white" }} />,
      count: "900+",
      label: "Non - Sterile Products",
    },
  ];

export default function HeaderAboutUs(){
    return(
        <Box sx={{backgroundColor:"#fff"}}>

            <BackgroundImage imageUrl={"/ContactBg.png"} css={{height:"350px" , width:"100%" , objectFit:"cover"}}>
                <Navbar/>
                <Box sx={{padding:{xs:"10px" , sm:"20px"} , width:{xs:"95%" , md:"80%"} , margin:"0 auto"}}>
                    <Typography variant="h4" sx={{fontWeight:"bold" , color:"#023350" , fontSize:{xs:"1.5rem" , sm:"2rem"}}}>About Us</Typography>
                    <Typography variant="h6" sx={{color:"#023350" , fontSize:{xs:"1rem" , sm:"1.25rem"}}}>Home &gt;&gt; About Us</Typography>
                </Box>
            </BackgroundImage>

            {/* body section */}
            <Experience/>

            <Box sx={{
                width: {xs: "100%", md: "100%"},
                mx: "auto",
                py: {xs: 4, md: 8},
                mt: 5,
                backgroundColor: "#22A396",
                borderRadius: 2,
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                    transform: "translateY(-5px)"
                }
            }}>
                <Grid container spacing={3} justifyContent="center" alignItems="center">
                    {counters.map((item, idx) => (
                    <Grid item xs={6} sm={6} md={3} key={idx}>
                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            color: "white",
                            px: 2,
                            transition: "all 0.3s ease",
                            "&:hover": {
                                transform: "scale(1.05)"
                            }
                        }}>
                            <Box sx={{
                                backgroundColor: "#04354b",
                                border: "2px solid white",
                                borderRadius: "50%",
                                height: 85,
                                width: 85,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                mb: 2,
                                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
                                transition: "all 0.3s ease",
                                "&:hover": {
                                    backgroundColor: "#022B3B",
                                    transform: "rotate(360deg)"
                                }
                            }}>
                                {item.icon}
                            </Box>
                            <Typography 
                                variant="h4" 
                                fontWeight="bold"
                                sx={{
                                    background: "linear-gradient(45deg, #fff 30%, #e3f2fd 90%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    mb: 1
                                }}
                            >
                                {item.count}
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                fontWeight="bold"
                                align="center"
                                sx={{
                                    opacity: 0.9,
                                    letterSpacing: "0.5px"
                                }}
                            >
                                {item.label}
                            </Typography>
                        </Box>
                    </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    )
}