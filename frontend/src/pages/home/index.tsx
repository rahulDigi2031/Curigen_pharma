import Header from "@/Components/header";
import { Box, Card, Typography } from "@mui/material";
import { useState } from "react";
import Image from "next/image";
import ServiceComaponent from "@/Components/ServiceComponent";

export default function Homepage() {
  const [user, setUser] = useState(null);

  const itemCategory = [
    { image: "/tablet.png", label: "Tablet", count: 30 },
    { image: "/capsule.png", label: "Capsule", count: 30 },
    { image: "/injection.png", label: "Injection", count: 30 },
    { image: "/syrup.png", label: "Suspension / syrup", count: 30 },
    { image: "/eye-ear.png", label: "Eye / EarDrops", count: 30 },
    { image: "/other.png", label: "Other", count: 30 },
  ];

  return (
    <Box>
      <Header />
      {/* Items Categories below side */}
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
              key={index}
              variant="outlined"
              sx={{
                width: 200,
                height: 300,
                border: "1px dotted black",
                borderRadius: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: 2,
                boxShadow: "3,7,10 #B2C6D5",
              }}
            >
              <img src={item.image} alt={item.label} width={230} height={230} />
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0 }}>
                {item.label}
              </Typography>
              <Typography variant="body2" sx={{ color: "#1D9B8A", mb: 4 }}>
                {item.count} Items
              </Typography>
            </Card>
          ))}
        </Box>
      </Box>
      {/* experince section below side */}
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
      <ServiceComaponent />

    </Box>
  );
}
