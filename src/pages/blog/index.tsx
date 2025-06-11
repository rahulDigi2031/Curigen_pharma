// import Card from "@/common_components/card";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import Image from "next/image";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import BackgroundImage from "@/common_components/backgroundComman";
import Navbar from "@/Components/navbar";
import Footer from "@/Components/footer";

export default function Blog(){
    const imageCard = [
        { image: "/blogImage.png" },
        { image: "/blogImage.png" },
        { image: "/blogImage.png" },
        { image: "/blogImage.png" },
        { image: "/blogImage.png" },
        { image: "/blogImage.png" },
        { image: "/blogImage.png" },
        { image: "/blogImage.png" },
        { image: "/blogImage.png" },
      ];

    return(
        <Box>
            <Box>
            <BackgroundImage imageUrl={"/ContactBg.png"} css={{height:"350px" , width:"100%" , objectFit:"cover" ,  marginBottom:"25px"}}>
                <Navbar/>
                <Box sx={{padding:"20px" , width:"80%" , margin:"0 auto"}}>
                    <Typography variant="h4" sx={{fontWeight:"bold" , color:"#023350"}}>Blog</Typography>
                    <Typography variant="h6" sx={{color:"#023350"}}>Home &gt;&gt; Blog</Typography>
                </Box>
            </BackgroundImage>
            </Box>

            {/* Blog Cards Sections Start here... below side */}
            <Box sx={{ backgroundColor: "#F5F7FA", p: { xs: 2, sm: 3 }, marginBottom: "35px" }}>
                <Box sx={{ width: { xs: "95%", sm: "90%", md: "80%" }, margin: "0 auto" }}>
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: {
                                xs: "1fr",
                                sm: "repeat(2, 1fr)",
                                md: "repeat(3, 1fr)"
                            },
                            gap: { xs: "15px", sm: "20px" },
                            padding: { xs: "10px", sm: "20px" },
                        }}
                    >
                        {imageCard.map((el, idx) => (
                            <Card
                                key={idx}
                                sx={{
                                    padding: { xs: "15px", sm: "20px" },
                                    borderRadius: "20px",
                                    transition: "color 0.3s, background 0.3s",
                                    color: "#023350",
                                    "&:hover": {
                                        color: "#03A297",
                                        "& *": {
                                            color: "#03A297 !important",
                                        },
                                        "& .date-badge": {
                                            backgroundColor: "#03A297",
                                            color: "#fff !important",
                                        },
                                        "& .read-more-btn": {
                                            backgroundColor: "#023350",
                                            color: "#fff !important",
                                        },
                                    },
                                }}
                            >
                                <Box sx={{ position: "relative" }}>
                                    <Image
                                        src={el.image}
                                        alt="blog"
                                        width={250}
                                        height={150}
                                        style={{ width: "100%", height: "auto", borderRadius: 20 }}
                                    />
                                    <Box
                                        className="date-badge"
                                        sx={{
                                            position: "absolute",
                                            bottom: { xs: 8, sm: 16 },
                                            right: { xs: 8, sm: 16 },
                                            backgroundColor: "#04A297",
                                            color: "#fff",
                                            px: { xs: 1, sm: 1.5 },
                                            py: 0.5,
                                            borderRadius: 1,
                                            display: "flex",
                                            alignItems: "center",
                                            fontSize: { xs: 12, sm: 14 },
                                            transition: "background 0.3s, color 0.3s",
                                        }}
                                    >
                                        <CalendarMonthIcon sx={{ fontSize: { xs: 14, sm: 16 }, mr: 0.5 }} />
                                        Aug 18, 2024
                                    </Box>
                                </Box>
                                <CardContent sx={{ px: 0 }}>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            mb: 1,
                                            mt: 1,
                                            flexDirection: { xs: "column", sm: "row" },
                                            gap: { xs: 0.5, sm: 0 }
                                        }}
                                    >
                                        <Typography variant="body2" sx={{ color: "inherit", fontSize: { xs: "0.875rem", sm: "1rem" } }}>
                                            By <strong>Alicia Davis</strong>
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: "inherit", fontSize: { xs: "0.875rem", sm: "1rem" } }}>
                                            1.6k Comments
                                        </Typography>
                                    </Box>
                                    <Typography
                                        variant="subtitle1"
                                        sx={{
                                            fontWeight: "bold",
                                            color: "inherit",
                                            mb: 1,
                                            fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
                                            lineHeight: { xs: 1.3, sm: 1.4 }
                                        }}
                                    >
                                        If You Are Going Use Passage You Need Sure There Middle Text.
                                    </Typography>
                                    <Typography 
                                        variant="body2" 
                                        sx={{ 
                                            color: "gray", 
                                            mb: 2,
                                            fontSize: { xs: "0.875rem", sm: "1rem" },
                                            display: { xs: "none", sm: "block" }
                                        }}
                                    >
                                        There are many variations available the majority have suffered alteration randomised words.
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        className="read-more-btn"
                                        sx={{
                                            backgroundColor: "#04A297",
                                            borderRadius: 2,
                                            textTransform: "none",
                                            px: { xs: 2, sm: 2.5 },
                                            py: 0.5,
                                            color: "#fff",
                                            fontSize: { xs: "0.875rem", sm: "1rem" },
                                            width: { xs: "100%", sm: "auto" },
                                            ":hover": {
                                                backgroundColor: "#023350",
                                            },
                                        }}
                                    >
                                        Read More →
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </Box>
                </Box>
            </Box>

            {/* footer */}
            <Footer/>
        </Box>
    )
}