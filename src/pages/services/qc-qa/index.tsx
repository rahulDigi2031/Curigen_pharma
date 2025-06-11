import BackgroundImage from "@/common_components/backgroundComman";
import Footer from "@/Components/footer";
import Navbar from "@/Components/navbar";
import { Box, Container, Typography } from "@mui/material";

export default function QCQA() {
    return (
        <Box>
            <header>
            <Box>
                <BackgroundImage imageUrl="/ServicesBG.png" css={{ height: "400px", width: "100%", objectFit: "cover" }}>
                    <Navbar />
                    <Container maxWidth="xl">
                        <Box sx={{width:"95%" , margin:"auto", padding:"20px"}}>
                        <Typography variant="h4" sx={{fontWeight:"700",mb:3,color:"#023350"}}>Services</Typography>
                        <Typography variant="h6" sx={{color:"#023350"}}>Home &gt;&gt; Services &gt;&gt; Quality Control and Quality Assurance</Typography>
                    </Box>
                    </Container>
                </BackgroundImage>
            </Box>
            </header>

            <main>
            <Box sx={{
                width: "100%",
                display: "flex",
                marginBottom: { xs: "40px", md: "8%" },
                minHeight: { xs: "auto", md: "400px" }
            }}>
                <Container maxWidth="xl" sx={{ width: { xs: "98%", sm: "90%", md: "80%" }, padding: { xs: "10px", sm: "15px" }, margin: "auto" }}>
                    <Box>
                        <Typography variant="h4" sx={{ color: "#023350", fontWeight: 700, mb: 3,textWrap:"wrap", fontSize: { xs: "1.40rem", sm: "2rem", md: "2.25rem" } }}>
                        Quality <span style={{ color: "#03A297", fontWeight: 700 }}>Control and Quality Assurance</span>
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 2, fontSize: { xs: "0.85rem", sm: "1rem" } }}>
                        Curigen Pharma, as the most reputed Manufacturer and Exporter of Pharmaceutical Products, always maintain high quality standard to meet customers’ expectations worldwide. Implementation of quality policy is done through Quality Management System (QMS) based on firm adherence to current Good Manufacturing Practices (GMP & cGMP) in conformance with national and international regulatory standards like WHO, FDA etc. All our manufacturing activities are carried out under Automated & Controlled environment with constant monitoring of products.
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 2, fontSize: { xs: "0.85rem", sm: "1rem" } }}>
                        We provide Quality Assurance (QA) through immaculate environmental monitoring, calibration and validation programs, right from the stage of procurement of raw material to delivery of finished product. A Standard Operating Procedure (SOP) is in place which forms the guideline for the procedures to be followed for each activity that is performed in the plants and laboratories. QA department coordinates with designing, development and manufacturing teams and maintains QMS across the organization.
                        </Typography>

                        <Typography variant="body2"sx={{ mb: 2, fontSize: { xs: "0.85rem", sm: "1rem" } }}>We have set-up Quality Control (QC) Laboratories with separate areas for Raw materials, Instrument, Microbiology, Sterility and Package testing. Our laboratories are well equipped with sophisticated instruments like Dissolution testers, UV-Visible spectrophotometers, HPLC, GLC, FTIR, Atomic Absorption and other testing instruments as per GLP and ISO 9001 guidelines. Our success is associated with our strong QC department and accuracy and consistency of the analytical results.</Typography>
                    </Box>
                </Container>
            </Box>
            </main>

            <footer>
            <Footer />
            </footer>
        </Box>
    );
}