import BackgroundImage from "@/common_components/backgroundComman";
import Footer from "@/Components/footer";
import Navbar from "@/Components/navbar";
import { Box, Container, Typography } from "@mui/material";

export default function InstituionalTenders() {
    return (
        <Box>
            <Box>
                <BackgroundImage imageUrl="/ServicesBG.png" css={{ height: "400px", width: "100%", objectFit: "cover" }}>
                    <Navbar />
                    <Box sx={{
                        width: { xs: "95%", sm: "90%", md: "80%" },
                        margin: "auto",
                        padding: { xs: "10px", sm: "20px" }
                    }}>
                        <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, color: "#023350", fontSize: { xs: "1.5rem", sm: "2rem", md: "2.25rem" } }}>
                            Services
                        </Typography>
                        <Typography variant="h5" sx={{ color: "#023350", fontSize: { xs: "18px", sm: "1.25rem" } , marginTop:{xs:"2%"} }}>
                            Home &gt;&gt; Services &gt;&gt;InstituionalTenders
                        </Typography>
                    </Box>
                </BackgroundImage>
            </Box>

            <Box sx={{
                width: "100%",
                display: "flex",
                marginBottom: { xs: "40px", md: "8%" },
                minHeight: { xs: "auto", md: "400px" }
            }}>
                <Container maxWidth="xl" sx={{ width: { xs: "98%", sm: "90%", md: "80%" }, padding: { xs: "10px", sm: "15px" }, margin: "auto" }}>
                    <Box>
                        <Typography variant="h4" sx={{ color: "#023350", fontWeight: 700, mb: 3, fontSize: { xs: "1.25rem", sm: "2rem", md: "2.25rem" } }}>
                        Institutional <span style={{ color: "#03A297", fontWeight: 700 }}>Tenders</span>
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 2, fontSize: { xs: "0.95rem", sm: "1rem" } }}>
                        As per WHO, efficient medicines supply systems are necessity for a strong health care system of any country. Sustainable financing, adequate human resources, comprehensive information systems, and coordination between healthcare partners and institutions are key components to ensure uninterrupted availability and accessibility of essential medicines in the country. Still, it is hard to find long term supply arrangements in many countries, especially in African and Oceanic continents.
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 2, fontSize: { xs: "0.95rem", sm: "1rem" } }}>
                        Curigen Pharma is collaborating with various Institutions like Government Offices and Community Hospitals to supply essential medicines and improving the healthcare Index. Apart from Long-term supply tenders, we also cater to demand for emergency tenders in which we can fast-track the dispatch process to meet the timeline set for the tender.
                        </Typography>
                    </Box>
                </Container>
            </Box>

            <Footer />
        </Box>
    );
}