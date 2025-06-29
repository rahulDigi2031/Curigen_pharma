// import BackgroundImage from "@/common_components/backgroundComman";
import { Box, Typography, Container } from "@mui/material";

export default function GallerySection() {
  return (
    <Box className="w-full bg-[#F7F7F7] py-8 md:py-12">
      <Container maxWidth="xl" sx={{padding:"50px"}}>
        <Box sx={{ width: "100%", p: "15px" }}>
          <Typography  sx={{color:"#023350" , fontWeight:"700"}}
            variant="h5" 
            className="font-bold text-center md:text-left pb-8"
          >
            Our Branded and Generic medicines enjoy{" "}
            <span className="text-[#03A297] font-bold text-2xl md:text-3xl">
              steady demand in following countries:
            </span>
          </Typography>

          {/* First Row */}
          <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {/* Asia Box */}
            <Box className="bg-white p-6 rounded-2xl h-[300px] md:h-[350px]" sx={{ p: "10px" }}>
              <Box 
                className="relative h-full w-full rounded-2xl border-2 border-dotted border-green-500 opacity-45"
                style={{ backgroundImage: "url(/map1.png)", backgroundSize: "cover", }}
              >
                <Typography variant="h5" className="p-4 text-black font-bold">
                  ASIA
                </Typography>
                <Box className="p-4 text-black">
                  <Typography variant="body2" className="text-sm md:text-base">
                    Afghanistan, Israel, Jordan, Pakistan, Russia, Saudi Arabia, Singapore, Syria, Philippines, Turkey, Turkmenistan, Uzbekistan, Yemen, Vietnam, Indonesia, Malaysia, Iran, Tajikistan
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Africa Box */}
            <Box className="bg-white p-6 rounded-2xl h-[300px] md:h-[350px]" sx={{ p: "15px" }}>
              <Box 
                className="relative h-full w-full rounded-2xl border-2 border-dotted border-green-500 opacity-45"
                style={{ backgroundImage: "url(/map2.png)", backgroundSize: "cover" }}
              >
                <Typography variant="h5" className="p-4 text-black font-bold">
                  AFRICA
                </Typography>
                <Box className="p-4 text-black">
                  <Typography variant="body2" className="text-sm md:text-base">
                    South Africa, Uganda, Nigeria, Ghana, Kenya, Mauritius, Botswana, Egypt, Ethiopia, Libya, Sudan, Congo, Gambia, Ivory Coast
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* North & Latin America Box */}
            <Box className="bg-white p-6 rounded-2xl h-[300px] md:h-[350px]" sx={{ p: "15px" }}>
              <Box 
                className="relative h-full w-full rounded-2xl border-2 border-dotted border-green-500 opacity-45"
                style={{ backgroundImage: "url(/map3.png)", backgroundSize: "cover" }}
              >
                <Typography variant="h5" className="p-4 text-black font-bold">
                  NORTH & LATIN AMERICA
                </Typography>
                <Box className="p-4 text-black">
                  <Typography variant="body2" className="text-sm md:text-base">
                    South Africa, Uganda, Nigeria, Ghana, Kenya, Mauritius, Botswana, Egypt, Ethiopia, Libya, Sudan, Congo, Gambia, Ivory Coast
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Second Row */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
              gap: 3,
              mt:3
            }}
          >
            {/* Europe Box */}
            <Box className="bg-white p-6 rounded-2xl h-[300px] md:h-[350px]" sx={{ p: "15px" }}>
              <Box 
                className="relative h-full w-full rounded-2xl border-2 border-dotted border-green-500 opacity-45"
                style={{ backgroundImage: "url(/map4.png)", backgroundSize: "cover" }}
              >
                <Typography variant="h5" className="p-4 text-black font-bold">
                  EUROPE
                </Typography>
                <Box className="p-2 text-black">
                  <Typography variant="body2" className="text-sm md:text-base">
                    Austria, Azerbaijan, Belarus, Belgium, Cyprus, Czech Republic, Denmark, France, Georgia, Germany, Hungary, Ireland, Iceland, Netherlands, Norway, Poland, Spain, Sweden, Switzerland, Ukraine, United Kingdom (UK), Latvia
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Oceania Box */}
            <Box className="bg-white p-6 rounded-2xl h-[300px] md:h-[350px]" sx={{ p: "15px" }}>
              <Box 
                className="relative h-full w-full rounded-2xl border-2 border-dotted border-green-500 opacity-45"
                style={{ backgroundImage: "url(/map5.png)", backgroundSize: "cover" }}
              >
                <Typography variant="h5" className="p-4 text-black font-bold">
                  OCEANIA
                </Typography>
                <Box className="p-4 text-black">
                  <Typography variant="body1" className="text-sm md:text-base">
                    Australia, New Zealand, Fiji
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Mantra Box */}
            <Box 
              className="p-6 rounded-2xl h-[300px] md:h-[350px]"
              style={{ backgroundImage: "url(/map6.png)", backgroundSize: "cover" }}
            >
              <Box className="h-full w-full rounded-2xl border-2 border-dotted border-white">
                <Box className="flex items-center p-3 text-black">
                  <Typography 
                    variant="body2" 
                    className="text-sm md:text-base pt-20 text-center"
                  >
                    Our mantra has always been global. Only the best quality, capability, infrastructure and pricing can survive in this market.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}