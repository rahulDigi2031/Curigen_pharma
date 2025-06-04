import BackgroundImage from "@/common_components/backgroundComman";
import Footer from "@/Components/footer";
import Navbar from "@/Components/navbar";
import { Box, Container, Grid, List, ListItem, ListItemText, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";


export default function ContractManufacturing(){
    const productionData = [
        { unit: "Powders", capacity: "3.0 Million" },
        { unit: "Tablets", capacity: "240 Million" },
        { unit: "Hard Gelatin Capsules", capacity: "20 Million" },
        { unit: "Soft Gelatin Capsules", capacity: "10 Million" },
        { unit: "Liquid Syrup", capacity: "6.0 Million" },
        { unit: "Dry Syrups", capacity: "6.0 Million" },
        { unit: "External Preparations/ Ointments/ Creams", capacity: "6.0 Million" },
        { unit: "Eye/ Ear Drops", capacity: "12 Million" },
      ];
      
      const injectableData = [
        { unit: "Liquid Vials", capacity: "25 Million" },
        { unit: "Ampoules", capacity: "60 Million" },
        { unit: "Powder For Injections", capacity: "60 Million" },
        { unit: "Lyophilized Products", capacity: "1.0 Million" },
      ];

      const features = [
        "State-of-the art facilities adhering to WHO-GMP specifications",
        "Fully computerized system for manufacturing",
        "Capabilities to produce dosage forms in sterile and general, covering all therapeutic segments including small and large volume parenterals (SVP and LVP)",
        "Dedicated production facilities for Beta-Lactum, Cephalosporin products.",
        "Qualified and experienced technical team in each area of Pharma Contract Manufacturing like Quality Control, Quality Assurance and Product Development",
      ];

    return (
        <Box>
            <header>
            <Box>
                <BackgroundImage imageUrl="/ServicesBG.png" css={{ height: "400px", width: "100%", objectFit: "cover" }}>
                    <Navbar />
                    <Container maxWidth="xl">
                    <Box sx={{
                        width: { xs: "95%", sm: "90%", md: "95%" },
                        margin: "auto",
                        padding: { xs: "10px", sm: "20px" }
                    }}>
                        <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, color: "#023350", fontSize: { xs: "1.5rem", sm: "2rem", md: "2.25rem" } }}>
                            Services
                        </Typography>
                        <Typography variant="h5" sx={{ color: "#023350", fontSize: { xs: "1rem", sm: "1.25rem" } }}>
                            Home &gt;&gt; Services &gt;&gt;ContractManufacturing
                        </Typography>
                    </Box>
                    </Container>
                </BackgroundImage>
            </Box>
            </header>

            <main>
                <Container maxWidth="xl">
                    <Box sx={{p:"50px"}}>
                    <Typography variant="h4" sx={{fontWeight:"700",color:"#023350",mb:2}}>Contract <span style={{color:"#03A297"}}>Manufacturing</span></Typography>
                    <Typography variant="body1" sx={{mb:3}}>Curigen Pharma, a Pharmaceutical Contract Manufacturing Company provides WHO GMP quality for all its Formulations.Wellona Pharma has been a reliable and trusted partner of the Healthcare Industries with a history of proven Quality Products and Services. We currently manufacture products on contract basis at our facility for various leading pharmaceutical companies both for the Domestic as well as Export markets. Backed by a team of highly qualified and experienced professionals, we are capable of customizing the full range of Pharma Formulations as per the customer needs.</Typography>

                    <Box>
                        <Typography variant="h5" sx={{mb:1}}>Some of the salient features of our Contract Manufacturing Service are:</Typography>
                         <Typography variant="body2" sx={{padding:"0px 20px" , mb:1}}>
                         <List sx={{ paddingLeft: 3 }}>
                            {features.map((item, index) => (
                                <ListItem key={index} sx={{ display: "list-item" }}>
                                <ListItemText primary={item} />
                                </ListItem>
                            ))}
                            </List>
                        </Typography>   

                        <Typography variant="body2" sx={{mb:4}}>
                          Being a focused Contract Manufacturing Company, our customers find us to be the preferred source for their manufacturing requirements and won a clientele that is satisfied with our service quality.                     
                        </Typography>                     
                    </Box>

                    <Box>
                        <Typography variant="h5" sx={{mb:4 , fontWeight:"500"}}>Production Capacity:</Typography>
                        {/* table here */}
                        <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <TableContainer component={Paper} sx={{ borderRadius: 2 }}>
                            <Table>
                                <TableHead sx={{ backgroundColor: "#033350" }}>
                                <TableRow>
                                    <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>Productions Unit</TableCell>
                                    <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>Yearly Production Capacity</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {productionData.map((row, idx) => (
                                    <TableRow key={idx}>
                                    <TableCell>{row.unit}</TableCell>
                                    <TableCell>{row.capacity}</TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                            </TableContainer>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TableContainer component={Paper} sx={{ borderRadius: 2 , fontSize:"40px" }}>
                            <Table>
                                <TableHead sx={{ backgroundColor: "#033350" }}>
                                <TableRow>
                                    <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>Injectable Production Unit</TableCell>
                                    <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>Yearly Production Capacity</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {injectableData.map((row, idx) => (
                                    <TableRow key={idx}>
                                    <TableCell>{row.unit}</TableCell>
                                    <TableCell>{row.capacity}</TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                            </TableContainer>
                        </Grid>
                        </Grid>
                    </Box>
                    </Box>
                 </Container>

            </main>

            <footer>
                <Footer/>
            </footer>
        </Box>
    )
}