// import BackgroundImage from "@/common_components/backgroundComman";
import { Box, Typography } from "@mui/material";

export default function GallerySection(){
    return (
        <Box sx={{backgroundColor:"#F7F7F7F7" , height:"780px" , Width:"100%" , paddingTop:"20px"}}>
            <Box sx={{width:"80%" , margin:"auto" , padding:"20px" , height:"700px"}}>
                <Typography variant="h5" sx={{fontweight:"bolder"}}>Our Branded and Generic medicines enjoy <span style={{color:"#03A297" , fontWeight:"700" , fontSize:"25px"}}>steady demand in following countries:</span></Typography>
                {/* 6boxes image map */}
                <Box sx={{display:"flex" , justifyContent:"space-between" , paddingTop:"15px"}}>
                    <Box sx={{backgroundColor:"#ffff" , padding:"20px" , height:"300px" , width:"470px" , borderRadius:"20px" , display:"flex",justifyContent:"center"}}>
                        <Box sx={{backgroundImage:"url(/map1.png)" , height:"100%" , width:"100%" ,border:"2px dotted green", borderRadius:"20px", opacity:"0.45",objectFit:"cover"}}>
                        <Typography variant="h5" sx={{padding:"10px 0px 0px 15px"}}>ASIA</Typography>
                            <Box sx={{display:"flex" , alignItems:"center",padding:"10px",color:"black"}}>
                                <Typography variant="body1">Afghanistan, Israel, Jordan, Pakistan, Russia, Saudi Arabia, Singapore, Syria, Philippines, Turkey, Turkmenistan, Uzbekistan, Yemen, Vietnam, Indonesia, Malaysia, Iran, Tajikistan</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{backgroundColor:"#ffff" , padding:"20px" , height:"300px" , width:"470px" , borderRadius:"20px" , display:"flex",justifyContent:"center"}}>
                        <Box sx={{backgroundImage:"url(/map2.png)" , height:"100%" , width:"100%" ,border:"2px dotted green", borderRadius:"20px", opacity:"0.45",objectFit:"cover" }}>
                        <Typography variant="h5" sx={{padding:"10px 0px 0px 15px"}}>AFRICA</Typography>
                            <Box sx={{display:"flex" , alignItems:"center",padding:"10px",color:"black"}}>
                                <Typography variant="body1">South Africa, Uganda, Nigeria, Ghana, Kenya, Mauritius, Botswana, Egypt, Ethiopia, Libya, Sudan, Congo, Gambia, Ivory Coast</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{backgroundColor:"#ffff" , padding:"20px" , height:"300px" , width:"470px" , borderRadius:"20px" , display:"flex",justifyContent:"center"}}>
                        <Box sx={{backgroundImage:"url(/map3.png)" , height:"100%" , width:"100%" ,border:"2px dotted green", borderRadius:"20px", opacity:"0.45",objectFit:"cover" }}>
                        <Typography variant="h5" sx={{padding:"10px 0px 0px 15px"}}>NORTH & LATIN AMERICA</Typography>
                            <Box sx={{display:"flex" , alignItems:"center",padding:"10px",color:"black"}}>
                                <Typography variant="body1">South Africa, Uganda, Nigeria, Ghana, Kenya, Mauritius, Botswana, Egypt, Ethiopia, Libya, Sudan, Congo, Gambia, Ivory Coast</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                
                <Box sx={{display:"flex" , justifyContent:"space-between" , paddingTop:"30px"}}>
                <Box sx={{backgroundColor:"#ffff" , padding:"20px" , height:"300px" , width:"470px" , borderRadius:"20px" , display:"flex",justifyContent:"center"}}>
                        <Box sx={{backgroundImage:"url(/map4.png)" , height:"100%" , width:"100%" ,border:"2px dotted green", borderRadius:"20px", opacity:"0.45",objectFit:"cover" }}>
                        <Typography variant="h5" sx={{padding:"10px 0px 0px 15px"}}>EUROPE</Typography>
                            <Box sx={{display:"flex" , alignItems:"center",padding:"10px",color:"black"}}>
                                <Typography variant="body1">Austria , Azerbaijan, Belarus, Belgium, Cyprus, Czech Republic, Denmark, France, Georgia, Germany, Hungary, Ireland, Iceland, Netherlands, Norway, Poland, Spain, Sweden, Switzerland, Ukraine, United Kingdom (UK) , Latvia</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{backgroundColor:"#ffff" , padding:"20px" , height:"300px" , width:"470px" , borderRadius:"20px" , display:"flex",justifyContent:"center"}}>
                        <Box sx={{backgroundImage:"url(/map5.png)" , height:"100%" , width:"100%" ,border:"2px dotted green", borderRadius:"20px", opacity:"0.45" , objectFit:"cover" }}>
                        <Typography variant="h5" sx={{padding:"10px 0px 0px 15px"}}>OCEANIA</Typography>
                            <Box sx={{display:"flex" , alignItems:"center",padding:"10px",color:"black"}}>
                                <Typography variant="body1">Australia, New Zealand, Fiji</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{backgroundImage:"url(/map6.png)" , padding:"20px" , height:"300px" , width:"470px" , borderRadius:"20px" , display:"flex",justifyContent:"center"}}>
                        <Box sx={{ height:"100%" , width:"100%" , borderRadius:"20px", objectFit:"cover" , border:"2px dotted white" }}>
                            <Box sx={{display:"flex" , alignItems:"center",padding:"10px",color:"black"}}>
                                <Typography variant="body1"sx={{paddingTop:"80px"}}>Our mantra has always been global. Only the best quality, capability, infrastructure and pricing can survive in this market.</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}