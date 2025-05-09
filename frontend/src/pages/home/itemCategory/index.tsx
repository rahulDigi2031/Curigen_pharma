import Card from "@/common_components/card/index";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function ItemCategoryDisplay(){
    const itemCategory = [
        { image: "/tablet.png", label: "Tablet", count: 30 },
        { image: "/capsule.png", label: "Capsule", count: 30 },
        { image: "/injection.png", label: "Injection", count: 30 },
        { image: "/syrup.png", label: "Suspension / syrup", count: 30 },
        { image: "/eye-ear.png", label: "Eye / EarDrops", count: 30 },
        { image: "/other.png", label: "Other", count: 30 },
      ];

    return (
        <Box sx={{ backgroundColor: "#F7F7F7F7", padding: 4 }}>
        <Box
          sx={{
            display: "grid",
            gap: 3,
            gridTemplateColumns: "repeat(6 , 1fr)",
            width: "80%",
            margin: "auto",
          }}
        >
            {itemCategory.map((item, index) => (
                <Card
                content
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
                  boxShadow: "0px 2px 6px rgba(0,0,0,0.05)",
                  transition: "background-color 0.3s, transform 0.3s",
                  "&:hover": {
                    backgroundColor: "#27548A",
                    cursor: "pointer",
                    transform: "translateY(-4px)",
                  },
                }}
              >
                {/* Inner container with dotted border */}
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
                    <Image src={item.image} alt={item.label} width={40} height={40} />
                  </Box>
              
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold", color: "#0A2540" }}>
                    {item.label}
                  </Typography>
              
                  <Typography variant="body2" sx={{ color: "#23A397", fontWeight: 500 }}>
                    {item.count} Items
                  </Typography>
                </Box>
              </Card>
              
              
            ))}

          
        </Box>
      </Box>
    )
}