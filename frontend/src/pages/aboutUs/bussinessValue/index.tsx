import { Box, Container, Typography } from "@mui/material";
// You would import specific icons here, e.g.:
// import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
// import GroupsIcon from '@mui/icons-material/Groups';
// import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
// import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
// import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
// import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';


// Define the data for each business value item
const businessValues = [
    {
        // icon: <PeopleOutlineIcon sx={{ fontSize: 30, color: '#fff' }} />, // Replace with actual icon component
        iconColor: '#03A297', // Example color for the icon background circle
        title: 'Human Welfare',
        description: 'To manufacture and make readily available, affordable medicines that are adept for the prevention and treatment of diseases.',
    },
    {
        // icon: <GroupsIcon sx={{ fontSize: 30, color: '#fff' }} />, // Replace with actual icon component
        iconColor: '#03A297',
        title: 'Corporate Responsibility',
        description: 'We are well-versed with the expectations and trust that our customers and stakeholders place in us and work towards getting them the best returns with the assurance of a healthier world.',
    },
    {
        // icon: <LocalHospitalIcon sx={{ fontSize: 30, color: '#fff' }} />, // Replace with actual icon component
        iconColor: '#03A297',
        title: 'Social Responsibility',
        description: 'Towards society, we feel an immense sense of responsibility to improve the quality of life for our patients through our innovative formulations which we strive to continuously improve.',
    },
    {
        // icon: <WorkspacePremiumIcon sx={{ fontSize: 30, color: '#fff' }} />, // Replace with actual icon component
        iconColor: '#03A297',
        title: 'Quality',
        description: 'When our products aim to alleviate pain and misery through medicine, we make doubly sure that they adhere to the highest standards of quality expected out of them.',
    },
    {
        // icon: <LightbulbOutlinedIcon sx={{ fontSize: 30, color: '#fff' }} />, // Replace with actual icon component
        iconColor: '#03A297',
        title: 'Innovation',
        description: 'By putting in ample R&D efforts, we innovate and develop new products which are world class in aspect of efficiency, usability and affordability.',
    },
     {
        // icon: <EmojiEventsOutlinedIcon sx={{ fontSize: 30, color: '#fff' }} />, // Replace with actual icon component
        iconColor: '#03A297',
        title: 'Ambition',
        description: "In consonance with the saying 'Sky is the Limit', we endeavour to aim for the stars, develop and inculcate a work culture where every person gets equal opportunity for growth. By the use of fair practices, we seek to expand our national and international boundaries.",
    },
    {
        // icon: <LightbulbOutlinedIcon sx={{ fontSize: 30, color: '#fff' }} />, // Replace with actual icon component - Note: duplicate "Innovation" in image
        iconColor: '#03A297',
        title: 'Innovation',
        description: 'By putting in ample R&D efforts, we innovate and develop new products which are world class in aspect of efficiency, usability and affordability.',
    },
];

export default function BusinessVision(){
    return (
        <Box sx={{ py: { xs: 4, md: 8 }, backgroundColor: '#F7F7F7F7' }}> {/* Added padding and light background */}
            <Container maxWidth="xl"> {/* Used md for max width */}
                <Typography variant="h4" sx={{ color:"#023350" ,  marginBottom:"15px", fontWeight: 700 }}>
                    Business <span style={{fontWeight:"700", color:"#03A297"}}>Value</span>
                </Typography>

                <Box sx={{ mt: 5 }}> {/* Added top margin for the list */}
                    {businessValues.map((item, index) => (
                        <Box
                            key={index}
                            sx={{
                                display: 'flex',
                                alignItems: 'flex-start', // Align icon and text to the top
                                backgroundColor: '#fff',
                                borderRadius: '15px', // Rounded corners
                                padding: { xs: 2, md: 3 }, // Padding inside the box
                                mb: 3, // Margin between items
                                boxShadow: '0 4px 12px rgba(0,0,0,0.08)', // Subtle shadow
                                gap: { xs: 2, md: 3 }, // Gap between icon and text
                            }}
                        >
                            {/* Icon Container (replace with actual icons if available) */}
                            <Box
                                sx={{
                                    flexShrink: 0, // Prevent shrinking
                                    width: { xs: 50, md: 60 }, // Icon circle size
                                    height: { xs: 50, md: 60 },
                                    borderRadius: '50%',
                                    backgroundColor: item.iconColor, // Background color
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    // If using actual icons, place them here
                                    // For now, this box acts as the icon placeholder circle
                                }}
                            >
                              {/* Example placeholder icon (replace with actual icon component) */}
                                <Box sx={{fontSize: { xs: 30, md: 35 }, color: '#fff'}}>💡</Box>
                            </Box>

                            {/* Text Content */}
                            <Box sx={{ flex: 1 }}> {/* Allows text to take remaining space */}
                                <Typography variant="h6" sx={{ fontWeight: 700, color: '#023350', mb: 1 }}>
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#555' }}>
                                    {item.description}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    )
}