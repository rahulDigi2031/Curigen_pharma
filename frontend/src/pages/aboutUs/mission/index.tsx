import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function MissionSection() {
    return (
        <Box sx={{ width: "100%", maxWidth: "1400px", mx: "auto", my: { xs: 3, md: 5 }, px: { xs: 2, md: 0 } , marginBottom:"40px"}}>
            {/* Mission Section */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: "flex-start",
                    gap: { xs: 4, md: 8 },
                    mb: { xs: 6, md: 8 },
                }}
            >
                <Box sx={{ flex: 1 }}>
                    <Typography variant="h4" sx={{ fontWeight: 700, color: "#023350", mb: 3 }}>
                        Mission
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3 }}>
                        Curigen mission is to uphold our social responsibility by improving the Quality of human life by providing Quality Products of International Standards and ensuring premier Health Care for the society. They endeavor to utilize their full potential by delivering balanced and improved Product Portfolio with Best Quality at Optimum Price. Wellona envisages of being a forerunner in the most emerging and ever growing Pharmaceutical Market.
                    </Typography>
                    <Typography variant="body1">
                        Curigen believes that complete customer satisfaction is the key to increase reputation and subsequently to expand business. It provides genuine and timely solutions to keep business commitments in true spirit. Prompt responsiveness and acceptance of regulatory compliance comes naturally. Vigor to excel in Research, Technology, Resources and Services, renders Wellona a well-defined edge over its competitors.
                    </Typography>
                </Box>
                <Box
                    sx={{
                        flex: 1,
                        display: "flex",
                        justifyContent: { xs: "center", md: "flex-end" },
                        alignItems: "center",
                        minWidth: 0,
                    }}
                >
                    <Image
                        src="/Aboutimage.png"
                        alt="Mission"
                        width={520}
                        height={320}
                        style={{
                            borderRadius: "20px",
                            objectFit: "cover",
                            width: "100%",
                            maxWidth: 520,
                            height: "auto",
                        }}
                    />
                </Box>
            </Box>

            {/* Vision Section */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: "flex-start",
                    gap: { xs: 4, md: 8 },
                }}
            >
                <Box
                    sx={{
                        flex: 1,
                        display: "flex",
                        justifyContent: { xs: "center", md: "flex-start" },
                        alignItems: "center",
                        minWidth: 0,
                    }}
                >
                    <Image
                        src="/Aboutimage.png"
                        alt="Vision"
                        width={520}
                        height={160} // Smaller height for the second image
                        style={{
                            borderRadius: "20px",
                            objectFit: "cover",
                            width: "100%",
                            maxWidth: 520,
                            height: "160px", // Fixed height for the second image
                        }}
                    />
                </Box>
                <Box sx={{ flex: 1 }}>
                    <Typography variant="h4" sx={{ fontWeight: 700, color: "#023350", mb: 3 }}>
                        Vision
                    </Typography>
                    <Typography variant="body1">
                        As an innovative, dynamic and reliable Pharmaceutical company, our vision is to stand out as exemplary performer in national as well as international market. Wellona wants to excel in manufacturing Highest Quality Products with ethics and obliged to do right and fair business practices.
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}