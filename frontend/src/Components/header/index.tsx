import { Box } from "@mui/material";
import { Grid, Typography } from "@mui/material";
import Navbar from "../navbar";
import Image from "next/image";
export default function Header() {
  return (
    <div>
      <Box
        sx={{
          backgroundImage: "url('/background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          objectFit:"cover",
          height: "800px",
          width: "100%",
          margin: "0 auto",
        }}
      >
        <Navbar />
        {/* Hero Section */}
        <Grid
          container
          spacing={2}
          sx={{
            width: "80%",
            margin: "0 auto",
            alignItems: "center",
          }}
        >
          <Grid size={6} item xs={12} md={6} sx={{}}>
            <Typography
              sx={{ fontSize: "40px", fontWeight: "bold", color: "black" }}
            >
              The Pursuit of a Healthier
            </Typography>
            <Typography
              sx={{ fontSize: "40px", fontWeight: "bold", color: "black" }}
            >
              {" "}
              <span style={{ color: "#009688" }}>Bharat</span> Fueled by Science
            </Typography>
            <Typography sx={{ fontSize: "18px", color: "black" ,  }}>
              We are a team of scientists and engineers who are passionate about
              using science to improve the health of the people of Bharat.
            </Typography>
          </Grid>
          <Grid size={6} item xs={12} md={6}>
            <Image src="/bannerside.png" alt="hero" width={678} height={566} style={{position:"relative"}}/>
          </Grid>
        </Grid>
          <Box>
              {/* {this is small delivery image below side} */}
              <Image src="/transport.png" alt="" width={250} height={100} style={{position:"absolute" , left:"70%" , bottom:"34%"}}></Image>
          </Box>
      </Box>
    </div>
  );
}
