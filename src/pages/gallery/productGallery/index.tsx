import { Box, Typography, Container, Paper } from "@mui/material";
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

export default function ProductGallery() {
    return (
        <Box sx={{ py: 8, px: 2, bgcolor: '#F5F7FA' }}>
            <Container maxWidth="xl">
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            sm: "repeat(2, 1fr)",
                            md: "repeat(3, 1fr)",
                            lg: "repeat(4, 1fr)",
                        },
                        gap: 2,
                    }}
                >
                    {productsData.map((product, index) => (
                        <Paper
                            key={index}
                            elevation={2}
                            sx={{
                                padding: "20px",
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                borderRadius: 4
                            }}
                        >
                            <Box sx={{
                                width: '100%',
                                height: "390px",
                                position: 'relative',
                                mb: 5
                            }}>
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    style={{
                                        objectFit: 'cover',
                                        borderRadius: 8,
                                    }}
                                />
                            </Box>
                            <Typography
                                variant="body1"
                                sx={{
                                    fontWeight: 600,
                                    color: '#023350'
                                }}
                            >
                                {product.title}
                            </Typography>
                        </Paper>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}