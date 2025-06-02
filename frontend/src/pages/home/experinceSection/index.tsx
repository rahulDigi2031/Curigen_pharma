import { Box, Typography, Container } from "@mui/material";
import Image from "next/image";

export default function ExperinceSection() {
    return (
        <Container maxWidth="xl" sx={{ width: "80%", margin: "auto", py:1 }}>
            <Box sx={{ 
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                gap: { xs: 4, md: 8 },
                mt: { xs: 10, sm: 10, md: 0 },
                position: 'relative',
            }}>
                <Box sx={{ 
                    width: { xs: '100%', md: '50%' },
                    position: 'relative',
                    padding:"25px"
                }}>
                    <Image 
                        src="/group174.png" 
                        alt="Experience Section" 
                        width={500} 
                        height={400} 
                        style={{
                            width: '800px',
                            height: '600px',
                            borderRadius: '20px',
                            overflow: 'hidden',
                            objectFit:"contain"
                        }}
                    />
                </Box>

                <Box sx={{ 
                    width: { xs: '100%', md: '50%' }
                }}>
                    <Box sx={{ mb: 1 }}>
                        <Typography 
                            variant="h6"
                            sx={{ 
                                color: '#23A397',
                                fontWeight: 800
                            }}
                        >
                            WEL-COME TO
                        </Typography>
                    </Box>

                    <Box sx={{ mb: 2 }}>
                        <Typography variant="h4" sx={{ fontWeight: 800, color: '#002B5B' }}>
                            <Box component="span" sx={{ color: '#23A397' }}>Curigen</Box> Pharmaceuticals
                        </Typography>
                        <Typography variant="h4" sx={{ fontWeight: 800, color: '#002B5B' }}>
                            Limited
                        </Typography>
                    </Box>

                    <Typography sx={{ mb: 3, color: '#6b7280' }}>
                        Curigen Pharmaceutical has established itself as a renowned name in
                        the pharmaceutical industry, recognized for its unwavering
                        dedicationto delivering high-quality and effective pharmaceutical
                        products. With years of experience
                    </Typography>

                    <Box sx={{ 
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                        gap: { xs: 2, sm: 4 }
                    }}>
                        {[1, 2, 3, 4].map((item, index) => (
                            <Box key={index} sx={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                gap: 1 
                            }}>
                                <Box sx={{
                                    width: 10,
                                    height: 10,
                                    bgcolor: '#002B5B',
                                    borderRadius: '50%',
                                    flexShrink: 0
                                }} />
                                <Typography sx={{ fontWeight: 'bold', color: '#002B5B' }}>
                                    {index === 0 && 'Streamlined Shipping Experience'}
                                    {index === 1 && 'Affordable Modern Design'}
                                    {index === 2 && 'Competitive Price & Easy To Shop'}
                                    {index === 3 && 'We Made Awesome Products'}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}