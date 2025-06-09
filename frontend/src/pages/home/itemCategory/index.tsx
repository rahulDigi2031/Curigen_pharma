//  ItemCart Section
// components/ItemCategoryGrid.tsx

import React from "react";
import Image from "next/image";
import { Box, Card, Container, Typography } from "@mui/material";
import { transform } from "next/dist/build/swc/generated-native";

const itemCategory = [
  { image: "/tablet1.png", label: "Tablet", count: 30 },
  { image: "/capsules1.png", label: "Capsule", count: 30 },
  { image: "/injection1.png", label: "Injection", count: 30 },
  { image: "/syrup1.png", label: "Suspension/Syrup", count: 30 },
  { image: "/eye-dropper1.png", label: "Eye/EarDrops", count: 30 },
  { image: "/medicine.png", label: "Other", count: 30 },
];

const ItemCategoryGrid = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          bgcolor: { xs: "#F7F7F7F7", md: "#F7F7F7F7" },
          height: { xs: "735px", md: "400px" },
          marginBottom: { xs: "-65px", md: "0px" },
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ width: "90%", margin: "auto" }}>
            {/* <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "repeat(2, 1fr)",
                  sm: "repeat(3, 1fr)",
                  md: "repeat(6, 1fr)",
                },
                gap: { xs: "15px", sm: "20px", md: "35px" },
                alignContent: "center",
                alignItems: "center",
                margin: "auto",
                paddingTop: { xs: "20px", sm: "35px", md: "60px" },
              }}
            >
              {itemCategory.map((item, index) => (
                // <Card
                //   key={index}
                //   variant="outlined"
                //   className="flex flex-col items-center justify-center p-0 rounded-[20px] shadow-lg mx-auto"
                //   sx={{
                //     borderRadius: "20px",
                //     height: { xs: "220px", sm: "250px", md: "280px" },
                //     width: { xs: "150px", sm: "180px", md: "195px"},
                //     "&:hover": {
                //       backgroundColor: "#044678",
                //       color: "white",
                //       "& .MuiTypography-root": {
                //         color: "white",
                //       },
                //       "& .item-count": {
                //         color: "white",
                //       },
                //       "& .bg":{
                //         backgroundColor: "lightblue",
                //       },
                //     },
                //     transition: "all 0.7s ease-in-out",
                //   }}
                // >
                //   <Box
                //     sx={{
                //       border: "2px dotted #B0BEC5",
                //       borderRadius: "15px",
                //       width: "85%",
                //       height: "90%",
                //       display: "flex",
                //       flexDirection: "column",
                //       alignItems: "center",
                //       justifyContent: "center",
                //       padding: "8px",
                //     }}
                //   >
                //     <Box
                //       className="bg flex items-center justify-center mb-2"
                //       sx={{
                //         width: { xs: "60px", sm: "70px", md: "105px" },
                //         height: { xs: "60px", sm: "70px", md: "105px" },
                //         backgroundColor:"#23A397",borderRadius:"50%", padding:"15px"
                //       }}
                //     >
                //       <Image
                //         src={item.image}
                //         alt={item.label}
                //         width={450}
                //         height={450}
                //         className="image w-[100%] h-auto"
                //       />
                //     </Box>

                //     <Typography
                //       variant="subtitle1"
                //       className="font-bold text-[#0A2540] mb-1 text-center"
                //       sx={{
                //         fontSize: { xs: "0.875rem", sm: "1rem" , md:"17px" },
                //         lineHeight: { xs: "1.2", sm: "1.4", md:"45px" },
                //         fontWeight:{xs:"500" , sm:"400" , md:"700"}
                //       }}
                //     >
                //       {item.label}
                //     </Typography>

                //     <Typography
                //       variant="body2"
                //       className="text-[#23A397] font-medium item-count"
                //       sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" } }}
                //     >
                //       {item.count} Items
                //     </Typography>
                //   </Box>
                // </Card>  
                    <Card
            key={index}
            variant="outlined"
            className="flex flex-col items-center justify-center p-0 rounded-[20px] shadow-lg mx-auto"
            sx={{
              borderRadius: "20px",
              height: { xs: "220px", sm: "250px", md: "280px" },
              width: { xs: "150px", sm: "180px", md: "195px" },
              overflow: "hidden", // Prevent overflow of animation
              position: "relative",
              zIndex: 0,

              "&::before": {
                content: '""',
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "#044678",
                borderRadius: "20px",
                transform: "translateY(100%)",
                transition: "transform 0.5s ease-in-out",
                zIndex: 1,
              },

              "&:hover::before": {
                transform: "translateY(0%)",
              },

              "&:hover": {
                color: "white",

                "& .MuiTypography-root": {
                  color: "white",
                  zIndex: 2,
                  position: "relative",
                },
                "& .item-count": {
                  color: "white",
                  zIndex: 2,
                  position: "relative",
                },
                "& .bg": {
                  backgroundColor: "lightblue",
                  zIndex: 2,
                  position: "relative",
                },
              },
            }}
          ></Card>
              ))}
            </Box> */}

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "repeat(2, 1fr)",
                  sm: "repeat(3, 1fr)",
                  md: "repeat(6, 1fr)",
                },
                gap: { xs: "15px", sm: "20px", md: "35px" },
                alignContent: "center",
                alignItems: "center",
                margin: "auto",
                paddingTop: { xs: "20px", sm: "35px", md: "60px" },
              }}
            >
              {itemCategory.map((item, index) => (
                <Card
                  key={index}
                  variant="outlined"
                  className="flex flex-col items-center justify-center p-0 rounded-[20px] shadow-lg mx-auto"
                  sx={{
                    borderRadius: "20px",
                    height: { xs: "220px", sm: "250px", md: "280px" },
                    width: { xs: "150px", sm: "180px", md: "195px" },
                    overflow: "hidden",
                    position: "relative",
                    zIndex: 0,
                    transition: "all 0.4s ease-in-out",

                    // Circle hover animation starting from bottom center
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      bottom: 0,
                      left: "50%",
                      right: "50%",
                      transform: "translateX(-50%) scaleY(0)",
                      width: "150%",
                      height: "200%",
                      backgroundColor: "#044678",
                      borderRadius: "50% 50% 0 0 / 60% 60% 0 0",
                      transition: "transform 0.6s ease-in-out",
                      zIndex: 1,
                    },

                    "&:hover::before": {
                      transform: "translateX(-50%) scaleY(2)",
                      transition: "transform 0.6s ease-in-out",
                    },

                    // Text and image color on hover
                    "&:hover": {
                      "& .MuiTypography-root, & .item-count": {
                        color: "white",
                        zIndex: 2,
                        position: "relative",
                        transition: "color 0.3s ease-in-out",
                      },
                      "& .bg": {
                        backgroundColor: "lightblue",
                        zIndex: 2,
                        position: "relative",
                        transition: "background-color 0.3s ease-in-out",
                      },
                    },
                  }}
                >
                  <Box
                    sx={{
                      border: "2px dotted #B0BEC5",
                      borderRadius: "15px",
                      width: "85%",
                      height: "90%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "8px",
                      position: "relative",
                      zIndex: 2, // stay above the overlay
                    }}
                  >
                    <Box
                      className="bg flex items-center justify-center mb-2"
                      sx={{
                        width: { xs: "60px", sm: "70px", md: "105px" },
                        height: { xs: "60px", sm: "70px", md: "105px" },
                        backgroundColor: "#23A397",
                        borderRadius: "50%",
                        padding: "15px",
                        transition: "background-color 0.3s ease-in-out",
                      }}
                    >
                      <Image
                        src={item.image}
                        alt={item.label}
                        width={450}
                        height={450}
                        className="image w-[100%] h-auto"
                      />
                    </Box>

                    <Typography
                      variant="subtitle1"
                      className="font-bold text-[#0A2540] mb-1 text-center"
                      sx={{
                        fontSize: { xs: "0.875rem", sm: "1rem", md: "17px" },
                        lineHeight: { xs: "1.2", sm: "1.4", md: "45px" },
                        fontWeight: { xs: "500", sm: "400", md: "700" },
                        transition: "color 0.3s ease-in-out",
                      }}
                    >
                      {item.label}
                    </Typography>

                    <Typography
                      variant="body2"
                      className="text-[#32A497] font-medium item-count"
                      sx={{
                        fontSize: { xs: "0.75rem", sm: "0.875rem" },
                        fontWeight:"600",
                        transition: "color 0.3s ease-in-out",
                      }}
                    >
                      {item.count} Items
                    </Typography>
                  </Box>
                </Card>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default ItemCategoryGrid;
