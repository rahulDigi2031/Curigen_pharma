import BackgroundImage from "@/common_components/backgroundComman";
import Footer from "@/Components/footer";
import Navbar from "@/Components/navbar";
import { Box, Container, Typography } from "@mui/material";

export default function GeniricsProducts() {
    return (
        <Box>
            <Box>
                <BackgroundImage imageUrl="/ServicesBG.png" css={{ height: "400px", width: "100%", objectFit: "cover" }}>
                    <Navbar />
                    <Container maxWidth="xl">
                        <Box sx={{width:"95%" , margin:"auto", padding:"20px"}}>
                        <Typography variant="h4" sx={{fontWeight:"700",mb:3,color:"#023350"}}>Services</Typography>
                        <Typography variant="h5" sx={{color:"#023350" , fontWeight:"450"}}>Home &gt;&gt; Services &gt;&gt; GenericMedicines</Typography>
                    </Box>
                    </Container>
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
                            Generic<span style={{ color: "#03A297", fontWeight: 700 }}>Medicines</span>
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 2, fontSize: { xs: "0.95rem", sm: "1rem" } }}>
                            Curigen Pharma is a leading Generic Pharmaceutical company in India, manufacturing Generic Medicines and building a strong presence in a number of emerging markets worldwide.
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 2, fontSize: { xs: "0.95rem", sm: "1rem" } }}>
                            Our products cover each therapeutic class and extensive range of dosage forms. We are supplying generic medicines for almost all of the therapeutic classes such as Antiviral, Antimalarial, Antifungal, Anticancer (Oncology), Erectile Dysfunction, Sex Enhancement, Cardiovascular, Beta-lactamAntibiotics, NSAIDs, Antidiabetic, Antiasthmatic, Antiemetic, Anesthetic, Antacid, Painkillers, Antiallergic, Antihypertensive, Dermatological, Ophthalmic, Gastricmedicines in the form of Coated and Uncoated Tablets, Effervescent Tablets, Sustained Release (SR) Tablets, Chewable Tablets, Flavored Tablets,Capsules, Derma Care,Transdermals, Topical Preparations, Dry Syrups, Vials,Oral Liquids, Suspension, Gel, Creams, Lotions, Ointments, Dry Injections, Drops, Inhalers andExternal Formulations.
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 2, fontSize: { xs: "0.95rem", sm: "1rem" } }}>
                            We have capitalized on every opportunity to bring our high-quality products to more people around the world. With our deep customer relationships, quality medicines and consistently delivered promise make us a Globally Trusted Brand for generic medicines.
                        </Typography>
                    </Box>
                </Container>
            </Box>

            <Footer />
        </Box>
    );
}