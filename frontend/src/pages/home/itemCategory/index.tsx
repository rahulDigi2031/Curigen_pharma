// components/ItemCategoryGrid.tsx

import React from "react";
import Image from "next/image";
import { Box, Card, Typography } from "@mui/material";

const itemCategory = [
  { image: "/tablet.png", label: "Tablet", count: 30 },
  { image: "/capsule.png", label: "Capsule", count: 30 },
  { image: "/injection.png", label: "Injection", count: 30 },
  { image: "/syrup.png", label: "Suspension / Syrup", count: 30 },
  { image: "/eye-ear.png", label: "Eye / EarDrops", count: 30 },
  { image: "/other.png", label: "Other", count: 30 },
];

const ItemCategoryGrid = () => {
  return (
    <Box
      sx={{
        width: "80%",
        margin: "auto",
        padding: "15px",    
        marginBottom: "3%",
      }}
    >
      <Box className="max-w-[100%] mx-auto h-[370px] bg-[#F7F7F7F7] py-10 px-4 sm:mb-5 md:px-10">
        <Box sx={{display:"grid" , gridTemplateColumns:"repeat(6 , 1fr)" , gap:"25px" , marginTop:"55px"}}>
          {itemCategory.map((item, index) => (
            <Card
              key={index}
              variant="outlined"
              className="flex flex-col items-center justify-center h-[280px] p-0 rounded-[20px] shadow-lg mx-auto"
              sx={{
                borderRadius: "20px",
                // Removed hover styles to match the static image
                '&:hover': {
                  backgroundColor: '#044678',
                  color: 'white',
                },
                transition: 'background-color 0.3s ease-in-out',
              }}
            >
              <Box
                sx={{
                  border: "2px dotted #B0BEC5",
                  borderRadius: "15px",
                }}
                className="w-[90%] h-[90%] flex flex-col items-center justify-center p-2 text-center"
              >
                <Box className="bg-[#23A397] rounded-full w-20 h-20 flex items-center justify-center mb-2">
                  <Image
                    src={item.image}
                    alt={item.label}
                    width={150}
                    height={150}
                  />
                </Box>

                <Typography
                  sx={{ ":hover": { color: "white" } }}
                  variant="subtitle1"
                  className="font-bold text-[#0A2540] mb-1"
                >
                  {item.label}
                </Typography>

                <Typography
                  variant="body2"
                  className="text-[#23A397] font-medium"
                >
                  {item.count} Items
                </Typography>
              </Box>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ItemCategoryGrid;
