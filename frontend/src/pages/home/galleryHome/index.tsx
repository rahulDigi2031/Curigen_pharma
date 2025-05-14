import { Box, Typography, Button, Stack, Grid } from "@mui/material";
import Image from "next/image";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function HomeGallerySection() {
  return (
    <Box>
      <Box sx={{ width: "100%", margin: "auto" }}>
        <Box sx={{width: "80%", margin: "auto", display: "flex", flexDirection: { xs: "column", md: "row" }, gap:2, alignItems: "center", }}>
          {/* Image Section */}
          <Box sx={{ flex: 1 }}>
            <Image src="/01.png" alt="Business Vision" width={1000} height={800} style={{ borderRadius: "12px", objectFit: "cover" }}/>
          </Box>

          {/* Center Text Section */}
          <Box sx={{ flex: 2 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", color: "#002B5B" }}> WE ARE DEDICATED </Typography>
            <Typography variant="h5" sx={{ fontWeight: "bold", color: "#23A397", mb: 2 }}> TO OUR CUSTOMERS AND PRODUCTS </Typography>
            <Typography color="text.secondary" paragraph>
              Our organization has been committed to providing a wide range of
              quality and affordable Healthcare solutions to a large number of
              healthcare institutions and medical facilities. We intend to be
              the ideal partner for
            </Typography>
            <Typography color="text.secondary" paragraph>
              Our organization has been committed to providing a wide range of
              quality and affordable Healthcare solutions to a large number of
              healthcare institutions and medical facilities. We intend to be
              the ideal partner for
            </Typography>
          </Box>

          {/* Right Button Stack */}
          <Stack spacing={2} sx={{ flex: 1 }}>
            {[
              "Mission",
              "Vision",
              "Quality Policy",
              "Management’s Message",
            ].map((label, index) => (
              <Button key={index} variant="outlined" sx={{ borderRadius: 2, textTransform: "none", fontWeight: 500, padding: "10px 16px", }}> {label}</Button>
            ))}
          </Stack>
        </Box>
      </Box>
      {/* Gallery images section  */}
      <Box sx={{ textAlign: "center", py: 6 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#23A397", mb: 4 }} > OUR GALLERY </Typography>
        <Typography variant="h5" sx={{ mb: 4 }}> Let's Check Our Photo Gallery </Typography>

          <Box sx={{ width: "80%", margin: "15px auto" }}>
  <Grid container spacing={2} gap={2}>
    <Grid item xs={6}>
      <Box
        sx={{ position: "relative", width: "750px", height: "300px", borderRadius: "20px", overflow: "hidden", "&:hover .overlay": { opacity: 1,}, }}>
        <Image src="/gallery1.png" alt="" width={750} height={300} style={{ borderRadius: "20px" }} />
        <Box
          className="overlay"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            bgcolor: "rgba(0, 0, 0, 0.70)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
            opacity: 0,
            transition: "opacity 0.3s ease-in-out",
          }}
        >
          <FacebookRoundedIcon sx={{ color: "#fff", fontSize: 30 }} /><InstagramIcon sx={{ color: "#fff", fontSize: 30 }} /> <LinkedInIcon sx={{ color: "#fff", fontSize: 30 }} />
        </Box>
      </Box>

      <Box sx={{ display: "flex", gap: "20px", marginTop: "30px", alignItems: "center" }}>
        {[
          { src: "/gallery4.png", width: 365, height: 320 },
          { src: "/gallery5.png", width: 365, height: 320 },
        ].map((img, index) => (
          <Box key={index} sx={{ position: "relative", width: `${img.width}px`,
              height: `${img.height}px`,
              borderRadius: "20px",
              overflow: "hidden",
              "&:hover .overlay": {
                opacity: 1,
              },
            }}
          >
            <Image src={img.src} alt="" width={img.width} height={img.height} style={{ borderRadius: "20px" }} />
            <Box
              className="overlay"
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                bgcolor: "rgba(0, 0, 0, 0.70)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
                opacity: 0,
                transition: "opacity 0.3s ease-in-out",
              }}
            >
              <FacebookRoundedIcon sx={{ color: "#fff", fontSize: 30 }} /> <InstagramIcon sx={{ color: "#fff", fontSize: 30 }} /> <LinkedInIcon sx={{ color: "#fff", fontSize: 30 }} />
            </Box>
          </Box>
        ))}
      </Box>
    </Grid>

    <Grid item xs={6}>
      <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
        {[
          { src: "/gallery2.png", width: 365, height: 300 },
          { src: "/gallery3.png", width: 365, height: 300 },
        ].map((img, index) => (
          <Box
            key={index}
            sx={{
              position: "relative",
              width: `${img.width}px`,
              height: `${img.height}px`,
              borderRadius: "20px",
              overflow: "hidden",
              "&:hover .overlay": {
                opacity: 1,
              },
            }}
          >
            <Image src={img.src} alt="" width={img.width} height={img.height} style={{ borderRadius: "20px" }} />
            <Box
              className="overlay"
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                bgcolor: "rgba(0, 0, 0, 0.70)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
                opacity: 0,
                transition: "opacity 0.3s ease-in-out",
              }}
            >
              <FacebookRoundedIcon sx={{ color: "#fff", fontSize: 30 }} /> <InstagramIcon sx={{ color: "#fff", fontSize: 30 }} /> <LinkedInIcon sx={{ color: "#fff", fontSize: 30 }} />
            </Box>
          </Box>
        ))}
      </Box>

      <Box sx={{position: "relative", width: "750px", height: "320px", borderRadius: "20px", overflow: "hidden", marginTop: "35px", "&:hover .overlay": {opacity: 1,},}}>
        <Image src="/gallery6.png" alt="" width={750} height={320} style={{ borderRadius: "20px" }} />
        <Box
          className="overlay"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            bgcolor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
            opacity: 0,
            transition: "opacity 0.3s ease-in-out",
          }}
        >
          <FacebookRoundedIcon sx={{ color: "#fff", fontSize:30 }} /> <InstagramIcon sx={{ color: "#fff", fontSize: 30 }} /> <LinkedInIcon sx={{ color: "#fff", fontSize: 30 }} />
        </Box>
      </Box>
    </Grid>
  </Grid>
</Box>
      </Box>
    </Box>
  );
}
