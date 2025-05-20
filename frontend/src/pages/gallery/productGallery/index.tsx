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
        <Box className="py-8 px-2 bg-white">
            <Box
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-screen-xl mx-auto"
            >
                {productsData.map((product, index) => (
                    <Box
                        key={index}
                        className="bg-white rounded-2xl p-5 flex flex-col items-center shadow-md"
                    >
                        <Box className="w-full h-48 relative mb-4">
                             {/* Placeholder for image, adjust width/height/layout as needed */}
                             <Image 
                                src={product.image}
                                alt={product.title}
                                fill
                                className="rounded-lg object-cover"
                            />
                        </Box>
                        <Typography variant="body1" className="font-semibold text-[#023350]">
                            {product.title}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}