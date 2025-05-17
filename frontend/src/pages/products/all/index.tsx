import BackgroundImage from "@/common_components/backgroundComman";
import Navbar from "@/Components/navbar";
import { Autocomplete, Box, TextField, Typography, Grid } from "@mui/material";
import GridViewIcon from '@mui/icons-material/GridView';
import ViewListOutlinedIcon from '@mui/icons-material/ViewListOutlined';
import Image from "next/image"; // Ensure this import is correct
import Footer from "@/Components/footer";

export default function ProductAll(){
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
        <Box>
            {/* Header Section with Background Image */}
            <Box sx={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                objectFit: "cover", // Note: object-fit is for img/video tags, less applicable directly to Box background.
                height: "340px",
                width: "100%",
                margin: "0 auto",
                backgroundImage: "url(/HeaderBG.png)",
                position: "relative", // Needed for Image layout="fill" if used inside
            }}>
                {/* If BackgroundImage component itself renders the background, adjust this Box */}
                {/* <BackgroundImage imageUrl="/HeaderBG.png" /> */}
                <Navbar/>
                <Box sx={{width:"80%" , margin:"auto" , padding:"15px" , marginTop:"2%" , fontFamily:"inter"}}>
                    <Typography variant="h3" sx={{fontWeight:"600" , color:"#023350" , marginBottom:"5px"}}>Gallery</Typography>
                    <Typography variant="h5" sx={{color:"#023350"}}>Home &gt;&gt; Gallery</Typography>
                </Box>
            </Box>

            {/* Sort/Filter Bar */}
            <Box sx={{width:"80%" , height:"65px" , background:"lightgray" ,  margin:"3% auto", display: "flex", alignItems: "center", padding: "0 20px"}}>
                <Box sx={{display:"flex" , justifyContent:"space-between" , width: "100%", alignItems:"center"}}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <Typography variant="body1">Sort -By:</Typography>
                        <Autocomplete
                            disablePortal
                            options={ProductCategory}
                            getOptionLabel={(option) => option.title}
                            sx={{ width:"150px"}}
                            renderInput={(params) => <TextField {...params} label="All" size="small" />} // Added size="small"
                        />
                    </Box>
                    <Box sx={{gap:"10px" , cursor:"pointer" , display:"flex", alignItems:"center"}}> {/* Removed marginBottom from here */}
                        <Box sx={{height:"40px" , width:"40px", borderRadius:"50%" , backgroundColor:"#ffff" , display:"flex" , justifyContent:"center", alignItems:"center" , ":hover":{backgroundColor:"#03A297"}}}> {/* Adjusted size and padding */}
                            <GridViewIcon sx={{ fontSize: 20 }}/> {/* Adjusted icon size */}
                        </Box>
                        <Box sx={{height:"40px" , width:"40px", borderRadius:"50%" , backgroundColor:"#ffff" , display:"flex" , justifyContent:"center" , alignItems:"center" , ":hover":{backgroundColor:"#03A297"}}}> {/* Adjusted size and padding */}
                            <ViewListOutlinedIcon sx={{ fontSize: 20 }}/> {/* Adjusted icon size */}
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* Product Gallery Grid */}
            <Box sx={{ py: 4, px: 2, backgroundColor: "#ffff" }}> {/* Adjusted vertical padding */}
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4 , 1fr)", // Flexible grid columns
                        gap: 4,
                        width: "80%", // Consistent width
                        margin: "auto", // Center the grid
                    }}
                >
                    {Images.map((product, index) => (
                        <Box
                            key={index}
                            sx={{
                                backgroundColor: "#fff",
                                borderRadius: "16px",
                                padding: "20px",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
                            }}
                        >
                            <Box sx={{ width: "100%", height: "250px", position: "relative", mb: 2 }}>
                                {/* Image component */}
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    layout="fill" // Fill the parent container
                                    objectFit="cover" // Cover the area without distorting aspect ratio
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

            <Footer/>
        </Box>
    );
}