import { Box, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";

const sectionData = [
    {
        title: "Our Partnering Policy",
        content: "We believe in working together towards success, with mutual trust, understanding our partner's requirements and above all satisfying them.",
        image: "/grid1.png",
        imageFirst: false
    },
    {
        title: "Partnerships",
        content: "Our products are available to local pharmaceutical distributors in most countries. We support our partners with manufacture and supply of pharmaceutical products according to their requirements and specifications. We provide the marketing support to our partners. Our business development team and Regulatory team are always at our customer's service.",
        image: "/grid2.png",
        imageFirst: true
    },
    {
        title: "Customer Specific Manufacture And Supply",
        content: "Our products are available under private label to our distributors and partners in most countries. In order to satisfy the diverse needs of our various customers located in different parts of the world we believe in developing products specific to the requirements of our customers.",
        image: "/grid3.png",
        imageFirst: false
    },
    {
        title: "Co-marketing",
        content: "At Wellona Pharma, we help build 'molecules into brands.' We work with our Customers, strategically and programmatically, to accelerate, expand and extend the product life cycles of ethical drugs. We have developed considerable brand marketing experience in the emerging markets through our portfolio of branded generics. We focus on new generations of drugs thereby ascending the value chain in the marketing and ultimately increase revenues from the sales of our products.",
        image: "/grid4.png",
        imageFirst: true
    },
    {
        title: "Regulatory Support/ Services",
        content: "Our Regulatory team consists of elite, highly qualified personnel engaged in providing data required to assure the high Quality, efficacy and safety of our Products. We can provide, clinical Trials, FDA Certificates and BE Studies for registration of our products as per guidelines of most health authorities in most countries.",
        image: "/grid5.png",
        imageFirst: false
    },
    {
        title: "Logistics",
        content: "We understand that distribution of pharmaceutical products must be undertaken with a great deal of care and attention. Raw materials awaiting processing and finished products awaiting dispatch are stored in modern, fully climate-controlled high-bay storage areas. We are able to meet the delivery needs of its customers thanks to its modern data and order processing systems, its inspections of all goods entering and leaving the factory, and the latest transport logistics (road, sea or air). No matter what route product takes, or how long it takes to get there, its journey is carefully monitored until it reaches its destination.",
        image: "/grid6.png",
        imageFirst: true
    }
];

const successFactors = [
    [
        "High quality products.",
        "Flexible responsive service.",
        '"Just In time" delivery approach.',
        "Competitive pricing",
        "Excellent compliance record."
    ],
    [
        "Efficient technical transfers.",
        "Modern GMP Certified facilities.",
        "FDA approved site.",
        "Strong Regulatory support.",
        "Efficient inventory coverage."
    ]
];

export default function GridImageSection() {
    const isMobile = useMediaQuery('(max-width:768px)');
    const isTablet = useMediaQuery('(max-width:1024px)');

    const sectionStyle = {
        height: isMobile ? "auto" : "300px",
        width: isMobile ? "95%" : isTablet ? "90%" : "80%",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        margin: "auto",
        padding: isMobile ? "20px 0" : "0"
    };

    const imageStyle = {
        borderRadius: "16px",
        width: isMobile ? "100%" : "580px",
        height: isMobile ? "auto" : "250px",
        objectFit: "cover" as const
    };

    const contentBoxStyle = {
        flex: 1,
        width: isMobile ? "100%" : "auto",
        padding: isMobile ? "20px 0" : "0"
    };

    return (
        <Box sx={{ width: isMobile ? "95%" : isTablet ? "90%" : "80%", margin: "auto" }}>
            {sectionData.map((section, index) => (
                <Box key={index} sx={sectionStyle}>
                    {section.imageFirst ? (
                        <>
                            <Box sx={contentBoxStyle}>
                                <Image 
                                    src={section.image} 
                                    alt={section.title} 
                                    width={580} 
                                    height={250} 
                                    style={imageStyle}
                                    priority={index === 0}
                                />
                            </Box>
                            <Box sx={contentBoxStyle}>
                                <Typography 
                                    variant={isMobile ? "h6" : "h5"} 
                                    sx={{ 
                                        fontWeight: 700, 
                                        color: "#023350", 
                                        mb: 2,
                                        fontSize: isMobile ? "1.25rem" : "1.5rem"
                                    }}
                                >
                                    {section.title.split(" ").map((word, i) => 
                                        word.toLowerCase().includes("policy") || word.toLowerCase().includes("manufacture") || 
                                        word.toLowerCase().includes("support") || word.toLowerCase().includes("marketing") ? 
                                        <span key={i} style={{ color: "#03A297" }}> {word}</span> : 
                                        <span key={i}> {word}</span>
                                    )}
                                </Typography>
                                <Typography 
                                    variant="body1"
                                    sx={{
                                        fontSize: isMobile ? "0.9rem" : "1rem",
                                        lineHeight: 1.6
                                    }}
                                >
                                    {section.content}
                                </Typography>
                            </Box>
                        </>
                    ) : (
                        <>
                            <Box sx={contentBoxStyle}>
                                <Typography 
                                    variant={isMobile ? "h6" : "h5"} 
                                    sx={{ 
                                        fontWeight: 700, 
                                        color: "#023350", 
                                        mb: 2,
                                        fontSize: isMobile ? "1.25rem" : "1.5rem"
                                    }}
                                >
                                    {section.title.split(" ").map((word, i) => 
                                        word.toLowerCase().includes("policy") || word.toLowerCase().includes("manufacture") || 
                                        word.toLowerCase().includes("support") || word.toLowerCase().includes("marketing") ? 
                                        <span key={i} style={{ color: "#03A297" }}> {word}</span> : 
                                        <span key={i}> {word}</span>
                                    )}
                                </Typography>
                                <Typography 
                                    variant="body1"
                                    sx={{
                                        fontSize: isMobile ? "0.9rem" : "1rem",
                                        lineHeight: 1.6
                                    }}
                                >
                                    {section.content}
                                </Typography>
                            </Box>
                            <Box sx={contentBoxStyle}>
                                <Image 
                                    src={section.image} 
                                    alt={section.title} 
                                    width={580} 
                                    height={250} 
                                    style={imageStyle}
                                    priority={index === 0}
                                />
                            </Box>
                        </>
                    )}
                </Box>
            ))}

            <Box sx={{
                width: isMobile ? "95%" : isTablet ? "90%" : "80%",
                margin: "auto",
                marginTop: isMobile ? "10%" : "5%",
                marginBottom: isMobile ? "15%" : "12%"
            }}>
                <Typography 
                    variant={isMobile ? "subtitle1" : "h6"} 
                    sx={{ 
                        fontWeight: 700, 
                        color: "#023350",
                        fontSize: isMobile ? "1.1rem" : "1.25rem"
                    }}
                >
                    In A Nutshell, The Factors That Have Made Us Successful In Drug Manufacturing For Overseas Markets Are:
                </Typography>
                <Box sx={{ 
                    display: "flex", 
                    flexDirection: isMobile ? "column" : "row",
                    flexWrap: "wrap", 
                    justifyContent: "space-between", 
                    maxWidth: "900px", 
                    mt: 2,
                    gap: isMobile ? 2 : 0
                }}>
                    {successFactors.map((list, index) => (
                        <Box 
                            key={index} 
                            component="ul" 
                            sx={{ 
                                width: isMobile ? "100%" : "45%", 
                                pl: 2, 
                                color: "#6c7586", 
                                fontSize: isMobile ? "14px" : "16px", 
                                m: 0 
                            }}
                        >
                            {list.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}