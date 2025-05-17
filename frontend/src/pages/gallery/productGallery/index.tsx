import { Box, Typography } from "@mui/material";
import Image from "next/image";

const productsData = [
    { image: "/productGallery1.png", title: "Surgical Face Mask" },
    { image: "/productGallery1.png", title: "Surgical Face Mask" },
    { image: "/productGallery2.png", title: "Surgical Face Mask" },
    { image: "/productGallery3.png", title: "Surgical Face Mask" },
    { image: "/productGallery1.png", title: "Surgical Face Mask" },
    { image: "/productGallery1.png", title: "Surgical Face Mask" },
    { image: "/productGallery2.png", title: "Surgical Face Mask" },
    { image: "/productGallery3.png", title: "Surgical Face Mask" },
    { image: "/productGallery1.png", title: "Surgical Face Mask" },
    { image: "/productGallery1.png", title: "Surgical Face Mask" },
    { image: "/productGallery2.png", title: "Surgical Face Mask" },
    { image: "/productGallery3.png", title: "Surgical Face Mask" },
    { image: "/productGallery1.png", title: "Surgical Face Mask" },
    { image: "/productGallery1.png", title: "Surgical Face Mask" },
    { image: "/productGallery2.png", title: "Surgical Face Mask" },
    { image: "/productGallery3.png", title: "Surgical Face Mask" }
];

export default function ProductGallery(){
    return (
        <Box sx={{ py: 8, px: 2, backgroundColor: "#ffff" ,}}>
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4 , 1fr)",
                    gap: 4,
                    maxWidth: "80%",
                    margin: "auto",
                }}
            >
                {productsData.map((product, index) => (
                    <Box
                        key={index}
                        sx={{
                            backgroundColor: "#fff",
                            borderRadius: "16px",
                            padding: "20px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                        }}
                    >
                        <Box sx={{ width: "100%", height: "250px", position: "relative", mb: 2 }}>
                             {/* Placeholder for image, adjust width/height/layout as needed */}
                             <Image 
                                src={product.image}
                                alt={product.title}
                                layout="fill"
                                objectFit="cover"
                                style={{ borderRadius: "8px" }}
                            />
                        </Box>
                        <Typography variant="body1" sx={{ fontWeight: 600, color: "#023350" }}>
                            {product.title}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}