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
    <Box sx={{ width: { xs: "95%", sm: "90%", md: "80%" }, margin: "auto",
        padding: { xs: "10px", md: "15px" },
        marginBottom:"35px"
      }}
    >
      <Box className="max-w-[100%] mx-auto bg-[#F7F7F7F7] py-6 md:py-10 px-4 sm:mb-5 md:px-10">
        <Box 
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, 1fr)",
              sm: "repeat(3, 1fr)",
              md: "repeat(6, 1fr)"
            },
            gap: { xs: "15px", sm: "20px", md: "25px" },
            marginTop: { xs: "20px", sm: "35px", md: "55px" }
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
                '&:hover': {
                  backgroundColor: '#044678',
                  color: 'white',
                  '& .MuiTypography-root': {
                    color: 'white',
                  },
                  '& .item-count': {
                    color: 'white',
                  }
                },
                transition: 'all 0.3s ease-in-out',
              }}
            >
              <Box
                sx={{
                  border: "2px dotted #B0BEC5",
                  borderRadius: "15px",
                  width: "90%",
                  height: "90%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "8px",
                }}
              >
                <Box 
                  className="bg-[#23A397] rounded-full flex items-center justify-center mb-2"
                  sx={{
                    width: { xs: "60px", sm: "70px", md: "80px" },
                    height: { xs: "60px", sm: "70px", md: "80px" },
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.label}
                    width={150}
                    height={150}
                    className="w-[80%] h-auto"
                  />
                </Box>

                <Typography
                  variant="subtitle1"
                  className="font-bold text-[#0A2540] mb-1 text-center"
                  sx={{
                    fontSize: { xs: "0.875rem", sm: "1rem" },
                    lineHeight: { xs: "1.2", sm: "1.4" }
                  }}
                >
                  {item.label}
                </Typography>

                <Typography
                  variant="body2"
                  className="text-[#23A397] font-medium item-count"
                  sx={{
                    fontSize: { xs: "0.75rem", sm: "0.875rem" }
                  }}
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
