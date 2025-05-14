import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function PublishContent() {
  const features = [
    "Government Recognised Export House",
    "Research based products",
    "Short Delivery Lead Time",
    "Modern Infrastructure",
    "Competitive Pricing",
    "Efficient Communication",
  ];

  const stats = [
    { value: "86+", label: "Countries" },
    { value: "250+", label: "International Clients" },
    { value: "600+", label: "Sterile Products" },
    { value: "900+", label: "Non - Sterile Products" },
  ];

  return (
    <Box>
      <Box
        sx={{
          height: "838px",
          width: "100%",
          backgroundImage: "url(/backgroundDoctor.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <Box
          sx={{
            width: "80%",
            margin: "auto",
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "150px",
            position: "relative",
          }}
        >
          {/* Left Content */}
          <Box sx={{ color: "white", flex: 1 }}>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", paddingBottom: "25px" }}
            >
              Why US?
            </Typography>
            <Typography
              variant="h6"
              sx={{
                maxWidth: "1200px",
                // fontFamily: "inter",
                paddingBottom: "30px",
              }}
            >
              Curigen Pharmaceutical has established itself as a renowned name
              in the pharmaceutical industry, recognized for its unwavering
              dedication to delivering high-quality and effective pharmaceutical
              products. With years of experience
            </Typography>

            <Grid container spacing={2} maxWidth="500px">
              {features.map((feature, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <CheckCircleIcon
                      sx={{
                        color: "white",
                        backgroundColor: "#076776",
                        borderRadius: "50%",
                        fontSize: 20,
                      }}
                    />
                    <Typography variant="body2" color="white">
                      {feature}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Doctor Image */}
          <Box sx={{ position: "relative", flex: 1 }}>
            <Image
              src="/Doctor.png"
              alt="Doctor"
              width={480}
              height={760}
              style={{
                position: "absolute",
                right: "20%",
                left: "10%",
                top: "-24%",
                // transform: "translateX(-50%)",
                zIndex: 1,
              }}
            />

            {/* Stats Box Overlaid */}
            <Box
              sx={{
                backgroundColor: "white",
                borderRadius: "20px",
                p: 3,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                height: "120px",
                boxShadow: 2,
                width: "1080px", // Increased width
                position: "absolute",
                bottom: "-220px",
                right: "60%",
                // transform: "translateX(-95%)",
                zIndex: 2,
              }}
            >
              {stats.map((item, index) => (
                <Box
                  key={index}
                  sx={{ textAlign: "center", minWidth: "140px" }}
                >
                  <Typography variant="h4" fontWeight="bold" color="#002B5B">
                    {item.value}
                  </Typography>
                  <Typography variant="body2" color="">
                    {item.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
