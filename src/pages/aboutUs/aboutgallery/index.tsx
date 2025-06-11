import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function ManagementMessage() {
  return (
    <Box sx={{ width: "100%", maxWidth: "1400px", mx: "auto", my: { xs: 3, md: 5 }, px: { xs: 2, md: 0 } , marginBottom:"5%" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, 
          alignItems: "flex-start",
          gap: { xs: 2, md: 4 }, 
          mb: { xs: 6, md: 8 },
        }}
      >
        
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, color: "#023350", mb: 3 }}>
            Management <span style={{ fontWeight: "700", color: "#03A297" }}>Message</span>
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, color: '#555' }}>
            Our significant achievements in the last few years have helped the organization to expand into the global market. Our growth and success is credited to the cooperation and teamwork of all our employees who have always been our tremendous strength.
          </Typography>
           <Typography variant="body1" sx={{ mb: 2, color: '#555' }}>
            At Curigen, we follow an open and transparent culture where people are encouraged to present and implement their opinions and ideas. Our duty is to find the right talent, give them the right opportunity and always support them.
          </Typography>
           <Typography variant="body1" sx={{ mb: 2, color: '#555' }}>
            One of our core values - &#34;We are a team. Everyone matters.&#34; - has been the mantra that has taken Wellona Pharma to such heights. Hence, we have cultivated a work culture that permits our employees to learn, innovate and experiment with new ideas.
          </Typography>
           <Typography variant="body1" sx={{ mb: 2, color: '#555' }}>
            The constant support and encouragement from our valued customers is vital to us and we promise to deliver quality products that will help them to live a happier, healthier and more active life.
          </Typography>
           <Typography variant="body1" sx={{ color: '#555' }}>
            We are passionate about our goals and optimistic about our future as we explore more opportunities of expansion and growth at different stages of development.
          </Typography>
        </Box>

        {/* Image */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: { xs: "center", md: "flex-end" }, // Center on mobile, align right on desktop
            alignItems: "center",
            minWidth: 0, // Allows flex item to shrink
            mt: { xs: 3, md: 0 }, // Add top margin on mobile
          }}
        >
          <Image
            src="/Aboutimage.png" // Replace with the actual image path
            alt="Management Message"
            width={520} // Set a base width
            height={320} // Set a base height
            style={{
              borderRadius: "20px",
              objectFit: "cover",
              width: "100%", // Make image fluid up to maxWidth
              maxWidth: 520, // Max width of the image
              height: "auto", // Maintain aspect ratio
            }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // Stack on mobile, side-by-side on desktop
          alignItems: "flex-start", // Align items to the top
          gap: { xs: 2, md: 4 }, // Reduced gap between text and image
          mb: { xs: 6, md: 8 },
        }}
      >
        {/* Text Content */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, color: "#023350", mb: 3 }}>
            Management <span style={{ fontWeight: "700", color: "#03A297" }}>Message</span>
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, color: '#555' }}>
            Our significant achievements in the last few years have helped the organization to expand into the global market. Our growth and success is credited to the cooperation and teamwork of all our employees who have always been our tremendous strength.
          </Typography>
           <Typography variant="body1" sx={{ mb: 2, color: '#555' }}>
            At Curigen, we follow an open and transparent culture where people are encouraged to present and implement their opinions and ideas. Our duty is to find the right talent, give them the right opportunity and always support them.
          </Typography>
           <Typography variant="body1" sx={{ mb: 2, color: '#555' }}>
            One of our core values - &#34;We are a team. Everyone matters.&#34;- has been the mantra that has taken Wellona Pharma to such heights. Hence, we have cultivated a work culture that permits our employees to learn, innovate and experiment with new ideas.
          </Typography>
           <Typography variant="body1" sx={{ mb: 2, color: '#555' }}>
            The constant support and encouragement from our valued customers is vital to us and we promise to deliver quality products that will help them to live a happier, healthier and more active life.
          </Typography>
           <Typography variant="body1" sx={{ color: '#555' }}>
            We are passionate about our goals and optimistic about our future as we explore more opportunities of expansion and growth at different stages of development.
          </Typography>
        </Box>

        {/* Image */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: { xs: "center", md: "flex-end" }, 
            alignItems: "center",
            minWidth: 0, 
            mt: { xs: 3, md: 0 },
          }}
        >
          <Image
            src="/Aboutimage.png" 
            alt="Management Message"
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
    </Box>
  );
}