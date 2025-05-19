import BackgroundImage from "@/common_components/backgroundComman";
import Navbar from "@/Components/navbar";
import { Autocomplete, Box, TextField, Typography, Grid, useTheme, useMediaQuery } from "@mui/material";
import GridViewIcon from '@mui/icons-material/GridView';
import ViewListOutlinedIcon from '@mui/icons-material/ViewListOutlined';
import Image from "next/image";
import Footer from "@/Components/footer";

export default function Capsule(){
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));

    const Images = [
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

    const ProductCategory = [
        { title : "All"},
        { title :"Tablet"},
        { title :"Capsule"},
        { title :"Syrup / suspension"},
        { title :"Injection"},
        { title :"Ear/Eye drops"},
        {title:"other"}
    ];

    return(
        <Box className="min-h-screen">
            {/* Header Section with Background Image */}
            <BackgroundImage
                imageUrl="/HeaderBG.png"
                height="400px"
            >
                <Navbar/>
                <Box className="w-[90%] md:w-[80%] mx-auto p-4 md:p-6 font-inter">
                    <Typography variant="h3" className="text-2xl md:text-4xl font-semibold text-[#023350] mb-2">products</Typography>
                    <Typography variant="h5" className="text-lg md:text-xl text-[#023350]">Home &gt;&gt; All</Typography>
                </Box>
            </BackgroundImage>

            {/* Sort/Filter Bar */}
            <Box className="w-[90%] md:w-[80%] h-auto md:h-[65px] bg-white mx-auto my-6 md:my-8 p-4 flex flex-col md:flex-row items-center justify-between">
                <Box className="w-full md:w-auto flex flex-col md:flex-row items-center justify-between gap-4">
                    <Box className="flex items-center gap-2">
                        <Typography variant="body1">Sort -By:</Typography>
                        <Autocomplete
                            disablePortal
                            options={ProductCategory}
                            getOptionLabel={(option) => option.title}
                            className="w-[150px]"
                            renderInput={(params) => <TextField {...params} label="All" size="small" />}
                        />
                    </Box>
                    <Box className="flex gap-2">
                        <Box className="h-10 w-10 rounded-full bg-white flex justify-center items-center hover:bg-[#03A297] transition-colors cursor-pointer">
                            <GridViewIcon sx={{ fontSize: 20 }}/>
                        </Box>
                        <Box className="h-10 w-10 rounded-full bg-white flex justify-center items-center hover:bg-[#03A297] transition-colors cursor-pointer">
                            <ViewListOutlinedIcon sx={{ fontSize: 20 }}/>
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* Product Gallery Grid */}
            <Box className="py-8 px-4 bg-[#F5F7FA]">
                <Box className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 w-[90%] md:w-[80%] mx-auto">
                    {Images.map((product, index) => (
                        <Box
                            key={index}
                            className="bg-white rounded-2xl p-4 flex flex-col items-center shadow-md hover:shadow-lg transition-all duration-300"
                        >
                            <Box className="w-full h-[200px] md:h-[300px] relative mb-4 group">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-lg transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 border-4 border-dashed border-[#023350] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </Box>
                            <Typography variant="body1" className="font-semibold text-[#023350] text-center">
                                {product.title}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>

            <Footer/>
        </Box>
    );
}