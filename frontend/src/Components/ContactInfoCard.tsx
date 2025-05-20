import { Box, Typography, Card, CardContent } from "@mui/material";

interface ContactInfoCardProps {
    icon: React.ReactNode;
    title: string;
    details: string[];
}

export default function ContactInfoCard({ icon, title, details }: ContactInfoCardProps) {
    return (
        <Card>
            <CardContent className="flex items-center gap-4">
                <Box className="bg-teal-500 text-white rounded-full p-3">
                    {icon}
                </Box>
                <Box>
                    <Typography variant="h6" component="div">
                        {title}
                    </Typography>
                    {details.map((detail, index) => (
                        <Typography key={index} variant="body2" color="text.secondary">
                            {detail}
                        </Typography>
                    ))}
                </Box>
            </CardContent>
        </Card>
    );
} 