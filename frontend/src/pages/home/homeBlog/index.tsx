import { Box, Typography, Card, CardContent, Button, Grid } from "@mui/material";
import Image from "next/image";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export default function HomeBlog() {
  const imageCard = [
    { image: "/blogImage.png" },
    { image: "/blogImage.png" },
    { image: "/blogImage.png" }
  ];

  return (
    <Box
      sx={{
        backgroundImage: "url(/blogBg.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
        height:"750px",
        position:"relative"
      }}
    >
      <Box sx={{backgroundColor:"lightblue" , opacity:"0.65" , height:"100%" , width:"100%" , position:"absolute" , zIndex:1}}/>
      <Box sx={{position:"relative" , zIndex:2 , width:"80%" , margin:"auto", paddingTop:"15px"}}>
        <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography variant="h6" sx={{ color: "#04A297", fontWeight: "bold" }}>
          OUR BLOG
        </Typography>
        <Typography variant="h4" sx={{ color: "#023350", fontWeight: "bold" }}>
          Our Latest News & <span style={{ color: "#04A297" }}>Blog</span>
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        {imageCard.map((el, index) => (
          <Grid item key={index} gap={5}>
            <Card sx={{ width: 450, borderRadius: 3, boxShadow: 3 }}>
              <Box sx={{ position: "relative" , padding:"30px"}}>
                <Image
                  src={el.image}
                  alt="blog"
                  width={390}
                  height={180}
                  style={{borderRadius:"20px"}}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 50,
                    left:290,
                    backgroundColor: "#04A297",
                    color: "#fff",
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 1,
                    display: "flex",
                    alignItems: "center",
                    fontSize: 14,
                    padding:"10px 15px"
                  }}
                >
                  <CalendarMonthIcon sx={{ fontSize: 16,  }} />
                  Aug 18, 2024
                </Box>
              </Box>

              <CardContent>
                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                  <Typography variant="body2" sx={{ color: "#023350" }}>
                    By <strong>Alicia Davis</strong>
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#023350" }}>
                    1.6k Comments
                  </Typography>
                </Box>
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: "bold", color: "#023350", mb: 1 }}
                >
                  If You Are Going Use Passage You Need Sure There Middle Text.
                </Typography>
                <Typography variant="body2" sx={{ color: "gray", mb: 2 }}>
                  There are many variations available the majority have suffered alteration
                  randomised words.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#04A297",
                    borderRadius: 2,
                    textTransform: "none",
                    px: 2.5,
                    py: 0.5,
                    ":hover":{
                        backgroundColor: "#04A297",
                    }
                  }}
                >
                  Read More →
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      </Box>
    </Box>
  );
}
