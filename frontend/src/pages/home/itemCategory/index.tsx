//  ItemCart Section
// components/ItemCategoryGrid.tsx

import React from "react";
import Image from "next/image";
import { Box, Card, Container, Typography } from "@mui/material";

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
      <Box sx={{
        width: "100%",
        bgcolor: { xs: "#F7F7F7F7", md: "#F7F7F7F7" },
        height: { xs: "735px", md: "400px" },
        marginBottom: { xs: "-65px", md: "0px" }
      }}>
        <Container maxWidth="xl">
          <Box sx={{width:"90%" ,  margin:"auto"}}>
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
                    width: { xs: "150px", sm: "180px", md: "195px"},
                    "&:hover": {
                      backgroundColor: "#044678",
                      color: "white",
                      "& .MuiTypography-root": {
                        color: "white",
                      },
                      "& .item-count": {
                        color: "white",
                      },
                      "& .bg":{
                        backgroundColor: "lightblue",
                      },
                    },
                    transition: "all 0.7s ease-in-out",
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
                    }}
                  >
                    <Box
                      className="bg flex items-center justify-center mb-2"
                      sx={{
                        width: { xs: "60px", sm: "70px", md: "105px" },
                        height: { xs: "60px", sm: "70px", md: "105px" },
                        backgroundColor:"#23A397",borderRadius:"50%", padding:"15px"
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
                        fontSize: { xs: "0.875rem", sm: "1rem" , md:"17px" },
                        lineHeight: { xs: "1.2", sm: "1.4", md:"45px" },
                        fontWeight:{xs:"500" , sm:"400" , md:"700"}
                      }}
                    >
                      {item.label}
                    </Typography>

                    <Typography
                      variant="body2"
                      className="text-[#23A397] font-medium item-count"
                      sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" } }}
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
