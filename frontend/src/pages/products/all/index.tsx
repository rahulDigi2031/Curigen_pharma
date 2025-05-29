import BackgroundImage from "@/common_components/backgroundComman";
import Navbar from "@/Components/navbar";
import { Autocomplete, Box, TextField, Typography, Grid, useTheme, useMediaQuery, Paper, Container } from "@mui/material";
import GridViewIcon from '@mui/icons-material/GridView';
import ViewListOutlinedIcon from '@mui/icons-material/ViewListOutlined';
import Image from "next/image";
import Footer from "@/Components/footer";

export default function ProductAll(){
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));

    const Images = [
        { image: "/tabletProduct.png", title: "Curical-500" },
        { image: "/syrupProduct.png", title: "Surgical Face Mask" },
        { image: "/otherProduct.png", title: "Surgical Face Mask" },
        { image: "/otherProduct2.png", title: "Surgical Face Mask" },
        { image: "/tabletProduct.png", title: "Curical-500" },
        { image: "/syrupProduct.png", title: "Surgical Face Mask" },
        { image: "/otherProduct.png", title: "Surgical Face Mask" },
        { image: "/otherProduct2.png", title: "Surgical Face Mask" },
        { image: "/tabletProduct.png", title: "Curical-500" },
        { image: "/syrupProduct.png", title: "Surgical Face Mask" },
        { image: "/otherProduct.png", title: "Surgical Face Mask" },
        { image: "/otherProduct2.png", title: "Surgical Face Mask" },
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
            <header>
                <BackgroundImage imageUrl="/HeaderBG.png" height="400px" css={{marginBottom:"35px"}}>
                <Navbar/>
                <Box sx={{width:"80%" , margin:"auto" , padding:"15px" ,borderRadius:"10px"}}>
                    <Typography variant="h3" className="text-2xl md:text-4xl text-[#023350] mb-2" sx={{fontWeight:"700"}}>Products</Typography>
                    <Typography variant="h5" className="text-lg md:text-xl text-[#023350]">Home &gt;&gt; All</Typography>
                </Box>
            </BackgroundImage>
            </header>

            {/* Sort/Filter Bar */}
            <main>
                <Box sx={{width:"80%" ,  margin:"auto" , marginBottom:"85px"}}>
            <Box sx={{width:"95%" ,  margin:"auto" , marginBottom:"50px", backgroundColor:"#FFFFFF" , padding:"20px"}}>
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
                        <Box className="h-10 w-10 rounded-full bg-white flex justify-center items-center transition-colors cursor-pointer">
                            <GridViewIcon sx={{ fontSize: 20 }}/>
                        </Box>
                        <Box className="h-10 w-10 rounded-full bg-white flex justify-center items-center hover:bg-[#03A297] transition-colors cursor-pointer">
                            <ViewListOutlinedIcon sx={{ fontSize: 20 }}/>
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* Product Gallery Grid */}
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
                        gap: 4,
                        justifyContent: "center",
                        marginBottom: "60px",
                    }}
                >
                    {Images.map((product, index) => (
                        <Paper
                            key={index}
                            elevation={2}
                            sx={{
                                padding: "20px",
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                borderRadius: 4,
                                ":hover":{
                                  padding:"16px",
                                  border:"2px dashed blue",
                                  transform: "scale (1.1)"
                                  } }} >
                            <Box sx={{
                                width: '80%',
                                height: "390px",
                                position: 'relative',
                                ":hover":{border:"3px dashedrgb(34, 26, 92)",cursor:"pointer" , transform:"scale (1.1)"},
                                mb: 5
                            }}>
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    style={{
                                        objectFit: 'contain',
                                        borderRadius: 8,
                                        background: "#fff"
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
            </main>

            <footer>
                <Footer/>
            </footer>
        </Box>
    );
}