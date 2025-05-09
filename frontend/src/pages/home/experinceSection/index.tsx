import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function ExperinceSection(){
    return(
        <Box
        sx={{
          width: "80%",
          height: "700px",
          display: "grid",
          gridTemplateColumns: "repeat(2 , 1fr)",
          gap:1,
          margin: "auto",
          alignItems: "center",
        }}
      >
        <Box sx={{ml:5}}>
          <Image src="/group174.png" alt="" width={650} height={400}></Image>
        </Box>
        <Box>
            <Box sx={{mb:2}}>
                <Typography variant="h5" sx={{color:"#23A397" , fontWeight:"bolder"}}>WEL-COME TO</Typography>
            </Box>
            <Box>
                <Typography variant="h5" sx={{fontWeight:"bolder"}}><span style={{color:"#23A397" , fontWeight:"bolder"}}>Curigen</span> Pharmaceuticals</Typography>
                <Typography variant="h5" sx={{fontWeight:"bolder" , marginBottom:2}}>Limited</Typography>
            </Box>
          <Typography sx={{width:"90%" , textWrap:"pretty" , mb:3 }}>
            Curigen Pharmaceutical has established itself as a renowned name in
            the pharmaceutical industry, recognized for its unwaverin
            dedicationto delivering high-quality and effective pharmaceutical
            products. With years of experience
          </Typography>

          <Box sx={{display:"grid" , gridTemplateColumns:"repeat(2,0.5fr)" , width:"80%" , gap:2}}>
             <Box sx={{display:"flex" , alignItems:"center" , gap:1}}>
             <Image src="/dot.png" alt="" width={30} height={30}/>
             <Typography sx={{fontWeight:"bolder"}}>Streamlined Shipping Experience</Typography>
             </Box>

             <Box sx={{display:"flex" , alignItems:"center" , gap:1}}>
             <Image src="/dot.png" alt="" width={30} height={30} />
             <Typography sx={{fontWeight:"bolder"}}>Streamlined Shipping Experience</Typography>
             </Box>

             <Box sx={{display:"flex" , alignItems:"center" , gap:1}}>
             <Image src="/dot.png" alt="" width={30} height={30}/>
             <Typography sx={{fontWeight:"bolder"}}>Streamlined Shipping Experience</Typography>
             </Box>

             <Box sx={{display:"flex" , alignItems:"center" , gap:1}}>
             <Image src="/dot.png" alt="" width={30} height={30} />
             <Typography sx={{fontWeight:"bolder"}}>Streamlined Shipping Experience</Typography>
             </Box>
          </Box>
        </Box>
      </Box>
    )
}