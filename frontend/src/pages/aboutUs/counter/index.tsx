import { Box, Container, Typography } from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import GroupsIcon from "@mui/icons-material/Groups";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import MedicationIcon from "@mui/icons-material/Medication";


export default function Counter(){

    return(
        <Box>
            <Box sx={{ width: "100%", backgroundColor: "#22A396", py: { xs: 4, md: 6 }, mb: 4, }}>
                <Container maxWidth="xl">
                    <Box sx={{ width: { xs: "98%", sm: "90%", md: "98%" }, mx: "auto",
                            display: "flex",
                            flexDirection: { xs: "column", sm: "row" },
                            justifyContent: "space-between",
                            alignItems: "center",
                            gap: { xs: 4, sm: 0 },
                        }}
                    >
                        {/* 1st Stat */}
                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <Box
                                sx={{
                                    backgroundColor: "#04354b",
                                    border: "3px solid #fff",
                                    borderRadius: "50%",
                                    height: 80,
                                    width: 80,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    mb: 2,
                                }}
                            >
                                <PublicIcon sx={{ fontSize: 35, color: "#fff" }} />
                            </Box>
                            <Typography
                                sx={{
                                    fontWeight: "bold",
                                    fontSize: { xs: "2rem", md: "2.5rem" },
                                    color: "#fff",
                                    lineHeight: 1,
                                }}
                            >
                                86 <span style={{ fontWeight: 700, fontSize: "2rem" }}>+</span>
                            </Typography>
                            <Typography
                                sx={{
                                    color: "#fff",
                                    fontWeight: 600,
                                    fontSize: { xs: "1rem", md: "1.25rem" },
                                    textAlign: "center",
                                }}
                            >
                                Countries
                            </Typography>
                        </Box>
                        {/* 2nd Stat */}
                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <Box
                                sx={{
                                    backgroundColor: "#04354b",
                                    border: "3px solid #fff",
                                    borderRadius: "50%",
                                    height: 80,
                                    width: 80,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    mb: 2,
                                }}
                            >
                                <GroupsIcon sx={{ fontSize: 35, color: "#fff" }} />
                            </Box>
                            <Typography
                                sx={{
                                    fontWeight: "bold",
                                    fontSize: { xs: "2rem", md: "2.5rem" },
                                    color: "#fff",
                                    lineHeight: 1,
                                }}
                            >
                                250 <span style={{ fontWeight: 700, fontSize: "2rem" }}>+</span>
                            </Typography>
                            <Typography
                                sx={{
                                    color: "#fff",
                                    fontWeight: 600,
                                    fontSize: { xs: "1rem", md: "1.25rem" },
                                    textAlign: "center",
                                }}
                            >
                                International Clients
                            </Typography>
                        </Box>
                        {/* 3rd Stat */}
                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <Box
                                sx={{
                                    backgroundColor: "#04354b",
                                    border: "3px solid #fff",
                                    borderRadius: "50%",
                                    height: 80,
                                    width: 80,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    mb: 2,
                                }}
                            >
                                <VaccinesIcon sx={{ fontSize: 35 , color: "#fff" }} />
                            </Box>
                            <Typography
                                sx={{
                                    fontWeight: "bold",
                                    fontSize: { xs: "2rem", md: "2.5rem" },
                                    color: "#fff",
                                    lineHeight: 1,
                                }}
                            >
                                600 <span style={{ fontWeight: 700, fontSize: "2rem" }}>+</span>
                            </Typography>
                            <Typography
                                sx={{
                                    color: "#fff",
                                    fontWeight: 600,
                                    fontSize: { xs: "1rem", md: "1.25rem" },
                                    textAlign: "center",
                                }}
                            >
                                Sterile Products
                            </Typography>
                        </Box>
                        {/* 4th Stat */}
                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <Box
                                sx={{
                                    backgroundColor: "#04354b",
                                    border: "3px solid #fff",
                                    borderRadius: "50%",
                                    height: 80,
                                    width: 80,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    mb: 2,
                                }}
                            >
                                <MedicationIcon sx={{ fontSize: 35 , color: "#fff" }} />
                            </Box>
                            <Typography
                                sx={{
                                    fontWeight: "bold",
                                    fontSize: { xs: "2rem", md: "2.5rem" },
                                    color: "#fff",
                                    lineHeight: 1,
                                }}
                            >
                                900 <span style={{ fontWeight: 700, fontSize: "2rem" }}>+</span>
                            </Typography>
                            <Typography
                                sx={{
                                    color: "#fff",
                                    fontWeight: 600,
                                    fontSize: { xs: "1rem", md: "1.25rem" },
                                    textAlign: "center",
                                }}
                            >
                                Non - Sterile Products
                            </Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Box>
    )
}