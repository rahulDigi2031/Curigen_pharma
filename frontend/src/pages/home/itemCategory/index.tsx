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
    <>
      {/* Test image outside loop to confirm static image loads */}
      <Box sx={{ width: "100%", height: "330px", backgroundColor: "#F7F7F7F7", padding:"40px"}}>
        <Box
          sx={{
            display: "grid",
            gap: 3,
            gridTemplateColumns: "repeat(6, 1fr)",
            width: "80%",
            margin: "auto",
          }}
        >
          {itemCategory.map((item, index) => (
            <Card
              key={index}
              variant="outlined"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: 250,
                width: 160,
                padding: 0,
                borderRadius: "20px",
                boxShadow: "0px 2px 18px rgba(165, 158, 158, 0.85)",
                transition: "background-color 0.3s, transform 0.3s",
                "&:hover": {
                  backgroundColor: "#27548A",
                  cursor: "pointer",
                  transform: "translateY(-4px)",
                },
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
                  padding: 2,
                  textAlign: "center",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#23A397",
                    borderRadius: "50%",
                    width: 80,
                    height: 80,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 2,
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.label}
                    width={150}
                    height={150}
                  />
                </Box>

                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: "bold", color: "#0A2540", mb: 0.5 }}
                >
                  {item.label}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{ color: "#23A397", fontWeight: 500 }}
                >
                  {item.count} Items
                </Typography>
              </Box>
            </Card>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default ItemCategoryGrid;
